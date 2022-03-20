import React from 'react'
import { StyleSheet, ScrollView, View, ImageBackground, Image, TouchableOpacity, TextInput, FlatList, Text } from 'react-native'
import { PostList, SCREEN_WIDTH, Story } from '../../utility'
import { Rtext } from '../../components/Rtext';

const HashTags = ["#words", "#beautiful", "#stunning", "#love", "#nature", "#shayari"];

const HashTagsNames = ["Alex Tsimikas", "Alex Ts", "Alex J.", "Alexis", "Alexa", "Alex"];

const ExploreUsers = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/images/home_back.png')} style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                position: 'absolute',
                opacity: 0.3
            }} />
            <ScrollView style={{ width: '100%', height: "100%" }}>
                {/* <ImageBackground
                    imageStyle={{ width: '100%', height: "100%", opacity: 0.3 }}
                    source={require('../../assets/images/home_back.png')}> */}
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 24, width: '100%', justifyContent: 'space-between' }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#EFEFEF', borderRadius: 16, width: '70%', height: 42, elevation: 6 }}>
                            <Image source={require("../../assets/icons/amorist_icon.png")} style={{ width: 24, height: 24, resizeMode: 'contain', marginLeft: 12 }} />
                            <TextInput placeholder='amorist' style={{ width: SCREEN_WIDTH / 2, fontFamily: 'Montserrat-Regular' }} value='Alex' />
                        </View>

                        <TouchableOpacity style={{ width: '100%', marginHorizontal: 16 }} onPress={() => props.navigation.navigate("Profile", { "IsEdit": true })}>
                            <Image source={require("../../assets/images/avatar1.png")} style={{ height: 80, width: 50, resizeMode: 'contain' }} />
                        </TouchableOpacity>

                    </View>

                    <View style={{ marginLeft: 32 }}>
                        <Rtext color='#000000' fontSize={12}>Trending Hashtags:</Rtext>
                    </View>

                    <FlatList
                        style={{ marginLeft: 16, marginTop: 6 }}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={HashTags}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={{ margin: 3, backgroundColor: '#000000', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 24, borderWidth: 1, borderColor: '#fff', elevation: 6 }} key={index.toString()}>
                                    <Rtext color='#fff' fontSize={12} fontWeight='bold'>{item}</Rtext>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>

                <FlatList
                    style={{ marginLeft: 16, marginTop: 6 }}
                    showsHorizontalScrollIndicator={false}
                    data={HashTagsNames}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ margin: 8, flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require("../../assets/images/avatar13.png")} style={{ height: 36, width: 36, resizeMode: 'contain', marginRight: 6 }} />
                                <Rtext fontWeight='bold' fontSize={13}>{item}</Rtext>
                            </View>

                        )
                    }}
                />
                {/* </ImageBackground> */}
            </ScrollView>
        </View>
    )
}

export default ExploreUsers

const styles = StyleSheet.create({})