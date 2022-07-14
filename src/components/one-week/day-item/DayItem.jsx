import { View, Text, Image } from 'react-native';
import { format } from 'date-fns';

import { getDailyVariables } from '../../../utils/variables';
import { styles } from './dayItemStyles';
import { celsiusIcon } from '../../../utils/icons';

const DayItem = ({ item, todaysData }) => {
  const { max, min, weather, icon } = getDailyVariables(item);

  const weekDay =
    todaysData.dt === item.dt ? 'Today' : format(new Date(item.dt * 1000), 'EEEE');

  return (
    <View style={styles.container}>
      <View style={[styles.innerContainer, styles.weekDayWidth]}>
        <Text style={styles.text}>{weekDay}</Text>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.celsius}>
          <Text style={styles.text}>{max}</Text>
          {celsiusIcon()}

          <Text style={styles.divider}>/ </Text>

          <Text style={styles.text}>{min}</Text>
          {celsiusIcon()}
        </View>
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
