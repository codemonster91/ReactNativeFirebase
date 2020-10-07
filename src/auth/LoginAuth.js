import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../DashboardScreen';
const Stack =createStackNavigator();
const LoginAuth = ()=>{
    return(
       
          <Stack.Navigator screenOptions={
              {
                  headerShown:true
              }
          } >
            <Stack.Screen
              name="DashboardScreen"
              component={DashboardScreen}
            />
          </Stack.Navigator>
       
    );
}

export default LoginAuth;