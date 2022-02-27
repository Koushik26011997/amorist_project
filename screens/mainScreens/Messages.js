import { StyleSheet, View, Image, TouchableOpacity, TextInput, FlatList, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { Rtext } from '../../components/Rtext'
import { MessagesList, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utility'

const Messages = ({ navigation }) => {

    const ItemSeparator = () => {
        return (
            <View style={{ backgroundColor: '#B6B6B6', height: 1 }} />
        );
    };

    const renderItemList = (item, index) => {
        return (
            <TouchableOpacity key={index.toString()} style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 24 }}>

                <View style={{ flexDirection: 'row', width: '80%' }}>
                    <Image source={item.userImage} style={{ height: 36, width: 36, resizeMode: 'contain' }} />
                    <View style={{ paddingLeft: 6 }}>
                        <Rtext fontWeight='bold'>{item.userName}</Rtext>
                        <Rtext fontSize={12} style={{ marginTop: 3 }}>{item.message}</Rtext>
                    </View>
                </View>

                <Rtext fontSize={12}>{item.last_msg_time}</Rtext>

            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            {/* <Image source={require('../../assets/images/home_back.png')}
                style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    position: 'absolute',
                    opacity: 0.3
                }} /> */}
            <ScrollView style={{ width: '100%', height: "100%" }}>
                <ImageBackground
                    imageStyle={{ width: '100%', height: "100%", opacity: 0.3 }}
                    source={require('../../assets/images/home_back.png')}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 24 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={require("../../assets/icons/black_btn.png")} style={{ width: 46, height: 46, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                        <Rtext fontWeight='bold' style={{ letterSpacing: 2 }}>MESSAGES</Rtext>
                        <TouchableOpacity onPress={()=> navigation.navigate("Points")}>
                            <Image source={require("../../assets/icons/settings.png")} style={{ width: 46, height: 46, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ backgroundColor: '#DDDCE3', borderRadius: 32, marginHorizontal: 16, paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput style={{ fontFamily: 'Montserrat-Regular', width: SCREEN_WIDTH - 86, height: 40, fontSize: 12 }} placeholder='Who do you want to chat with?' placeholderTextColor="#414141" />

                        <Image source={require("../../assets/icons/search.png")} style={{ width: 18, height: 18, resizeMode: 'contain' }} />
                    </View>

                    <FlatList
                        style={{ marginTop: 24 }}
                        ListHeaderComponent={ItemSeparator}
                        ItemSeparatorComponent={ItemSeparator}
                        data={MessagesList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return renderItemList(item, index);
                        }} />

                </ImageBackground></ScrollView>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({})