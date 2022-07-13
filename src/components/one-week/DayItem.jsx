import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { format } from 'date-fns';

import { colors } from '../../utils/colors';

const DayItem = ({ item, todaysData }) => {
  const weekDay =
    todaysData.dt === item.dt ? 'Today' : format(new Date(item.dt * 1000), 'EEEE');
  const tempMax = item.temp.max.toFixed();
  const tempMin = item.temp.min.toFixed();
  const weather = item.weather[0].main;
  const icon = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

  //   console.log(todaysData, '././././.');

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
      <View style={[styles.innerContainer, styles.weekDayWidth]}>
        <Text style={styles.text}>{weekDay}</Text>
      </View>

      <View style={styles.innerContainer}>
        <Text style={styles.text}>{tempMax}</Text>
        {iconCelsius}

        <Text style={styles.divider}> / </Text>

        <Text style={styles.text}>{tempMin}</Text>
        {iconCelsius}
      </View>

      <View style={styles.weatherIconContainer}>
        <Image style={styles.image} source={{ uri: icon }} />
        <View style={styles.innerContainer}>
          <Text style={[styles.text, styles.weather]}>{weather}</Text>
        </View>
      </View>
    </View>
  );
};

export default DayItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  weatherIconContainer: {
    flexDirection: 'row',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weekDayWidth: {
    width: 80,
  },
  text: {
    color: colors.primaryCream,
  },
  image: {
    width: 35,
    height: 35,
  },
  divider: {
    color: colors.primaryCream,
  },
  weather: {
    width: 50,
    textAlign: 'right',
  },
});
