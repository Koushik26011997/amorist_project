import { StyleSheet, Image, View, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Rtext } from '../../components/Rtext';
import { KP, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utility';

const Topics = ({ navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <Image
                    style={styles.backgroundImg}
                    source={require('../../assets/images/login_back.png')} />

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require("../../assets/icons/back_btn.png")} style={{ width: 80, height: 80, resizeMode: 'contain' }} />
                </TouchableOpacity>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 32, marginBottom: 16 }}>
                    <Rtext fontWeight="bold" color='#fff' fontSize={22}>Select your</Rtext>
                    <Rtext fontWeight="bold" color='#fff' fontSize={22} style={{ margin: 6 }}>Topics of Interest</Rtext>
                </View>

                {
                    KP.map((item, index) => {
                        return (
                            <View style={{ padding: 1, marginTop: 12 }} key={index.toString()}>
                                <Rtext style={{ textAlign: 'center' }} color='#fff'>{item.title}</Rtext>
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    data={item.content}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <TouchableOpacity style={{ paddingVertical: 12, paddingHorizontal: 32, margin: 6, backgroundColor: '#fff', borderRadius: 16 }}>
                                                <Rtext>{item.value}</Rtext>
                                            </TouchableOpacity>
                                        )
                                    }}
                                />
                            </View>
                        )
                    })
                }

                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 16 }}>
                    <Rtext fontWeight="bold" color='#fff' fontSize={14} style={{ margin: 12 }}>Skip for now</Rtext>

                    <TouchableOpacity style={{ backgroundColor: '#296EFF', padding: 20, borderRadius: 32, width: SCREEN_WIDTH - 64, alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate("Influencers")}>
                        <Rtext color='#fff'>CONTINUE</Rtext>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Topics

const styles = StyleSheet.create({
    backgroundImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    }
});