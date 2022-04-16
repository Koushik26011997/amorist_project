import { StyleSheet, Image, View, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Rtext } from '../../components/Rtext';
import { KP, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utility';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { guestUserTopicList } from '../../store/auth';
import Spinner from 'react-native-loading-spinner-overlay';

const Topics = ({ navigation }) => {

    const dispatch = useDispatch();

    const topicList = useSelector((state) => state.auth.topicList);
    const loader = useSelector((state) => state.auth.loading);
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        getTopicList();
    }, []);

    const getTopicList = async () => {
        const device_token = await AsyncStorage.getItem('device_token');
        const app_api_key = await AsyncStorage.getItem('app_api_key');

        dispatch(guestUserTopicList({
            device_token: device_token,
            app_api_key: app_api_key,
            // user_id: user?.userId,
            user_id: 24
        }));
    }

    console.log('topicList', topicList);

    return (
        <View style={{ flex: 1 }}>
            <Spinner visible={loader} />
            <Image
                style={styles.backgroundImg}
                source={require('../../assets/images/login_back.png')} />

            <ScrollView>
                {/* <Image
                    style={styles.backgroundImg}
                    source={require('../../assets/images/login_back.png')} /> */}

                <TouchableOpacity onPress={() => navigation.goBack()} style={{ margin: 12 }}>
                    <Image source={require("../../assets/icons/back_btn.png")} style={{ width: 64, height: 64, resizeMode: 'cover' }} />
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