import { StyleSheet, Image, View, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Rtext } from '../../components/Rtext';
import { InfluencerData, KP, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utility';

const Influencers = ({ navigation }) => {

    return (
        <View style={{ flex: 1, borderColor: 'red' }}>
            <ScrollView>
                <Image
                    style={styles.backgroundImg}
                    source={require('../../assets/images/login_back.png')} />

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require("../../assets/icons/back_btn.png")} style={{ width: 80, height: 80, resizeMode: 'contain' }} />
                </TouchableOpacity>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 64, marginBottom: 16 }}>
                    <Rtext fontWeight="bold" color='#fff' fontSize={22}>Follow top Influencers</Rtext>

                </View>

                {
                    InfluencerData.map((item, index) => {
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
                                            <TouchableOpacity style={{ paddingVertical: 12, paddingHorizontal: 16, margin: 6, backgroundColor: '#fff', borderRadius: 16, flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={item.image} style={{ height: 42, width: 42, resizeMode: 'contain' }} />
                                                <View style={{ padding: 12 }}>
                                                    <Rtext>{item.name}</Rtext>
                                                    <Rtext fontSize={12}>{item.followers}</Rtext>
                                                </View>
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

                    <TouchableOpacity style={{ backgroundColor: '#296EFF', padding: 20, borderRadius: 32, width: SCREEN_WIDTH - 64, alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate("Language")}>
                        <Rtext color='#fff'>FINISH</Rtext>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Influencers

const styles = StyleSheet.create({
    backgroundImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    }
});