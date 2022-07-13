import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { format } from 'date-fns';

import { colors } from '../../utils/colors';
import DayItem from './DayItem';
import { getDailyVariables } from '../../utils/variables';

const OneWeekContent = ({ city, data }) => {
  const todaysData = data[0];

  const {
    icon,
    description,
    min,
    max,
    morning,
    evening,
    day,
    night,
    sunrise,
    sunset,
    windSpeed,
    humidity,
  } = getDailyVariables(todaysData);

  const iconCelsius = (
    <MaterialCommunityIcons
      name="temperature-celsius"
      size={10}
      color={colors.primaryGreen}
      style={{ marginBottom: 5 }}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{city}</Text>
      {/* <Image style={styles.image} source={{ uri: icon }} />
        <Text style={styles.description}>{description}</Text> */}
      <View style={styles.cardContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <DayItem item={item} todaysData={todaysData} />}
          keyExtractor={item => item.dt}
          alwaysBounceVertical={false}
        />
      </View>

      <View style={styles.sunRiseSetContainer}>
        <View style={styles.celsiuses}>
          <View style={styles.flexRow}>
            <Text style={styles.text}>Day: {day}</Text>
            {iconCelsius}
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.text}>Night: {night}</Text>
            {iconCelsius}
          </View>
        </View>
        <View style={styles.celsiuses}>
          <View style={styles.flexRow}>
            <Text style={styles.text}>Morning: {morning}</Text>
            {iconCelsius}
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.text}>Evening: {evening}</Text>
            {iconCelsius}
          </View>
        </View>
        <View style={styles.celsiuses}>
          <View style={styles.flexRow}>
            <Text style={styles.text}>Max: {max}</Text>
            {iconCelsius}
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.text}>Min: {min}</Text>
            {iconCelsius}
          </View>
        </View>
        <View style={styles.celsiuses}>
          <View style={styles.flexRow}>
            <Text style={styles.text}>Sunsrise: {sunrise}</Text>
            {/* {iconCelsius} */}
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.text}>Sunset: {sunset}</Text>
            {/* {iconCelsius} */}
          </View>
        </View>
        <View style={styles.celsiuses}>
          <View style={styles.flexRow}>
            <Text style={styles.text}>Humidity: {humidity}</Text>
            {/* {iconCelsius} */}
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.text}>Wind speed: {windSpeed}</Text>
            {/* {iconCelsius} */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default OneWeekContent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  titleContainer: {
    // alignItems: 'center',
    // backgroundColor: colors.secondaryBlack,
    // borderRadius: 10,
    // padding: 10,
    // elevation: 3,
    // width: '60%',
  },
  sunRiseSetContainer: {
    // borderColor: 'red',
    // borderWidth: 1,
    padding: 10,
    // width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // alignItems: 'space-between',
    justifyContent: 'center',
  },
  city: {
    fontSize: 30,
    color: colors.primaryCream,
    textAlign: 'center',
  },
  text: {
    // paddingHorizontal: 10,
    color: colors.primaryCream,
  },
  description: {
    color: colors.primaryCream,
    fontSize: 18,
  },
  cardContainer: {
    width: '80%',
    marginTop: 20,
    backgroundColor: colors.secondaryBlack,
    // elevation: 3,
    // borderWidth: 0.5,
    // borderColor: colors.primaryGreen,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  image: {
    width: 35,
    height: 35,
  },
  celsiuses: {
    borderRadius: 10,
    backgroundColor: colors.secondaryBlack,
    justifyContent: 'space-between',
    margin: 5,

    // borderColor: colors.primaryGreen,
    // borderWidth: 0.5,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  flexRow: {
    flexDirection: 'row',
  },
});
