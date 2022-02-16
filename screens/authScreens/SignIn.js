import { ScrollView, StyleSheet, ImageBackground, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { Rtext } from '../../components/Rtext'
import { Checkbox } from 'react-native-paper';

const SignIn = ({ navigation }) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <View style={{ flex: 1 }}>
            {/* <ScrollView style={{ width: '100%', height: "100%", backgroundColor: 'red' }}> */}
            {/* <ImageBackground
                    imageStyle={{ width: '100%', height: "100%" }}
                    source={require('../../assets/images/login_back.png')}> */}

            <Image
                style={styles.backgroundImg}
                source={require('../../assets/images/login_back.png')} />

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require("../../assets/icons/back_btn.png")} style={{ width: 80, height: 80, resizeMode: 'contain' }} />
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

                    <TouchableOpacity style={{ backgroundColor: '#fff', width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require("../../assets/icons/cell.png")} style={{ width: 18, height: 18, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                </View>

                <Rtext color='#fff' style={{ margin: 16 }} fontWeight='bold' fontSize={12}>Forgot Password?</Rtext>

                <TouchableOpacity style={{ backgroundColor: '#296EFF', padding: 20, borderRadius: 32, width: '100%', alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate("SignUp")}>
                    <Rtext color='#fff'>LOG IN</Rtext>
                </TouchableOpacity>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                    <Rtext color='#fff' fontWeight='bold' fontSize={12}>New here? Click here to </Rtext>
                    <Rtext color='#fff' fontWeight='bold' fontSize={12} onPress={() => navigation.navigate("SignUp")}>SIGN UP</Rtext>
                </View>
            </View>

            {/* </ImageBackground>
            </ScrollView> */}
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    backgroundImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
});