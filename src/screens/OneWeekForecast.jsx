import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { coords } from '../utils/coords';
import { getData } from '../utils/https';
import { colors } from '../utils/colors';
import Error from '../components/Error';
import OneWeekContent from '../components/one-week/OneWeekContent';

const OneWeekForecast = ({ route }) => {
  const [dailyForecast, setDailyForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  const { city } = route.params;
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

  return (
    <View>
      {!isLoading && fetchError && <Error onRefresh={refresh} />}

      {isLoading && !fetchError && (
        <ActivityIndicator size="large" color={colors.primaryGreen} />
      )}

      {!isLoading && !fetchError && (
        <>
          <OneWeekContent city={city} data={dailyForecast} />
        </>
      )}
    </View>
  );
};

export default OneWeekForecast;
