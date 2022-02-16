import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding_1 from '../screens/authScreens/OnBoarding_1';
import OnBoarding_2 from '../screens/authScreens/OnBoarding_2';
import OnBoarding_3 from '../screens/authScreens/OnBoarding_3';
import SignIn from '../screens/authScreens/SignIn';
import SignUp from '../screens/authScreens/SignUp';
import Language from '../screens/authScreens/Language';
import OTP from '../screens/authScreens/OTP';
import Topics from '../screens/authScreens/Topics';
import Influencers from '../screens/authScreens/Influencers';

const AuthStack = createNativeStackNavigator();

const AuthStackNav = ({ navigation }) => {
    const options = {
        headerShown: false,
        stackAnimation: 'fade',
    };

    return (
        <AuthStack.Navigator screenOptions={options} initialRouteName='OnBoarding_1'>
            <AuthStack.Screen
                name="OnBoarding_1"
                component={OnBoarding_1}
            // options={({ route }) => ({
            //   stackAnimation: 'slide_from_bottom',
            //   headerShown: false,
            // })}
            />
            <AuthStack.Screen
                name="OnBoarding_2"
                component={OnBoarding_2}
            />
            <AuthStack.Screen
                name="OnBoarding_3"
                component={OnBoarding_3}
            />
            <AuthStack.Screen
                name="SignIn"
                component={SignIn}
            />
            <AuthStack.Screen
                name="SignUp"
                component={SignUp}
            />
            <AuthStack.Screen
                name="OTP"
                component={OTP}
            />
            <AuthStack.Screen
                name="Language"
                component={Language}
            />
            <AuthStack.Screen
                name="Topics"
                component={Topics}
            />
            <AuthStack.Screen
                name="Influencers"
                component={Influencers}
            />
        </AuthStack.Navigator>
    );
};

export { AuthStackNav };
