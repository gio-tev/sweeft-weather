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

  useEffect(() => {
    NetInfo.addEventListener(state => {
      setNetworkAvailable(state.isConnected);
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { Tbilisi, Kutaisi, Batumi } = coords;

      const excludeExceptCurrent = ['hourly', 'minutely', 'daily', 'alerts'];
      const excludeExceptHourly = ['current', 'minutely', 'daily', 'alerts'];

      const resTbCur = await getData(Tbilisi, excludeExceptCurrent);
      const resKuCur = await getData(Kutaisi, excludeExceptCurrent);
      const resBaCur = await getData(Batumi, excludeExceptCurrent);

      const resTbHouly = await getData(Tbilisi, excludeExceptHourly);
      const resKuHouly = await getData(Kutaisi, excludeExceptHourly);
      const resBaHouly = await getData(Batumi, excludeExceptHourly);

      if (
        resTbCur === 'Error' ||
        resKuCur === 'Error' ||
        resBaCur === 'Error' ||
        resTbHouly === 'Error' ||
        resKuHouly === 'Error' ||
        resBaHouly === 'Error'
      ) {
        setFetchError(true);
        setIsLoading(false);
        return;
      }
      const tbilisiHourly = resTbHouly?.hourly.slice(1, 13);
      const kutaisiHourly = resKuHouly?.hourly.slice(1, 13);
      const batumiHourly = resBaHouly?.hourly.slice(1, 13);

      const result = {
        tbilisi: { current: resTbCur, hourly: tbilisiHourly },
        kutaisi: { current: resKuCur, hourly: kutaisiHourly },
        batumi: { current: resBaCur, hourly: batumiHourly },
      };

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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
