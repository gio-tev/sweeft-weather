import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { colors } from './src/utils/colors';
import Home from './src/screens/Home';
import OneWeekForecast from './src/screens/OneWeekForecast';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          title: 'Sweeft Weather',
          headerStyle: {
            height: 120,
            backgroundColor: colors.primaryBlack,
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
          },
          headerBackTitleVisible: false,
          headerTintColor: colors.primaryGreen,
          headerShadowVisible: false,
          cardStyle: {
            backgroundColor: colors.primaryBlack,
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="OneWeekForecast" component={OneWeekForecast} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
