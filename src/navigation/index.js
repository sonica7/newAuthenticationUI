import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import AccountValidationScreen from '../screens/AccountValidationScreen';
import StartShoppingScreen from '../screens/StartShoppingScreen';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen
          name="AccountValidation"
          component={AccountValidationScreen}
        />
        <Stack.Screen name="StartShopping" component={StartShoppingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
