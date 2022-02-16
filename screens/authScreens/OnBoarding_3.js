import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Rtext } from '../../components/Rtext'
import { normalizeSize, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utility'

const OnBoarding_3 = ({navigation}) => {
    return (
        <View>
            <ImageBackground source={require("../../assets/images/bg3.png")} style={{ width: '100%', height: '100%' }} width={"100%"}>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
                    <Image source={require("../../assets/images/black_box.png")} style={{ width: SCREEN_WIDTH - 140, height: SCREEN_HEIGHT / 2, borderRadius: 16 }} />
                </View>

                <View style={{ position: 'absolute', top: 60 + (SCREEN_HEIGHT / 2) + 24, alignItems: 'center', justifyContent: 'center' }}>
                    <Rtext fontWeight="bold" color='#fff'>Make Followers</Rtext>

                    <View style={{ marginHorizontal: 64, marginVertical: 16 }}>
                        <Rtext color='#fff' style={{ textAlign: 'center' }} fontSize={11}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Rtext>
                    </View>

                    <TouchableOpacity style={{ backgroundColor: '#296EFF', paddingHorizontal: 38, paddingVertical: 20, margin: 16, borderRadius: 32 }} onPress={()=> navigation.navigate("SignIn")}>

                        <Rtext color='#fff'>Continue</Rtext>

                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
    )
}

export default OnBoarding_3

const styles = StyleSheet.create({})