import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect } from 'react';

import {
    Text,
    TouchableOpacity,
    StatusBar,
    View,
    Button,
    TextInput,
    Keyboard,
    Alert,
    ImageBackground,
    ScrollView,
    Image,
  } from 'react-native';
  import { LogBox } from 'react-native';
const LoginScreen = ({navigation}) => {
    useEffect(() => {
        LogBox.ignoreLogs(['Setting a timer']);
    },[]);

    return (
        <View style={{backgroundColor:'#cef',height:'100%',}}>
            <Text>LoginScreen-------------</Text>
            <Button title="Logout" />
       
        </View>
    )
};
export default LoginScreen;