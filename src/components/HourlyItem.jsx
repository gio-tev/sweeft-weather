import { View, Text, Image, StyleSheet } from 'react-native';

import { colors } from '../utils/colors';
import { getHourlyVariables } from '../utils/variables';
import { celsiusIcon } from '../utils/icons';

const HourlyItem = ({ item }) => {
  const { icon, time, temperature } = getHourlyVariables(item);

  return (
    <View style={styles.container}>
      <Text style={styles.hour}>{time}</Text>

      <Image style={styles.image} source={{ uri: icon }} />

      <View style={styles.tempIconContainer}>
        <Text style={styles.temperature}>{temperature}</Text>
        {celsiusIcon()}
      </View>
    </View>
  );
};

export default HourlyItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primaryBlack,
    marginRight: 6,
    padding: 7.2,
    borderRadius: 5,
  },
  hour: {
    color: colors.primaryCream,
    fontSize: 10,
  },
  tempIconContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 25,
    height: 25,
  },
  temperature: {
    color: colors.primaryCream,
    fontSize: 10,
  },
});
