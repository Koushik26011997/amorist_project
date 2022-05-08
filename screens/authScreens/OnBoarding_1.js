import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Rtext } from '../../components/Rtext'
import { normalizeSize, OnBoarding_1_Quote, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utility'
import { SafeAreaView } from 'react-native-safe-area-context'

const OnBoarding_1 = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ImageBackground source={require("../../assets/images/onboarding_1.png")} style={{ width: '100%', height: '100%' }} width={"100%"}>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
                    <Image source={require("../../assets/images/ob1.png")} style={{ width: SCREEN_WIDTH - 140, height: SCREEN_HEIGHT / 2, borderRadius: 28, resizeMode: 'contain' }} />
                </View>

                <View style={{ position: 'absolute', top: 64 + (SCREEN_HEIGHT / 2) + 24, alignItems: 'center', justifyContent: 'center' }}>
                    <Rtext fontWeight="bold" color='#fff'>Post your Quote</Rtext>

                    <View style={{ marginHorizontal: 64, marginVertical: 16 }}>
                        <Rtext color='#fff' style={{ textAlign: 'justify' }} fontSize={11}>
                            {OnBoarding_1_Quote}
                        </Rtext>
                    </View>

                    <TouchableOpacity style={{ backgroundColor: '#296EFF', paddingHorizontal: 32, paddingVertical: 16, margin: 16, borderRadius: 28 }} onPress={() => navigation.navigate("OnBoarding_2")}>
                        <Image source={require("../../assets/icons/right_arrow.png")} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}

export default OnBoarding_1

const styles = StyleSheet.create({})