import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Button, Card } from 'react-native-paper';
import { removeUser } from '../redux/slice/UserSlice';

export default function Users() {
    const users = useSelector((state) => state.users);
    const navigation=useNavigation();
    const dispatch=useDispatch();
    console.log("users:", users);

    const renderItem =useCallback(({item})=> <UserItem item={item} onUpdateUser={onUpdateUser } onDeleteUser={onDeleteUser}/>, [])

    const UserItem=React.memo(({item, onUpdateUser, onDeleteUser})=>{
        console.log("Rendering user item:", item);
        return (
            <View style={styles.cardContainer}>
               <Card style={styles.card}>
                <Card.Title title="Details" right={()=> <Avatar.Image style={styles.avatar} size={30} source={require('../assets/images/profile.png')} />}/>
                <Card.Content>
                    <Text style={styles.txt}>Name: {item.name}</Text>
                    <Text style={styles.txt}>Email: {item.email}</Text>
                    <Text style={styles.txt}>Mobile no: {item.mobile}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button onPress={()=>onUpdateUser(item)}>Update</Button>
                    <Button onPress={()=>onDeleteUser(item.id)}>Delete</Button>
                </Card.Actions>
               </Card>
            </View>
        )
    })

    const onUpdateUser=(item)=>{
        console.log("Calling update user: ", item);
        navigation.navigate("UpdateUser", {item})
    }
    
    const onDeleteUser=(id)=>{
        console.log("Calling delete user:", id);
        dispatch(removeUser(id));
    }
    const addUserHandler=()=>{
        console.log("Calling add user handler:");
        navigation.navigate("AddUser")
    }
    return (
        <View style={styles.container}>
            {users.user.length > 0 ?
                <FlatList
                    data={users.user}
                    renderItem={renderItem}
                /> : 
                <Text >No data found</Text>
            }
            <TouchableOpacity style={styles.addButtonContainer} onPress={addUserHandler}>
                <Text style={styles.addButtonContainerText}>Add</Text>
            </TouchableOpacity>
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