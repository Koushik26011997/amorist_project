import { ScrollView, StyleSheet, ImageBackground, View, TouchableOpacity, Image, TextInput, Text, KeyboardAvoidingView, Linking } from 'react-native'
import React, { useEffect } from 'react'
import { Rtext } from '../../components/Rtext'
import { Checkbox } from 'react-native-paper'
import { Rmodal } from '../../components/Rmodal'
import { Ainput } from '../../components/Ainput'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SCREEN_HEIGHT, showFlashMessage } from '../../utility';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { guestUserOTP, guestUserRegister } from '../../store/auth'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignUp = ({ navigation }) => {
    const dispatch = useDispatch();
    const [checked, setChecked] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [phoneNumber, setPhoneNumber] = React.useState("");

    const loader = useSelector((state) => state.auth.loading);

    const logicSchema = yup.object().shape({
        name: yup.string().required('Name can\'t be left blank').max(250),
        phone: yup.string().required('Phone number can\'t be left blank').min(10, 'Invalid Phone number given').max(10, 'Invalid Phone number given'),
        email: yup.string().required('Email ID can\'t be left blank').email("Please enter a valid email"),
        password: yup
            .string()
            .required('Password can\'t be left blank')
            .min(6, 'Password must contain atleast 6 characters'),
        confirm_password: yup
            .string()
            .required('Confirm Password can\'t be left blank')
            .oneOf(
                [yup.ref('password'), null],
                'Both passwords does not matched',
            ),
    });

    const { control, handleSubmit, errors, setValue } = useForm({
        resolver: yupResolver(logicSchema),
        defaultValues: { email: '', password: '', name: '', phone: '', confirm_password: '' },
    });

    const clearAllFields = () => {
        setValue("name", "");
        setValue("phone", "");
        setValue("email", "");
        setValue("password", "");
        setValue("confirm_password", "");
    }

    const submitSignin = async data => {
        if (checked) {
            dispatch(guestUserRegister({
                name: data?.name,
                email: data?.email,
                password: data?.password,
                confirm_password: data?.confirm_password,
                phone: data?.phone
            })).then((res) => {
                if (res.payload) {
                    showFlashMessage(res.payload?.message, "", "success");
                    setTimeout(() => {
                        // navigation.navigate("Language");
                        navigation.navigate("SignIn");
                        clearAllFields();
                    }, 2000);
                } else {
                    console.log("res.data", res.error?.message);
                    showFlashMessage(res.error?.message, "", "danger");
                }
            });
        } else {
            showFlashMessage("Please accept the privacy policy before signup", "", "danger");
        }
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
        // console.log(errors);
        if (errorMessage != '') showFlashMessage(errorMessage, '', 'danger');

        return function cleanup() {
            errorMessage = '';
        };
    }, [errors]);

    return (

        <KeyboardAvoidingView>
            <Spinner visible={loader} />
            <ScrollView style={{ width: '100%', height: "100%" }}>
                <ImageBackground
                    imageStyle={{ width: '100%', height: "100%" }}
                    source={require('../../assets/images/login_back.png')}>

                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ margin: 12 }}>
                        <Image source={require("../../assets/icons/back_btn.png")} style={{ width: 64, height: 64, resizeMode: 'cover' }} />
                    </TouchableOpacity>

                    <View style={{ alignItems: 'center', justifyContent: 'center', margin: 32 }}>

                        <Rtext fontWeight="bold" color='#fff' fontSize={22}>Glad to see you!</Rtext>

                        <Rtext color='#fff' fontWeight='400' fontSize={12} style={{ margin: 3 }}>SIGN UP WITH EMAIL</Rtext>

                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <TextInput style={{ backgroundColor: '#fff', padding: 16, borderRadius: 16, width: '100%', fontFamily: 'MontserratRegular', marginTop: 32 }}
                                    autoCapitalize="none"
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    placeholder='Name'
                                    keyboardType='email-address'
                                    placeholderTextColor={"#A1A4B2"} />
                            )}
                            name="name"
                        />

                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <TextInput style={{ backgroundColor: '#fff', padding: 16, borderRadius: 16, width: '100%', fontFamily: 'MontserratRegular', marginTop: 16 }}
                                    autoCapitalize="none"
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    maxLength={10}
                                    placeholder='Phone'
                                    keyboardType='number-pad'
                                    placeholderTextColor={"#A1A4B2"} />

                            )}
                            name="phone"
                        />

                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <TextInput style={{ backgroundColor: '#fff', padding: 16, borderRadius: 16, width: '100%', fontFamily: 'MontserratRegular', marginTop: 16 }}
                                    autoCapitalize="none"
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    keyboardType='email-address'
                                    placeholder='Email address'
                                    placeholderTextColor={"#A1A4B2"} />
                            )}
                            name="email"
                        />

                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <Ainput style={{ backgroundColor: '#fff', padding: 16, borderRadius: 16, width: '100%', fontFamily: 'MontserratRegular', marginTop: 16 }}
                                    // autoCapitalize="none"
                                    // onBlur={onBlur}
                                    // onChangeText={value => onChange(value)}
                                    // value={value}
                                    // keyboardType='email-address'
                                    // placeholder='Password'
                                    // placeholderTextColor={"#A1A4B2"}
                                    // secureTextEntry={true}

                                    onBlur={onBlur}
                                    autoCapitalize="none"
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    placeholder='Password'
                                    view={true}
                                />
                            )}
                            name="password"
                        />

                        <Controller
                            control={control}
                            render={({ onChange, onBlur, value }) => (
                                <Ainput style={{ backgroundColor: '#fff', padding: 16, borderRadius: 16, width: '100%', fontFamily: 'MontserratRegular', marginTop: 16 }}
                                    // autoCapitalize="none"
                                    // onBlur={onBlur}
                                    // onChangeText={value => onChange(value)}
                                    // value={value}
                                    // keyboardType={"numeric"}
                                    // secureTextEntry={true}
                                    // placeholder='Confirm Password'
                                    // placeholderTextColor={"#A1A4B2"}

                                    onBlur={onBlur}
                                    autoCapitalize="none"
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    placeholder='Confirm Password'
                                    placeholderTextColor={"#A1A4B2"}
                                    view={true}
                                />
                            )}
                            name="confirm_password"
                        />

                        {/* <TextInput style={{ backgroundColor: '#fff', padding: 16, borderRadius: 16, width: '100%', fontFamily: 'MontserratRegular', marginTop: 32 }}
                            placeholder='Name'
                            keyboardType='email-address'
                            placeholderTextColor={"#A1A4B2"} />

                        <TextInput style={{ backgroundColor: '#fff', padding: 16, borderRadius: 16, width: '100%', fontFamily: 'MontserratRegular', marginTop: 16 }}
                            placeholder='Phone'
                            keyboardType='number-pad'
                            placeholderTextColor={"#A1A4B2"} />

                        <TextInput style={{ backgroundColor: '#fff', padding: 16, borderRadius: 16, width: '100%', fontFamily: 'MontserratRegular', marginTop: 16 }}
                            placeholder='Email address'
                            keyboardType='email-address'
                            placeholderTextColor={"#A1A4B2"} />

                        <TextInput style={{ backgroundColor: '#fff', padding: 16, borderRadius: 16, width: '100%', fontFamily: 'MontserratRegular', marginTop: 16 }}
                            placeholder='Password'
                            placeholderTextColor={"#A1A4B2"} /> */}


                        <Rtext color='#fff' fontWeight='400' fontSize={12} style={{ marginTop: 32 }}>OR SIGN UP WITH</Rtext>

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

                        <View style={{ flexDirection: 'row', margin: 16, alignItems: 'center' }}>
                            <Rtext color='#fff' fontWeight='bold' fontSize={12}>I have read the</Rtext>
                            <Rtext color='#fff' fontWeight='bold' fontSize={14} style={{ marginHorizontal: 8 }}>Privacy Policy</Rtext>
                            <Checkbox
                                color='#fff'
                                uncheckedColor='#fff'
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => setChecked(!checked)}
                            />
                        </View>


                        <TouchableOpacity style={{ backgroundColor: '#296EFF', padding: 20, borderRadius: 32, width: '100%', alignItems: 'center', justifyContent: 'center' }} onPress={handleSubmit(submitSignin)}>
                            <Rtext color='#fff'>SIGN UP</Rtext>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 16 }}>
                            <Rtext color='#fff' fontWeight='bold' fontSize={12} style={{ letterSpacing: 0.05 }}>New here? Click here to </Rtext>
                            <Rtext color='#fff' fontWeight='bold' fontSize={12} onPress={() => navigation.navigate("SignIn")}>SIGN IN</Rtext>
                        </View>
                    </View>

                </ImageBackground>
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
        </KeyboardAvoidingView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    backgroundImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
})