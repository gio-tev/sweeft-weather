import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../../utils/colors';
import Button from './Button';

const Card = ({ city, data }) => {
  const { current } = data;

  const time = new Date(current.dt * 1000).toLocaleString();
  const weather =
    current.weather[0].main.charAt(0).toUpperCase() + current.weather[0].main.slice(1);
  const icon = `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;
  const feelsLike = current.feels_like.toFixed();
  const temperature = current.temp.toFixed();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.cityTimeContainer}>
          <Text style={styles.city}>{city}</Text>
          <Text style={styles.timeWeatherFeels}>{time}</Text>
        </View>

        <View>
          <View style={styles.weatherImageContainer}>
            <Text style={styles.timeWeatherFeels}>{weather}</Text>
            <Image style={styles.image} source={{ uri: icon }} />
          </View>

          <View style={styles.flexDirRow}>
            <Text style={styles.timeWeatherFeels}>Feels like: {feelsLike}</Text>
            <MaterialCommunityIcons
              name="temperature-celsius"
              size={10}
              color={colors.primaryGreen}
            />
          </View>
        </View>
      </View>

      <View style={styles.innerContainer}>
        <Button
          pressable={({ pressed }) => [styles.btn, pressed && styles.pressed]}
          text={styles.btnTxt}
        >
          See 7 Day Forecast
        </Button>

        <View style={styles.flexDirRow}>
          <Text style={styles.celsius}>{temperature}</Text>
          <MaterialCommunityIcons
            name="temperature-celsius"
            size={18}
            color={colors.primaryGreen}
          />
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '30%',
    width: '90%',
    backgroundColor: colors.secondaryBlack,
    marginBottom: '3%',
    borderRadius: 20,
    elevation: 3,
    paddingTop: 5,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cityTimeContainer: {
    alignSelf: 'flex-end',
  },
  flexDirRow: {
    flexDirection: 'row',
  },
  city: {
    color: colors.primaryCream,
    fontSize: 22,
  },
  celsius: {
    color: colors.primaryCream,
    fontSize: 40,
  },
  timeWeatherFeels: {
    color: colors.primaryCream,
    fontWeight: '300',
    fontSize: 12,
  },

  btn: {
    width: '60%',
    padding: 8,
    backgroundColor: colors.primaryBlack,
    borderColor: colors.primaryGreen,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: 'center',
  },
  btnTxt: {
    color: colors.primaryGreen,
    fontSize: 16,
    textAlign: 'center',
  },
  pressed: {
    backgroundColor: colors.secondaryBlack,
  },
  weatherImageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  image: {
    width: 35,
    height: 35,
  },
});
