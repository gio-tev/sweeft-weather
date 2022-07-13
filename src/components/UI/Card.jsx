import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
import { format } from 'date-fns';

import { colors } from '../../utils/colors';
import Button from './Button';
import { getCurrentVariables } from '../../utils/variables';

const Card = ({ city, data }) => {
  const navigation = useNavigation();

  const { current } = data;

  const { time, weather, feelsLike, temperature, icon } = getCurrentVariables(current);

  const handleWeekPress = () => {
    navigation.navigate('OneWeekForecast', { city });
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.cityTimeContainer}>
          <Text style={styles.city}>{city}</Text>
          <Text style={styles.text}>{time}</Text>
        </View>

        <View>
          <View style={styles.weatherImageContainer}>
            <Text style={styles.text}>{weather}</Text>
            <Image style={styles.image} source={{ uri: icon }} />
          </View>

          <View style={styles.flexDirRow}>
            <Text style={styles.text}>Feels like: {feelsLike}</Text>
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
          onPress={handleWeekPress}
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
  text: {
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
  sunRiseSet: {
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // paddingVertical: 2,
    // borderRadius: 3,
    // backgroundColor: colors.primaryBlack,
    // paddingHorizontal: 0,
    // borderColor: colors.primaryGreen,
    // borderWidth: 0.5,
  },
});
