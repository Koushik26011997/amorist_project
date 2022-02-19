import { ScrollView, StyleSheet, ImageBackground, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { Rtext } from '../../components/Rtext'
import { Checkbox } from 'react-native-paper';
import { Rmodal } from '../../components/Rmodal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ainput } from '../../components/Ainput';
import { SCREEN_HEIGHT } from '../../utility';

const SignIn = ({ navigation }) => {
    const [checked, setChecked] = React.useState(false);

    const [showModal, setShowModal] = React.useState(false);

    const [phoneNumber, setPhoneNumber] = React.useState("");

    return (
        <View>
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

                    <TextInput style={{ backgroundColor: '#fff', padding: 16, borderRadius: 16, width: '100%', fontFamily: 'MontserratRegular', marginTop: 32 }}
                        placeholder='Email address'
                        keyboardType='email-address'
                        placeholderTextColor={"#A1A4B2"} />

                    <TextInput style={{ backgroundColor: '#fff', padding: 16, borderRadius: 16, width: '100%', fontFamily: 'MontserratRegular', marginTop: 16 }}
                        placeholder='Password'
                        placeholderTextColor={"#A1A4B2"} />

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

                    <TouchableOpacity style={{ backgroundColor: '#296EFF', padding: 20, borderRadius: 32, width: '100%', alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate("Topics")}>
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
            {/* <Rmodal visible={showModal} onCancel={() => setShowModal(false)}>

                <Rtext
                    fontWeight='bold'
                    fontSize={16}
                    style={{ textAlign: 'center' }}>
                    Enter Phone number
                </Rtext>

                <TouchableOpacity
                    style={{ position: 'absolute', right: 8, top: 8 }}
                    onPress={() => setShowModal(false)}>

                    <MaterialCommunityIcons name={'close-circle'} size={32} color={"#296EFF"} />

                </TouchableOpacity>


                <View
                    style={{
                        backgroundColor: 'gray',
                        height: 1,
                        marginVertical: 6,
                    }} />

                <Rtext
                    style={{ textAlign: 'center', marginTop: 8, marginStart: 16 }}
                    color={"gray"}>
                    An OTP will be sent to your Phone
                </Rtext>

                <Ainput
                    style={{ marginVertical: 16 }}
                    placeholder="Phone number"
                    value={phoneNumber}
                    type="number-pad"
                    border={"#296EFF"}
                    onChangeText={text => setPhoneNumber(text)}
                />

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: '#296EFF', padding: 16, borderRadius: 32, width: '90%', alignItems: 'center', justifyContent: 'center', marginVertical: 16 }} onPress={() => (setShowModal(false), navigation.navigate("OTP"))}>
                        <Rtext color='#fff'>CONTINUE</Rtext>
                    </TouchableOpacity>
                </View>
            </Rmodal> */}
        </View>
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