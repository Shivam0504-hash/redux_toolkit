import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import MyProducts from '../screens/myproduct';
import { StyleSheet } from 'react-native';
import MyCart from '../screens/mycart';
const Stack=createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name='MyProducts'
            component={MyProducts}
            options={{headerShown:false}}
            
            />
            <Stack.Screen
            name='MyCart'
            component={MyCart}
            options={{headerShown:false}}
            
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})    