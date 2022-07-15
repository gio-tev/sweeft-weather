import { View, Text, FlatList, StyleSheet } from 'react-native';

import { colors } from '../../utils/colors';
import WeeklyCard from './weekly-card/WeeklyCard';
import TodaysForecast from './todays-forecast/TodaysForecast';

const WeeklyContent = ({ city, data }) => {
  const todaysData = data[0];

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{city}</Text>

      <View style={styles.cardContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <WeeklyCard item={item} todaysData={todaysData} />}
          keyExtractor={item => item.dt}
          alwaysBounceVertical={false}
        />
      </View>

      <TodaysForecast todaysData={todaysData} />
    </View>
  );
};

export default WeeklyContent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    height: '100%',
    alignItems: 'center',
  },
  city: {
    fontSize: 25,
    color: colors.primaryCream,
    textAlign: 'center',
  },
  cardContainer: {
    width: '80%',
    backgroundColor: colors.secondaryBlack,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
