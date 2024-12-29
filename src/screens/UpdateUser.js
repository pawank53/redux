import { Alert, StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../redux/slice/UserSlice';
import { useNavigation } from '@react-navigation/native';

export default function UpdateUser({route}) {
    const user=route.params.item;
    const id=user?.id;
    const [name, setName]=useState(user?.name);
    const [email, setEmail]=useState(user?.email);   
    const [mobile, setMobile]=useState(user?.mobile);
    const dispatch=useDispatch();
    const navigation=useNavigation();
    console.log("propss:", user);

    const onSubmit=()=>{
        if(name && email && mobile){
            console.log("Calling submit button for update user");
            dispatch(updateUser({id,name, email, mobile}))
            setName('');
            setEmail('');
            setMobile('');
            navigation.goBack();
        }else{
            Alert.alert("Please fill all the fields")
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputText} value={name} onChangeText={text=>setName(text)} placeholder='Enter Name' label={'Name'} mode='outlined'/>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputText} value={email} onChangeText={text=>setEmail(text)} placeholder='Enter Email' label={'Email'} mode='outlined'/>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputText} value={mobile} onChangeText={text=>setMobile(text)} placeholder='Enter Mobile Number' label={'Mobile Number'} mode='outlined'/>
            </View>
            <Button mode='contained' onPress={onSubmit}>Submit</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer:{
        width:'80%',
        margin:10,
        backgroundColor:'white',
        // borderRadius:5,
        // borderWidth:1
    },
    inputText:{
        color:'black',
        // borderRadius:5,
    }
})