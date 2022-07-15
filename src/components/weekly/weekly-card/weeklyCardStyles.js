import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
  },
  weatherIconContainer: {
    flexDirection: 'row',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  celsius: {
    flexDirection: 'row',
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
