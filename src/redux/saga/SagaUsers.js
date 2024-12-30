import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Button, Card } from 'react-native-paper';
import { removeUser } from '../redux/slice/UserSlice';
import { fetchUsers } from './UserSliceSaga';



export default function SagaUsers() {
    const dispatch=useDispatch();
    const sagaUsers = useSelector((state) => state.sagaUsers.sagaUser);
    // const navigation=useNavigation();
    console.log("saga users:", sagaUsers);

    useEffect(()=>{
        dispatch(fetchUsers()) // call fetch user saga slice for fetching the user data
    }, [])
    const renderItem =useCallback(({item})=> <UserItem item={item}/>, [])

    const UserItem=React.memo(({item})=>{
        console.log("Rendering user item:", item);
        return (
            <View style={styles.cardContainer}>
               <Card style={styles.card}>
                <Card.Content>
                    <Text style={styles.txt}>Name: {item.name}</Text>
                    <Text style={styles.txt}>Email: {item.email}</Text>
                    <Text style={styles.txt}>Mobile no: {item.phone}</Text>
                </Card.Content>
               </Card>
            </View>
        )
    })

    return (
        <View style={styles.container}>
            {sagaUsers.length > 0 ?
                <FlatList
                    data={sagaUsers}
                    renderItem={renderItem}
                /> : 
                <Text >No data found</Text>
            }
            <Text >No data found</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red',

    },
    cardContainer:{
        width:'100%',
    },
    addButtonContainer:{
        position:'absolute',
        bottom:30,
        right:20,
        // width:55,
        backgroundColor:'#1E90FF',
        padding:20,
        borderRadius:25
    },
    addButtonContainerText:{
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    },
    card:{
        margin:10,
        // width:
    },
    avatar:{
        marginHorizontal:10
    },
    txt:{
        marginVertical:4
    }
})