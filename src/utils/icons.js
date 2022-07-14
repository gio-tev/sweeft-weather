import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from './colors';

export const celsiusIcon = (size = 10) => (
  <MaterialCommunityIcons
    name="temperature-celsius"
    size={size}
    color={colors.primaryGreen}
  />
);
