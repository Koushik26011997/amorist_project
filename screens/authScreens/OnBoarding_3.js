import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Rtext } from '../../components/Rtext'
import { normalizeSize, OnBoarding_3_Quote, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utility'

const OnBoarding_3 = ({navigation}) => {
    return (
        <View>
            <ImageBackground source={require("../../assets/images/onboarding_3.png")} style={{ width: '100%', height: '100%' }} width={"100%"}>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
                    <Image source={require("../../assets/images/ob3.png")} style={{ width: SCREEN_WIDTH - 140, height: SCREEN_HEIGHT / 2, borderRadius: 28, resizeMode:'contain'}} />
                </View>

                <View style={{ position: 'absolute', top: 64 + (SCREEN_HEIGHT / 2) + 24, alignItems: 'center', justifyContent: 'center' }}>
                    <Rtext fontWeight="bold" color='#fff'>Make Followers</Rtext>

                    <View style={{ marginHorizontal: 64, marginVertical: 16 }}>
                        <Rtext color='#fff' style={{ textAlign: 'justify' }} fontSize={11}>
                            {OnBoarding_3_Quote}
                        </Rtext>
                    </View>

                    <TouchableOpacity style={{ backgroundColor: '#296EFF', paddingHorizontal: 38, paddingVertical: 16, margin: 16, borderRadius: 32 }} onPress={()=> navigation.replace("MainStackNav")}>

                        <Rtext color='#fff'>Continue</Rtext>

                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
    )
}

export default OnBoarding_3

const styles = StyleSheet.create({})