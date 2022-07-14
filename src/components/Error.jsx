import { Text, StyleSheet } from 'react-native';

import { colors } from '../utils/colors';
import Button from './UI/Button';

const Error = ({ onRefresh }) => {
  const handleRefresh = () => onRefresh();

  return (
    <>
      <Text style={styles.error}>Something went wrong, try again later!</Text>
      <Button
        pressable={({ pressed }) => [styles.btn, pressed && styles.pressed]}
        text={styles.btnTxt}
        onPress={handleRefresh}
      >
        <Text>Refresh</Text>
      </Button>
    </>
  );
};

export default Error;

const styles = StyleSheet.create({
  error: {
    color: colors.error,
    fontSize: 16,
    marginTop: 80,
  },
  btn: {
    marginTop: 40,
    backgroundColor: colors.secondaryBlack,
    paddingVertical: 10,
    paddingHorizontal: 45,
    borderRadius: 5,
    borderColor: colors.primaryGreen,
    borderWidth: 0.5,
  },
  btnTxt: {
    color: colors.primaryGreen,
    fontSize: 16,
  },
  pressed: {
    opacity: 0.5,
  },
});
