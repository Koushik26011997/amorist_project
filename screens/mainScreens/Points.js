import { StyleSheet, FlatList, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Rtext } from '../../components/Rtext'
import RenderHtml from 'react-native-render-html';
import { SCREEN_WIDTH } from '../../utility';

const todayData = [

    {
        message1: 'Earned for referring ',
        message2: 'USERNAME',
        value: '+1.1'
    },
    {
        message1: 'Withdrawn from Wallet',
        message2: '',
        value: '-1.1'
    },
]

const yesterdayData = [

    {
        message1: 'USERNAME ',
        message2: 'supported you!',
        value: '+1.1'
    },
    {
        message1: 'Earned for referring ',
        message2: 'USERNAME',
        value: '+1.1'
    },
]

const othersData = [
    {
        message1: 'Earned for referring ',
        message2: 'USERNAME',
        value: '+0.5'
    },
]
const Points = (props) => {

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
                    source={require('../../assets/images/background.png')}

                />
                <View style={{ padding: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Rtext fontWeight='bold' fontSize={15}>Points Earned</Rtext>


                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={{ borderWidth: 1, borderColor: '#1A171B', borderRadius: 24, paddingHorizontal: 12, paddingVertical: 4, marginRight: 12 }}>
                            <Rtext>2.7 points</Rtext>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => props.navigation.navigate("Alerts")}>
                            <Rtext color='#591371' fontWeight='bold' fontSize={13}>Withdraw</Rtext>
                        </TouchableOpacity>
                    </View>

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
                            <View style={{ margin: 6, flexDirection: 'row', alignItems: 'baseline', paddingHorizontal: 12, paddingVertical: 6 }}>

                                <TouchableOpacity style={{ backgroundColor: '#333333', borderRadius: 24, padding: 12 }}>
                                    <Rtext color='#fff' fontWeight='bold'>{item.value}</Rtext>
                                </TouchableOpacity>

                                <View style={{ width: SCREEN_WIDTH - 100 }}>
                                    <View style={{ flexDirection: 'row', paddingHorizontal: 12, alignContent: 'center' }}>
                                        <Rtext>{item.message1}</Rtext>
                                        <Rtext fontWeight='bold'>{item.message2}</Rtext>
                                    </View>
                                    <Rtext style={{ marginTop: 6, marginLeft: 10 }}>{item.time}</Rtext>
                                </View>
                            </View>
                        )
                    }} />

                <View style={{ backgroundColor: '#B6B6B6', height: 1 }} />
                <View style={{ marginLeft: 24, marginVertical: 24 }}>
                    <Rtext style={{ letterSpacing: 1 }} color='#1A171B'>YESTERDAY</Rtext>
                </View>

                <FlatList
                    data={yesterdayData}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ margin: 6, flexDirection: 'row', alignItems: 'baseline', paddingHorizontal: 12, paddingVertical: 6 }}>

                                <TouchableOpacity style={{ backgroundColor: '#333333', borderRadius: 24, padding: 12 }}>
                                    <Rtext color='#fff' fontWeight='bold'>{item.value}</Rtext>
                                </TouchableOpacity>

                                <View style={{ width: SCREEN_WIDTH - 100 }}>
                                    <View style={{ flexDirection: 'row', paddingHorizontal: 12, alignContent: 'center' }}>
                                        <Rtext>{item.message1}</Rtext>
                                        <Rtext fontWeight='bold'>{item.message2}</Rtext>
                                    </View>
                                    <Rtext style={{ marginTop: 6, marginLeft: 10 }}>{item.time}</Rtext>
                                </View>
                            </View>
                        )
                    }} />

                <View style={{ backgroundColor: '#B6B6B6', height: 1 }} />
                <View style={{ marginLeft: 24, marginVertical: 24 }}>
                    <Rtext style={{ letterSpacing: 1 }} color='#1A171B'>5-02-2022</Rtext>
                </View>

                <FlatList
                    data={othersData}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ margin: 6, flexDirection: 'row', alignItems: 'baseline', paddingHorizontal: 12, paddingVertical: 6 }}>

                                <TouchableOpacity style={{ backgroundColor: '#333333', borderRadius: 24, padding: 12 }}>
                                    <Rtext color='#fff' fontWeight='bold'>{item.value}</Rtext>
                                </TouchableOpacity>

                                <View style={{ width: SCREEN_WIDTH - 100 }}>
                                    <View style={{ flexDirection: 'row', paddingHorizontal: 12 }}>
                                        <Rtext>{item.message1}</Rtext>
                                        <Rtext fontWeight='bold'>{item.message2}</Rtext>
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

export default Points

const styles = StyleSheet.create({})