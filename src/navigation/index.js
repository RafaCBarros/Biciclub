import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScrene from '../screens/WelcomeScreen/WelcomeScreen.js';
import SingInScrene from '../screens/SingInScreen/SingInScreen.js';
import SingUpScrene from '../screens/SingUpScreen/SingUpScreen.js';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen.js';
import HomeScreen from '../screens/HomeScreen/HomeScreen.js';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: 'Biciclub',
          headerStyle: {height: 40},
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScrene} />
        <Stack.Screen name="SingIn" component={SingInScrene} />
        <Stack.Screen name="SingUp" component={SingUpScrene} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerBackTitleVisible: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
