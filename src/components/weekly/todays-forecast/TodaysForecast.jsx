import { View, StyleSheet } from 'react-native';

import { getDailyVariables } from '../../../utils/variables';
import TodaysForecastItem from './TodaysForecastItem';
import { celsiusIcon } from '../../../utils/icons';

const TodaysForecast = ({ todaysData }) => {
  const { min, max, morning, evening, day, night, sunrise, sunset, wind, humidity } =
    getDailyVariables(todaysData);

  return (
    <View style={styles.container}>
      <TodaysForecastItem data={{ max, min }} icon={celsiusIcon()} />
      <TodaysForecastItem data={{ morning, evening }} icon={celsiusIcon()} />
      <TodaysForecastItem data={{ day, night }} icon={celsiusIcon()} />
      <TodaysForecastItem data={{ wind, humidity }} />
      <TodaysForecastItem data={{ sunrise, sunset }} />
    </View>
  );
};

export default TodaysForecast;

const styles = StyleSheet.create({
  container: {
    width: '85%',
  },
});
