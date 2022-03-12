import { StyleSheet, FlatList, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Rtext } from '../../components/Rtext'
import RenderHtml from 'react-native-render-html';
import { SCREEN_WIDTH } from '../../utility';

const todayData = [

    {
        image: require("../../assets/icons/like2.png"),
        // message: { html: `<div style=font-family:'Montserrat-Regular'><b>Sofia, John and +19 others</b> liked your post.</div>` },
        message1: "Sofia, John and +19 others ",
        message2: "liked your post.",
        time: '10m ago'
    },
    {
        image: require("../../assets/icons/like2.png"),
        // message: 'Rebecca, Daisy and +11 others liked your post.',
        message1: 'Rebecca, Daisy and +11 others ',
        message2: 'liked your post.',
        time: '30m ago'
    }

]

const yesterdayData = [

    {
        image: require("../../assets/icons/comment2.png"),
        message1: 'Katrina, Denver and +2 others ',
        message2: 'commented on your post.',
        time: '1d ago'
    },
    {
        image: require("../../assets/icons/s.png"),
        message1: 'Savannah Wilson ',
        message2: 'is celebrating birthday today. Drop a wish!',
        time: '1d ago'
    },
    {
        image: require("../../assets/icons/mentioned.png"),
        message1: 'Ralph Edwards ',
        message2: 'mentioned you in a post.',
        time: '1d ago'
    },
    {
        image: require("../../assets/icons/mentioned.png"),
        message1: 'Leslie Alexandar ',
        message2: 'mentioned you in a comment.',
        time: '1d ago'
    }


]
const Alerts = (props) => {

    const ItemSeparator = () => {
        return (
            <View style={{ backgroundColor: '#B6B6B6', height: 1 }} />
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <Image
                    style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'cover',
                        position: 'absolute',
                    }}
                    source={require('../../assets/images/background.png')} />

                <View style={{ padding: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Rtext fontWeight='bold' fontSize={15}>Alerts</Rtext>

                    <TouchableOpacity>
                        <Rtext fontWeight='bold' fontSize={12} color='#1A47BB'>Mark all as read</Rtext>
                    </TouchableOpacity>
                </View>

                <View style={{ marginBottom: 16, marginLeft: 24 }}>
                    <Rtext style={{ letterSpacing: 1 }} color='#1A171B'>TODAY</Rtext>
                </View>

                <FlatList
                    data={todayData}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ margin: 6, flexDirection: 'row', alignItems: 'flex-start', paddingHorizontal: 12, paddingVertical: 6 }}>
                                <Image source={item.image} style={{ width: 36, height: 36, resizeMode: 'contain' }} />
                                <View style={{ width: SCREEN_WIDTH - 100 }}>
                                    <View style={{ flexDirection: 'row', paddingHorizontal: 12, flexWrap: 'wrap' }}>
                                        <Rtext fontWeight='bold'>{item.message1}</Rtext>
                                        <Rtext>{item.message2}</Rtext>
                                    </View>
                                    <Rtext style={{ marginTop: 6, marginLeft: 10 }}>{item.time}</Rtext>
                                </View>
                            </View>
                        )
                    }} />

                < View style={{ backgroundColor: '#B6B6B6', height: 1 }} />
                < View style={{ marginLeft: 24, marginVertical: 24 }}>
                    <Rtext style={{ letterSpacing: 1 }} color='#1A171B'>YESTERDAY</Rtext>
                </View >


                <FlatList
                    data={yesterdayData}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ margin: 6, flexDirection: 'row', alignItems: 'flex-start', paddingHorizontal: 12, paddingVertical: 6 }}>
                                <Image source={item.image} style={{ width: 36, height: 36, resizeMode: 'contain' }} />
                                <View style={{ width: SCREEN_WIDTH - 100 }}>
                                    <View style={{ flexDirection: 'row', paddingHorizontal: 12, flexWrap: 'wrap' }}>
                                        <Rtext fontWeight='bold'>{item.message1}</Rtext>
                                        <Rtext>{item.message2}</Rtext>
                                    </View>
                                    <Rtext style={{ marginTop: 6, marginLeft: 10 }}>{item.time}</Rtext>
                                </View>
                            </View>
                        )
                    }} />
            </ScrollView >
        </View >
    )
}

export default Alerts

const styles = StyleSheet.create({})