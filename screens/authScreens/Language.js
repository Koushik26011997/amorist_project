import { StyleSheet, Image, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Rtext } from '../../components/Rtext';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utility';
import { useEffect } from 'react';
import { guestUserLanguages } from '../../store/auth';
import Spinner from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Language = ({ navigation }) => {

    const dispatch = useDispatch();

    const languages = useSelector((state) => state.auth.languagesList);
    const loader = useSelector((state) => state.auth.loading);
    const user = useSelector((state) => state.auth.user);

    const [pos, setPos] = useState(0);

    console.log("pos", pos);

    const renderItemList = (item, index) => {
        return (
            <TouchableOpacity
                key={index.toString()}
                onPress={() => setPos(index)}
                // style={{ backgroundColor: "#fff", padding: 24, margin: 6, borderRadius: 12, opacity: pos === index ? 1 : 0.6 }}
                style={{ backgroundColor: pos === index ? "#fffff" : '#f1f1f1', padding: 24, margin: 6, borderRadius: 12 }}
            >
                <View style={{ paddingLeft: 16 }}>
                    <Rtext color='#3F414E'>{item?.language}</Rtext>
                </View>
            </TouchableOpacity>
        );
    };

    useEffect(() => {
        getAllLanguages();
    }, []);

    const getAllLanguages = async () => {
        const device_token = await AsyncStorage.getItem('device_token');
        const app_api_key = await AsyncStorage.getItem('app_api_key');

        dispatch(guestUserLanguages({
            device_token: device_token,
            app_api_key: app_api_key,
            // user_id: user?.userId,
            user_id: 24
        }));
    }

    return (
        <View style={{ flex: 1 }}>
            <Spinner visible={loader} />
            <Image
                style={styles.backgroundImg}
                source={require('../../assets/images/login_back.png')} />

            <TouchableOpacity onPress={() => navigation.goBack()} style={{ margin: 12 }}>
                <Image source={require("../../assets/icons/back_btn.png")} style={{ width: 64, height: 64, resizeMode: 'cover' }} />
            </TouchableOpacity>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 100 }}>
                <Rtext fontWeight="bold" color='#fff' fontSize={22}>Select your Languages</Rtext>

                <FlatList
                    style={{ width: SCREEN_WIDTH - 64, margin: 32 }}
                    data={languages}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return renderItemList(item, index);
                    }} />

                <TouchableOpacity style={{ backgroundColor: '#296EFF', padding: 20, borderRadius: 32, width: SCREEN_WIDTH - 64, alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.replace("MainStackNav")}>
                    <Rtext color='#fff'>CONTINUE</Rtext>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default Language

const styles = StyleSheet.create({
    backgroundImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    flatlistStyle: { flex: 1, margin: 12, borderRadius: 4, elevation: 6 },
});