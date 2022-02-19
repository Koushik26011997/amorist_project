import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding_3 from '../screens/authScreens/OnBoarding_3';
import { StyleSheet } from 'react-native';
import SignUp from '../screens/authScreens/SignUp';
import BottomTab from './BottomTab';

const MainStack = createNativeStackNavigator();

const MainStackNav = ({ navigation }) => {
    const options = {
        headerShown: false,
        stackAnimation: 'fade',
    };

    return (
        <MainStack.Navigator screenOptions={options} initialRouteName='BottomTab'>
            <MainStack.Screen
                name="BottomTab"
                component={BottomTab}
            />
        </MainStack.Navigator>
    )
}

export default MainStackNav

const styles = StyleSheet.create({})