import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../LoginScreen';
import SignupScreen from '../SignupScreen';
const Stack =createStackNavigator();
const LogoutStack = ()=>{
    return(
       
          <Stack.Navigator screenOptions={
              {
                  headerShown:false
              }
          } >
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
            />
           <Stack.Screen
              name="SignupScreen"
              component={SignupScreen}
            />
          </Stack.Navigator>
       
    );
}

export default LogoutStack;