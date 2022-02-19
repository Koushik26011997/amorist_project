import { ScrollView, StyleSheet, ImageBackground, View, TouchableOpacity, Image, TextInput, Text } from 'react-native'
import React from 'react'
import { Rtext } from '../../components/Rtext'
import { Checkbox } from 'react-native-paper'
import { Rmodal } from '../../components/Rmodal'
import { Ainput } from '../../components/Ainput'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SignUp = ({ navigation }) => {
    const [checked, setChecked] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [phoneNumber, setPhoneNumber] = React.useState("");

    return (
        // <View style={{ flex: 1 }}>
        //     <ScrollView style={{ width: '100%', height: "100%" }}>

        <View>
            {/* <Image
                    style={styles.backgroundImg}
                    source={require('../../assets/images/login_back.png')} /> */}
            <ScrollView style={{ width: '100%', height: "100%" }}>
                <ImageBackground
                    imageStyle={{ width: '100%', height: "100%" }}
                    source={require('../../assets/images/login_back.png')}>

                    {/* <Image
                    style={styles.backgroundImg}
                    source={require('../../assets/images/login_back.png')} /> */}

                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ margin: 12 }}>
                        <Image source={require("../../assets/icons/back_btn.png")} style={{ width: 64, height: 64, resizeMode: 'cover' }} />
                    </TouchableOpacity>

                    <View style={{ alignItems: 'center', justifyContent: 'center', margin: 32 }}>

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


                        <TouchableOpacity style={{ backgroundColor: '#296EFF', padding: 20, borderRadius: 32, width: '100%', alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate("OTP")}>
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
                    style={{ marginVertical: 32 }}
                    placeholder="Phone number"
                    value={phoneNumber}
                    type="number-pad"
                    border={"#fff"}
                    onChangeText={text => setPhoneNumber(text)}
                />

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: '#fff', padding: 16, borderRadius: 32, width: '90%', alignItems: 'center', justifyContent: 'center', marginVertical: 16 }} onPress={() => (setShowModal(false), navigation.navigate("OTP"))}>
                        <Rtext color='#296EFF' fontSize={13}>CONTINUE</Rtext>
                    </TouchableOpacity>
                </View>
            </Rmodal>
        </View>
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