import { StyleSheet, Image, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Rtext } from '../../components/Rtext';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utility';

const Language = ({ navigation }) => {

    const languages = ["Hindi", "English", "Bengali", "Urdu"];
    const [language, setLanguage] = useState(1);

    const renderItemList = (item, index) => {
        return (
            <TouchableOpacity
                onPress={() => setLanguage(index)}
                style={{ backgroundColor: "#fff", padding: 24, margin: 6, borderRadius: 12, opacity: language === index ? 1 : 0.6 }}>
                <View style={{ paddingLeft: 16 }}>
                    <Rtext color='#3F414E'>{item}</Rtext>
                </View>
            </TouchableOpacity>
        );
    };


    return (
        <View style={{ flex: 1 }}>

            <Image
                style={styles.backgroundImg}
                source={require('../../assets/images/login_back.png')} />

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require("../../assets/icons/back_btn.png")} style={{ width: 80, height: 80, resizeMode: 'contain' }} />
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

                <TouchableOpacity style={{ backgroundColor: '#296EFF', padding: 20, borderRadius: 32, width: SCREEN_WIDTH - 64, alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate("Topics")}>
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