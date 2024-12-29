import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Users from '../screens/Users';
import AddUser from '../screens/AddUser';
import UpdateUser from '../screens/UpdateUser';


const Stack= createStackNavigator();
const AppNavigator=()=> {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Users" component={Users}/>
        <Stack.Screen name='AddUser' component={AddUser} options={{
            presentation:"modal",
            title:"Add User"
        }}/>
        <Stack.Screen name='UpdateUser' component={UpdateUser} options={{
            presentation:"modal",
            title:"Update User"
        }} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
export default AppNavigator;