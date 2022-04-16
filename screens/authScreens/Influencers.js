import { StyleSheet, Image, View, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Rtext } from '../../components/Rtext';
import { InfluencerData, SCREEN_WIDTH } from '../../utility';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { guestUserInfluencersList } from '../../store/auth';
import Spinner from 'react-native-loading-spinner-overlay';

const Influencers = ({ navigation }) => {

    const dispatch = useDispatch();

    const influencerList = useSelector((state) => state.auth.influencerList);
    const loader = useSelector((state) => state.auth.loading);
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        getInfluencersList();
    }, []);

    const getInfluencersList = async () => {
        const device_token = await AsyncStorage.getItem('device_token');
        const app_api_key = await AsyncStorage.getItem('app_api_key');

        dispatch(guestUserInfluencersList({
            device_token: device_token,
            app_api_key: app_api_key,
            // user_id: user?.userId,
            user_id: 24
        }));
    }

    console.log('influencerList', influencerList);

    return (
        <View style={{ flex: 1 }}>
            <Spinner visible={loader} />
            <Image
                style={styles.backgroundImg}
                source={require('../../assets/images/login_back.png')} />
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ margin: 12 }}>
                    <Image source={require("../../assets/icons/back_btn.png")} style={{ width: 64, height: 64, resizeMode: 'cover' }} />
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