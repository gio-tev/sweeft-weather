import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../Button';
import { getCurrentVariables } from '../../../utils/variables';
import { styles } from './cardStyles';
import { celsiusIcon } from '../../../utils/icons';

const Card = ({ city, data, networkAvailable }) => {
  const navigation = useNavigation();

  const { current } = data;
  const { time, weather, feelsLike, temperature, icon } = getCurrentVariables(current);

  const handleWeekPress = () =>
    navigation.navigate('OneWeekForecast', { city, networkAvailable });

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
            {celsiusIcon(10)}
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
          {celsiusIcon(18)}
        </View>
      </View>
    </View>
  );
};

export default Card;
