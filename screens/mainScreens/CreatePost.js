import { ImageBackground, StyleSheet, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Rtext } from '../../components/Rtext'
import { normalizeSize, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utility'

const CreatePost = (props) => {

    // android:windowSoftInputMode="adjustResize"
    // android:windowSoftInputMode="adjustPan"

    const [isPost, setPost] = useState(true);

    return (
        <View style={{ backgroundColor: '#fff' }}>
            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', padding: 12, marginTop: 16 }}>
                <TouchableOpacity>
                    <Rtext color='#2E8AF6' fontWeight='bold'>Discard</Rtext>
                </TouchableOpacity>

                <Rtext color='#000000' fontWeight='bold' style={{ letterSpacing: 1 }}>CREATE</Rtext>

                <TouchableOpacity style={{ backgroundColor: '#1E56E1', paddingHorizontal: 12, paddingVertical: 3, borderRadius: 16 }}>
                    <Rtext color='#fff' fontWeight='bold'>Publish</Rtext>
                </TouchableOpacity>
            </View>

            <ImageBackground
                imageStyle={{ width: '100%', height: SCREEN_HEIGHT, padding: 16, opacity: 0.3 }}
                source={require('../../assets/images/post_bg.png')}>

                <View style={{ flexDirection: "row", alignItems: 'center', paddingTop: 12, paddingHorizontal: 12 }}>

                    <Image source={require("../../assets/images/avatar1.png")} style={{ height: 32, width: 32, resizeMode: 'contain', marginRight: 8 }} />

                    {/* <Rtext color='#727477'>What’s on your mind?</Rtext> */}
                    <TextInput placeholder='What’s on your mind?' placeholderTextColor={'#727477'} style={{ fontFamily: 'Montserrat-Regular', fontSize: normalizeSize(15), width: SCREEN_WIDTH - 60 }} />
                </View>


                <View style={{ flexDirection: "row", alignItems: 'center', paddingHorizontal: 6 }}>
                    <TouchableOpacity>
                        <Image source={require("../../assets/icons/close.png")} style={{ height: 30, width: 30, resizeMode: 'contain', margin: 8 }} />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#323436', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 16, justifyContent: 'space-between' }}>
                        <TouchableOpacity>
                            <Image source={require("../../assets/icons/gellery.png")} style={{ height: 14, width: 16, resizeMode: 'contain', marginRight: 12 }} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={require("../../assets/icons/gif.png")} style={{ height: 18, width: 20, resizeMode: 'contain', marginRight: 12 }} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={require("../../assets/icons/cam.png")} style={{ height: 18, width: 20, resizeMode: 'contain', marginRight: 12 }} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={require("../../assets/icons/attachment.png")} style={{ height: 16, width: 20, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#181A1C', borderRadius: 24, paddingHorizontal: 6, paddingVertical: 6, width: SCREEN_WIDTH / 2.5, alignSelf: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: isPost ? '#1E56E1' : '#181A1C', borderRadius: 24, paddingHorizontal: 10, paddingVertical: 2 }} onPress={() => setPost(true)}>
                        <Rtext fontWeight={isPost ? 'bold' : 'normal'} color='#fff' style={{ letterSpacing: 1 }} fontSize={12}>POST</Rtext>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: !isPost ? '#1E56E1' : '#181A1C', borderRadius: 24, paddingHorizontal: 10, paddingVertical: 2 }} onPress={() => setPost(false)}>
                        <Rtext fontWeight={!isPost ? 'bold' : 'normal'} color='#fff' style={{ letterSpacing: 1 }} fontSize={12}>STORY</Rtext>
                    </TouchableOpacity>
                </View> */}

            </ImageBackground>


            <View style={{ height: '60%', justifyContent: 'flex-end' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#181A1C', borderRadius: 24, paddingHorizontal: 6, paddingVertical: 6, width: SCREEN_WIDTH / 2.5, alignSelf: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: isPost ? '#1E56E1' : '#181A1C', borderRadius: 24, paddingHorizontal: 10, paddingVertical: 2 }} onPress={() => setPost(true)}>
                        <Rtext fontWeight={isPost ? 'bold' : 'normal'} color='#fff' style={{ letterSpacing: 1 }} fontSize={12}>POST</Rtext>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: !isPost ? '#1E56E1' : '#181A1C', borderRadius: 24, paddingHorizontal: 10, paddingVertical: 2 }} onPress={() => setPost(false)}>
                        <Rtext fontWeight={!isPost ? 'bold' : 'normal'} color='#fff' style={{ letterSpacing: 1 }} fontSize={12}>STORY</Rtext>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CreatePost

const styles = StyleSheet.create({})