import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
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
    borderRadius: 5,
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
    justifyContent: 'space-between',
  },
  image: {
    width: 35,
    height: 35,
  },
});
