import { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

import Card from '../components/UI/card/Card';
import Error from '../components/Error';
import { getData } from '../utils/https';
import { coords } from '../utils/coords';
import { colors } from '../utils/colors';
import { showToast } from '../utils/toast';

const Home = () => {
  const [networkAvailable, setNetworkAvailable] = useState(true);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  const { Tbilisi, Kutaisi, Batumi } = coords;
  const exclude = ['minutely', 'hourly', 'daily', 'alerts'];

  useEffect(() => {
    NetInfo.addEventListener(state => {
      setNetworkAvailable(state.isConnected);
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const resTbi = await getData(Tbilisi, exclude);
      const resKut = await getData(Kutaisi, exclude);
      const resBat = await getData(Batumi, exclude);

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

  if (!networkAvailable) showToast('No internet connection');

  return (
    <View style={styles.container}>
      {!isLoading && fetchError && <Error onRefresh={refresh} />}

      {isLoading && !fetchError && (
        <ActivityIndicator size="large" color={colors.primaryGreen} />
      )}

      {!isLoading && !fetchError && (
        <>
          <Card city="Tbilisi" data={data.tbilisi} networkAvailable={networkAvailable} />
          <Card city="Kutaisi" data={data.kutaisi} networkAvailable={networkAvailable} />
          <Card city="Batumi" data={data.batumi} networkAvailable={networkAvailable} />
        </>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
