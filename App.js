import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CoffeeDetailScreen from './src/screens/CoffeeDetailScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Details"
          options={{
            headerShown: false,
          }}
          component={CoffeeDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
