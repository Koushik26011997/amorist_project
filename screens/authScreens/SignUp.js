import { ScrollView, StyleSheet, ImageBackground, View, TouchableOpacity, Image, TextInput, Text } from 'react-native'
import React from 'react'
import { Rtext } from '../../components/Rtext'
import { Checkbox } from 'react-native-paper'

const SignUp = ({ navigation }) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <View>
            <ScrollView style={{ width: '100%', height: "100%" }}>
                <ImageBackground
                    imageStyle={{ width: '100%', height: "100%" }}
                    source={require('../../assets/images/login_back.png')}>

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require("../../assets/icons/back_btn.png")} style={{ width: 80, height: 80, resizeMode: 'contain' }} />
                    </TouchableOpacity>

                    <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 32 }}>

                        <Rtext fontWeight="bold" color='#fff' fontSize={22}>Glad to see you!</Rtext>

                        <Rtext color='#fff' fontWeight='400' fontSize={12} style={{ margin: 3 }}>SIGN UP WITH EMAIL</Rtext>

                        <TextInput style={{ backgroundColor: '#fff', padding: 16, borderRadius: 16, width: '100%', fontFamily: 'MontserratRegular', marginTop: 32 }}
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
                            placeholderTextColor={"#A1A4B2"} />



                        <Rtext color='#fff' fontWeight='400' fontSize={12} style={{ marginTop: 32 }}>OR SIGN UP WITH</Rtext>

                        <View style={{ flexDirection: 'row', margin: 16 }}>
                            <TouchableOpacity style={{ backgroundColor: '#fff', width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require("../../assets/icons/google.png")} style={{ width: 18, height: 18, resizeMode: 'contain' }} />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ backgroundColor: '#fff', width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center', marginHorizontal: 8 }}>
                                <Image source={require("../../assets/icons/facebook.png")} style={{ width: 18, height: 18, resizeMode: 'contain' }} />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ backgroundColor: '#fff', width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' }}>
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


                        <TouchableOpacity style={{ backgroundColor: '#296EFF', padding: 20, borderRadius: 32, width: '100%', alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate("OTP")}>
                            <Rtext color='#fff'>SIGN UP</Rtext>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 16 }}>
                            <Rtext color='#fff' fontWeight='bold' fontSize={12} style={{ letterSpacing: 0.05 }}>New here? Click here to </Rtext>
                            <Rtext color='#fff' fontWeight='bold' fontSize={12} onPress={() => navigation.navigate("SignIn")}>SIGN IN</Rtext>
                        </View>
                    </View>

                </ImageBackground>
            </ScrollView>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({})