import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function index(){

    const navi = useNavigation();

    function navToPageTwo(){
        navi.navigate('ScreenTwo');
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress = { navToPageTwo }
            >
                <Text>Go To ScreenTwo</Text>
            </TouchableOpacity>
        </View>    
    );
}