import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../../utils/colors';
import Button from './Button';

const Card = ({ city, data }) => {
  console.log(data, './.ttt');
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.cityCelsiusContainer}>
          <Text style={styles.cityClesius}>{city}</Text>
          <Text style={styles.currentFeels}>current time</Text>
        </View>
        <View style={styles.windHumidityContainer}>
          <Text style={styles.windHumidity}>Wind speed</Text>
          <Text style={styles.windHumidity}>Humidity</Text>
          <Text style={styles.windHumidity}>weather</Text>
        </View>
      </View>

      <View style={styles.innerContainer}>
        <Button
          pressable={({ pressed }) => [styles.btn, pressed && styles.pressed]}
          text={styles.btnTxt}
        >
          See 7 Day Forecast
        </Button>
        <View style={styles.cityCelsiusContainer}>
          <Text style={styles.currentFeels}>Feels like:</Text>

          <View style={styles.tempContainer}>
            <Text style={styles.cityClesius}>temp</Text>
            <MaterialCommunityIcons
              name="temperature-celsius"
              size={18}
              color={colors.primaryGreen}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    // alignItems: 'center',
    height: '30%',
    width: '90%',
    backgroundColor: colors.secondaryBlack,
    marginBottom: '3%',
    borderRadius: 20,
    elevation: 3,
    paddingTop: 5,
    paddingBottom: 7,
    paddingHorizontal: 20,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cityCelsiusContainer: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
  },
  windHumidityContainer: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tempContainer: {
    flexDirection: 'row',
  },
  cityClesius: {
    color: colors.primaryCream,
    fontSize: 25,
  },
  currentFeels: {
    color: colors.primaryCream,
    //   fontSize: 25,
    fontWeight: '300',
    fontSize: 12,
  },
  windHumidity: {
    color: colors.primaryCream,
    //   fontSize: 25,
    fontWeight: '300',
    fontSize: 12,
  },
  btn: {
    width: '60%',
    padding: 8,
    // backgroundColor: colors.primaryGreen,
    borderColor: colors.primaryGreen,
    borderWidth: 0.5,
    borderRadius: 10,
    // alignSelf: 'center',
  },
  btnTxt: {
    color: colors.primaryGreen,
    fontSize: 16,
    textAlign: 'center',
  },
  pressed: {
    backgroundColor: colors.primaryBlack,
  },
});
