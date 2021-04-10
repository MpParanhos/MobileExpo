import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function index(){

    const navi = useNavigation();

    function navToPageOne(){
        navi.navigate('ScreenOne');
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress = { navToPageOne }
            >
                <Text>Back to ScreenOne</Text>
            </TouchableOpacity>
        </View>    
    );
}