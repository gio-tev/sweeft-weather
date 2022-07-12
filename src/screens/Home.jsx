import { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

import Card from '../components/UI/Card';
import Error from '../components/Error';
import { getData } from '../utils/https';
import { coords } from '../utils/coords';
import { colors } from '../utils/colors';

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  const { tbiCoords, kutCoords, batCoords } = coords;

  useEffect(() => {
    const fetchData = async () => {
      const resTbi = await getData(tbiCoords.lat, tbiCoords.lon);
      const resKut = await getData(kutCoords.lat, kutCoords.lon);
      const resBat = await getData(batCoords.lat, batCoords.lon);

      if (resTbi === 'Error' || resKut === 'Error' || resBat === 'Error') {
        setFetchError(true);
        setIsLoading(false);
        return;
      }

      const result = { tbilisi: resTbi, kutaisi: resKut, batumi: resBat };

      setData(result);
      setIsLoading(false);
    };

    fetchData();
  }, [fetchError]);

  const refresh = () => {
    setIsLoading(true);
    setFetchError(false);
  };

  return (
    <View style={styles.container}>
      {!isLoading && fetchError && <Error onRefresh={refresh} />}

      {isLoading && !fetchError && (
        <ActivityIndicator size="large" color={colors.primaryGreen} />
      )}

      {!isLoading && !fetchError && (
        <>
          <Card city="Tbilisi" data={data.tbilisi} />
          <Card city="Kutaisi" data={data.kutaisi} />
          <Card city="Batumi" data={data.batumi} />
        </>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40,
  },
});
