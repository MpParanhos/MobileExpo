import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const appStack = createStackNavigator();

import screenOne from './screens/tela1/index';
import screenTwo from './screens/tela2/index';

export default function Routes(){
    return(
        <NavigationContainer>
            <appStack.Navigator>
                <appStack.Screen name='ScreenOne' component={ screenOne }/>
                <appStack.Screen name='ScreenTwo' component={ screenTwo }/>
            </appStack.Navigator>
        </NavigationContainer>
    );
}