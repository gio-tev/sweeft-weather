import { View, Text, FlatList, StyleSheet } from 'react-native';

import { colors } from '../../utils/colors';
import DayItem from './day-item/DayItem';
import WeekCards from './week-cards/WeekCards';

const OneWeekContent = ({ city, data }) => {
  const todaysData = data[0];

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{city}</Text>

      <View style={styles.cardContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <DayItem item={item} todaysData={todaysData} />}
          keyExtractor={item => item.dt}
          alwaysBounceVertical={false}
        />
      </View>

      <WeekCards todaysData={todaysData} />
    </View>
  );
};

export default OneWeekContent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  city: {
    fontSize: 30,
    color: colors.primaryCream,
    textAlign: 'center',
  },
  cardContainer: {
    width: '80%',
    marginTop: 20,
    backgroundColor: colors.secondaryBlack,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
