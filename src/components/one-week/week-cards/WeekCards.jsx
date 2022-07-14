import { View, StyleSheet } from 'react-native';

import { getDailyVariables } from '../../../utils/variables';
import WeekCard from './WeekCard';
import { celsiusIcon } from '../../../utils/icons';

const WeekCards = ({ todaysData }) => {
  const { min, max, morning, evening, day, night, sunrise, sunset, wind, humidity } =
    getDailyVariables(todaysData);

  return (
    <View style={styles.container}>
      <WeekCard data={{ min, max }} icon={celsiusIcon()} />
      <WeekCard data={{ morning, evening }} icon={celsiusIcon()} />
      <WeekCard data={{ day, night }} icon={celsiusIcon()} />
      <WeekCard data={{ sunrise, sunset }} />
      <WeekCard data={{ wind, humidity }} />
    </View>
  );
};

export default WeekCards;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
});
