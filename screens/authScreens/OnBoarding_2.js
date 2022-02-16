import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Rtext } from '../../components/Rtext'
import { normalizeSize, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utility'

const OnBoarding_2 = ({navigation}) => {
    return (
        <View>
            <ImageBackground source={require("../../assets/images/bg2.png")} style={{ width: '100%', height: '100%' }} width={"100%"}>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
                    <Image source={require("../../assets/images/black_box.png")} style={{ width: SCREEN_WIDTH - 140, height: SCREEN_HEIGHT / 2, borderRadius: 16 }} />
                </View>

                <View style={{ position: 'absolute', top: 60 + (SCREEN_HEIGHT / 2) + 24, alignItems: 'center', justifyContent: 'center' }}>
                    <Rtext fontWeight="bold" color='#fff'>Upload Videos</Rtext>

                    <View style={{ marginHorizontal: 64, marginVertical: 16 }}>
                        <Rtext color='#fff' style={{ textAlign: 'center' }} fontSize={11}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Rtext>
                    </View>

                    <TouchableOpacity style={{ backgroundColor: '#296EFF', paddingHorizontal: 32, paddingVertical: 16, margin: 16, borderRadius: 28 }} onPress={()=> navigation.navigate("OnBoarding_3")}>
                        <Image source={require("../../assets/icons/right_arrow.png")} style={{ width: 20, height: 20, resizeMode:'contain' }} />
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
    )
}

export default OnBoarding_2

const styles = StyleSheet.create({})