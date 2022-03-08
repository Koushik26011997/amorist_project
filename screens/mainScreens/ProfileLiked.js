import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Rtext } from '../../components/Rtext'

const ProfileLiked = () => {

    const data = [
        require("../../assets/images/avatar13.png"),
        require("../../assets/images/avatar13.png"),
        require("../../assets/images/avatar13.png"),
        require("../../assets/images/avatar13.png"),
        require("../../assets/images/avatar13.png"),
        require("../../assets/images/avatar13.png"),
        require("../../assets/images/avatar13.png"),
        require("../../assets/images/avatar13.png")
    ]

    return (
        <View style={{ alignItems: 'center' }}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                numColumns={2}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ alignItems: 'center' }}>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 104, width: 104,
                                borderWidth: 2, borderColor: '#2E8AF7',
                                borderRadius: 52, margin: 24
                            }}>
                                <Image source={item} style={{ height: 100, width: 100, borderRadius: 50, borderWidth: 2, borderColor: '#1A171B' }} />
                            </View>


                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Rtext style={{ marginTop: 3 }} fontSize={13}>Alex Tsimikas</Rtext>
                                    <Rtext style={{ marginTop: 3 }} fontSize={11}>Brooklyn, NY</Rtext>
                                </View>

                                <TouchableOpacity style={{ margin: 8 }}>
                                    <Image source={require("../../assets/icons/heart.png")} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default ProfileLiked

const styles = StyleSheet.create({})