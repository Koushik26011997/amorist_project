import { ScrollView, StyleSheet, ImageBackground, View, TouchableOpacity, Image, TextInput, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { Rtext } from '../../components/Rtext'
import { Checkbox } from 'react-native-paper';
import { Rmodal } from '../../components/Rmodal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ainput } from '../../components/Ainput';
import { SCREEN_HEIGHT, showFlashMessage } from '../../utility';

import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { guestUserLogin, guestUserOTP } from '../../store/auth';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = ({ navigation }) => {

    const dispatch = useDispatch();

    const [checked, setChecked] = React.useState(false);

    const [showModal, setShowModal] = React.useState(false);

    const [phoneNumber, setPhoneNumber] = React.useState("");

    const loader = useSelector((state) => state.auth.loading);

    const logicSchema = yup.object().shape({
        email: yup.string().required('Email ID can\'t be left blank').email("Invalid Email ID Given"),
        password: yup
            .string()
            .required('Password can\'t be left blank')
            .min(6, 'Password must contain atleast 6 characters'),
    });

    const { control, handleSubmit, errors, setValue } = useForm({
        resolver: yupResolver(logicSchema),
        defaultValues: { email: '', password: '' },
    });

    const submitLogin = async data => {

        if (checked) {
            await AsyncStorage.setItem('email', data?.email || '');
            await AsyncStorage.setItem('password', data?.password || '');
        } else {
            await AsyncStorage.removeItem('email');
            await AsyncStorage.removeItem('password');
        }

        const device_token = await AsyncStorage.getItem('device_token');
        const app_api_key = await AsyncStorage.getItem('app_api_key');

        try {
            dispatch(guestUserLogin({
                email: data?.email,
                password: data?.password,
                device_token: device_token,
                app_api_key: app_api_key
            })).then((res) => {
                console.log("res", res.payload);
                if (res.payload?.success == true) {
                    showFlashMessage(res.payload?.message, "", "success");
                    setTimeout(() => {
                        navigation.navigate("Language");
                        clearAllFields();
                    }, 2000);
                } else if ((res.payload?.success == false)) {
                    showFlashMessage(res.payload?.message, "", "danger");
                }
                else {
                    showFlashMessage("Something went wrong. Please try again later", "", "danger");
                }
            });
        } catch (error) {
            console.log("error", error.response);
        }
    }

    const clearAllFields = () => {
        setValue("email", "");
        setValue("password", "");
    }

    const sendOTP = async () => {
        const device_token = await AsyncStorage.getItem('device_token');
        const app_api_key = await AsyncStorage.getItem('app_api_key');

        if (phoneNumber.length != 10) {
            showFlashMessage("Invalid phone number given", "", "danger");
            return;
        } else {
            dispatch(guestUserOTP({
                mobile_no: phoneNumber,
                device_token: device_token,
                app_api_key: app_api_key
            })).then((res) => {
                console.log("res.payload", res.payload);
                if (res.payload.success === true) {
                    setShowModal(false);
                    setPhoneNumber("");
                    showFlashMessage("Your OTP is: " + res.payload.data, "", "success");
                    navigation.navigate("OTP");
                } else {
                    showFlashMessage(res.payload?.message, "", "danger");
                }
            });
        }
    }

    useEffect(() => {

        let errorMessage = '';

        for (const [key, value] of Object.entries(errors)) {
            errorMessage += value.message;
            break;
        }

        if (errorMessage != '') showFlashMessage(errorMessage, '', 'danger');

        return function cleanup() {
            errorMessage = '';
        };
    }, [errors]);

    useEffect(() => { getRememberValues() }, []);

    const getRememberValues = async () => {
        const email = await AsyncStorage.getItem('email');
        const password = await AsyncStorage.getItem('password');
        setValue("email", email || '');
        setValue("password", password || '');
        if (email && password) {
            setChecked(true);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Spinner visible={loader} />
            <Image
                style={styles.backgroundImg}
                source={require('../../assets/images/login_back.png')} />
            <ScrollView>

                <TouchableOpacity onPress={() => navigation.goBack()} style={{ margin: 12 }}>
                    <Image source={require("../../assets/icons/back_btn.png")} style={{ width: 64, height: 64, resizeMode: 'cover' }} />
                </TouchableOpacity>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 32 }}>

                    <Rtext fontWeight="bold" color='#fff' fontSize={22}>Welcome Back!</Rtext>

                    <Rtext color='#fff' fontWeight='400' fontSize={12} style={{ margin: 3 }}>LOG IN WITH EMAIL</Rtext>

                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                            <Ainput style={{ backgroundColor: '#fff', padding: 16, borderRadius: 16, width: '100%', fontFamily: 'MontserratRegular', marginTop: 16 }}
                                autoCapitalize="none"
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder='Email address'
                                placeholderTextColor={"#A1A4B2"}
                            />
                        )}
                        name="email"
                    />

                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                            <Ainput style={{ backgroundColor: '#fff', padding: 16, borderRadius: 16, width: '100%', fontFamily: 'MontserratRegular', marginTop: 16 }}
                                autoCapitalize="none"
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder='Password'
                                placeholderTextColor={"#A1A4B2"}
                                view={true}
                            />
                        )}
                        name="password"
                    />

                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 16 }}>
                        <Rtext color='#fff' fontSize={13} fontWeight='400'>Remember me</Rtext>
                        <Checkbox
                            color='#fff'
                            uncheckedColor='#fff'
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => setChecked(!checked)}
                        />
                    </View>

                    <Rtext color='#fff' fontWeight='400' fontSize={12}>OR LOG IN WITH</Rtext>

                    <View style={{ flexDirection: 'row', margin: 16 }}>
                        <TouchableOpacity style={{ backgroundColor: '#fff', width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require("../../assets/icons/google.png")} style={{ width: 18, height: 18, resizeMode: 'contain' }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ backgroundColor: '#fff', width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center', marginHorizontal: 8 }}>
                            <Image source={require("../../assets/icons/facebook.png")} style={{ width: 18, height: 18, resizeMode: 'contain' }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ backgroundColor: '#fff', width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => setShowModal(true)}>
                            <Image source={require("../../assets/icons/cell.png")} style={{ width: 18, height: 18, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View>

                    <Rtext color='#fff' style={{ margin: 16 }} fontWeight='bold' fontSize={12} onPress={() => navigation.navigate("OTP")}>Forgot Password?</Rtext>

                    <TouchableOpacity style={{ backgroundColor: '#296EFF', padding: 20, borderRadius: 32, width: '100%', alignItems: 'center', justifyContent: 'center' }} onPress={handleSubmit(submitLogin)}>
                        <Rtext color='#fff'>LOG IN</Rtext>
                    </TouchableOpacity>


                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 16 }}>
                        <Rtext color='#fff' fontWeight='bold' fontSize={12}>New here? Click here to </Rtext>
                        <Rtext color='#fff' fontWeight='bold' fontSize={12} onPress={() => navigation.navigate("SignUp")}>SIGN UP</Rtext>
                    </View>
                </View>

            </ScrollView>

            <Rmodal visible={showModal} onCancel={() => setShowModal(false)} background='#296EFF'>

                <Rtext
                    color='#fff'
                    fontWeight='bold'
                    fontSize={13}
                    style={{ textAlign: 'center' }}>
                    Enter Phone number
                </Rtext>

                <TouchableOpacity
                    style={{ position: 'absolute', right: 12, top: 16 }}
                    onPress={() => setShowModal(false)}>

                    <MaterialCommunityIcons name={'close-circle'} size={24} color={"#fff"} />

                </TouchableOpacity>

                <Rtext
                    fontSize={12}
                    style={{ textAlign: 'center', marginTop: 8, marginStart: 16 }}
                    color={"#fff"}>
                    An OTP will be sent to your Phone
                </Rtext>

                <Ainput
                    maxLength={10}
                    style={{ backgroundColor: '#fff', borderRadius: 8, width: '100%', fontFamily: 'MontserratRegular', marginVertical: 32, padding: 12 }}
                    placeholder="Phone number"
                    value={phoneNumber}
                    type="number-pad"
                    border={"#fff"}
                    onChangeText={text => setPhoneNumber(text)}
                />

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: '#fff', padding: 16, borderRadius: 32, width: '90%', alignItems: 'center', justifyContent: 'center', marginVertical: 16 }} onPress={() => sendOTP()}>
                        <Rtext color='#296EFF' fontSize={13}>CONTINUE</Rtext>
                    </TouchableOpacity>
                </View>
            </Rmodal>

        </SafeAreaView>
    )
}

export default SignIn

const styles = StyleSheet.create({
    backgroundImg: {
        width: '100%',
        height: SCREEN_HEIGHT,
        resizeMode: 'cover',
        position: 'absolute',
    },
});