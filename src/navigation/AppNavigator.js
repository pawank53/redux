import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Users from '../screens/Users';
import AddUser from '../screens/AddUser';
import UpdateUser from '../screens/UpdateUser';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OnlineUsers from '../screens/OnlineUsers';



const Stack= createStackNavigator();
const Tab=createBottomTabNavigator();


const Tabs=()=>{
    return (
        <Tab.Navigator>
            <Tab.Screen name="Users" component={Users} options={{
                tabBarIcon:()=> <Image source={require('../assets/images/profile.png')} style={styles.profile}/>
            }}/>
            <Tab.Screen name='DynamicUser' component={OnlineUsers} options={{
                title:"Online Users",
                tabBarIcon:()=> <Image source={require('../assets/images/profile.png')} style={styles.profile}/>
            }}/>
        </Tab.Navigator>
    )
}
const AppNavigator=()=> {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Tabs' component={Tabs} options={{headerShown:false}}/>
        {/* <Stack.Screen name="Users" component={Users}/> */}
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

const styles = StyleSheet.create({
    profile:{
        width:30,
        height:30
    }
})
export default AppNavigator;