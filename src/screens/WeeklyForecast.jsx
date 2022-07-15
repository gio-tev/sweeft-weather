import { useEffect, useState } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

import { coords } from '../utils/coords';
import { getData } from '../utils/https';
import { colors } from '../utils/colors';
import Error from '../components/Error';
import WeeklyContent from '../components/weekly/WeeklyContent';
import { showToast } from '../utils/toast';

const WeeklyForecast = ({ route }) => {
  const [dailyForecast, setDailyForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  const { city, networkAvailable } = route.params;

  const cityCoords = coords[city];
  const exclude = ['current', 'minutely', 'hourly', 'alerts'];

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData(cityCoords, exclude);

      if (res === 'Error') {
        setFetchError(true);
        setIsLoading(false);
        return;
      }

      setDailyForecast(res.daily);
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
          <WeeklyContent city={city} data={dailyForecast} />
        </>
      )}
    </View>
  );
};

export default WeeklyForecast;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
