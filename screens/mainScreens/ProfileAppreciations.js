import React from 'react'
import { StyleSheet, ScrollView, View, ImageBackground, Image, TouchableOpacity, TextInput, FlatList, Text } from 'react-native'
import { ProfileAppreciationsList } from '../../utility'
import { Rtext } from '../../components/Rtext';

const ProfileAppreciations = () => {
    return (
        <View>
            {
                ProfileAppreciationsList.map((item, index1) => {
                    return (
                        <View key={index1.toString()} style={{ padding: 16 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 6 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={item.userImage} style={{ height: 36, width: 36, resizeMode: 'contain' }} />
                                    <View style={{ paddingLeft: 6 }}>
                                        <Rtext fontWeight='bold'>{item.userName}</Rtext>
                                        <Rtext fontSize={12}>{item.postTime}</Rtext>
                                    </View>
                                </View>

                                <TouchableOpacity style={{ padding: 6 }}>
                                    <Image source={require("../../assets/icons/dot.png")} style={{ height: 16, width: 16, resizeMode: 'contain' }} />
                                </TouchableOpacity>

                            </View>

                            <View style={{ alignItems: 'flex-start', paddingHorizontal: 12, paddingVertical: 12 }}>

                                {item.postContentText != "" && <Rtext style={{ lineHeight: 24 }}>{item.postContentText}</Rtext>}

                                {/* {
                                    <FlatList
                                        data={item.postContentImages}
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        keyExtractor={(img, pos) => pos.toString()}
                                        showsVerticalScrollIndicator={false}
                                        renderItem={({ img, pos }) => {
                                            console.log("KP", index1, pos);
                                            return (
                                                <View style={{ flex: 1, marginHorizontal: 6 }}>
                                                    <Image source={require("../../assets/images/post1.png")} style={{ height: 180, width: SCREEN_WIDTH - 68, resizeMode: 'contain' }} />
                                                </View>
                                            )
                                        }} />
                                } */}

                            </View>

                            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}> */}
                            <View style={{ flexDirection: 'row', alignItems: 'center' , justifyContent:'center'}}>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require("../../assets/icons/like.png")} style={{ height: 12, width: 12, resizeMode: 'contain', marginHorizontal: 12 }} />
                                    <Rtext color='#000' fontSize={12} fontWeight='bold'>{item.postLikes}</Rtext>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require("../../assets/icons/share.png")} style={{ height: 12, width: 12, resizeMode: 'contain', marginHorizontal: 12 }} />
                                    <Rtext color='#000' fontSize={12}>{item.postShares}</Rtext>
                                </TouchableOpacity>

                            </View>
                            {/* </View> */}

                            <View style={{ backgroundColor: '#B6B6B6', height: 1, marginTop: 16 }} />
                        </View>
                    )
                })
            }
        </View>
    )
}

export default ProfileAppreciations

const styles = StyleSheet.create({})