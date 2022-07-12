import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { colors } from './src/utils/colors';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Weather App',
            headerStyle: { backgroundColor: colors.primaryBlack },
            headerTitleAlign: 'center',
            headerTintColor: colors.primaryGreen,
            cardStyle: {
              backgroundColor: colors.primaryBlack,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
