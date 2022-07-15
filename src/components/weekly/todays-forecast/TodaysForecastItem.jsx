import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

const TodaysForecastItem = ({ data, icon }) => {
  const label1 = Object.keys(data)[0][0].toUpperCase(0) + Object.keys(data)[0].slice(1);
  const label2 = Object.keys(data)[1][0].toUpperCase(0) + Object.keys(data)[1].slice(1);

  const value1 = Object.values(data)[0];
  const value2 = Object.values(data)[1];

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>
          {label1}: {label1 === 'Wind' ? `${value1} m/s` : value1}
        </Text>
        {icon && icon}
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>
          {label2}: {label2 === 'Humidity' ? `${value2}%` : value2}
        </Text>
        {icon && icon}
      </View>
    </View>
  );
};

export default TodaysForecastItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.primaryGreen,
    borderBottomWidth: 0.25,
    margin: 5,
    paddingVertical: 5,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  text: {
    color: colors.primaryCream,
    fontSize: 12,
  },
});
