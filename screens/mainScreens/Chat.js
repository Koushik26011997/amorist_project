import { StyleSheet, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Avatar, Bubble, Composer, Day, GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat';
import { Rtext } from '../../components/Rtext';

const Chat = (props) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            // {
            //     _id: 1,
            //     text: 'Alex, let’s meet this weekend. I’ll check with Dave too 😎',
            //     createdAt: new Date(),
            //     user: {
            //         _id: 2,
            //         name: 'React Native',
            //         // avatar: 'https://placeimg.com/140/140/any',
            //         avatar: require("../../assets/images/avatar9.png")
            //     },
            // },
            // {
            //     _id: 2,
            //     text: 'Sure. Let’s aim for saturday',
            //     createdAt: new Date(),
            //     user: {
            //         _id: 1,
            //         name: 'React Native',
            //         // avatar: 'https://placeimg.com/140/140/any',
            //         avatar: require("../../assets/images/avatar9.png")
            //     },
            // },
            // {
            //     _id: 2,
            //     text: 'I’m visiting mom this sunday 👻',
            //     createdAt: new Date(),
            //     user: {
            //         _id: 1,
            //         name: 'React Native',
            //         // avatar: 'https://placeimg.com/140/140/any',
            //         avatar: require("../../assets/images/avatar9.png")
            //     },
            // },
            // {
            //     _id: 1,
            //     text: 'Alrighty! Will give you a call shortly 🤗',
            //     createdAt: new Date(),
            //     user: {
            //         _id: 2,
            //         name: 'React Native',
            //         // avatar: 'https://placeimg.com/140/140/any',
            //         avatar: require("../../assets/images/avatar9.png")
            //     },
            // },
            // {
            //     _id: 2,
            //     text: '❤️',
            //     createdAt: new Date(),
            //     user: {
            //         _id: 1,
            //         name: 'React Native',
            //         // avatar: 'https://placeimg.com/140/140/any',
            //         avatar: require("../../assets/images/avatar9.png")
            //     },
            // },
            // {
            //     _id: 1,
            //     text: 'Hey you! Are you there?',
            //     createdAt: new Date(),
            //     user: {
            //         _id: 2,
            //         name: 'React Native',
            //         // avatar: 'https://placeimg.com/140/140/any',
            //         avatar: require("../../assets/images/avatar9.png")
            //     },
            // },
            // {
            //     _id: 2,
            //     text: '👋 Hi Jess! What’s up?',
            //     createdAt: new Date(),
            //     user: {
            //         _id: 1,
            //         name: 'React Native',
            //         // avatar: 'https://placeimg.com/140/140/any',
            //         avatar: require("../../assets/images/avatar9.png")
            //     },
            // },

            //
            {
                _id: 2,
                text: '👋 Hi Jess! What’s up?',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    // avatar: 'https://placeimg.com/140/140/any',
                    avatar: require("../../assets/images/avatar9.png")
                },
            },
            {
                _id: 1,
                text: 'Hey you! Are you there?',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    // avatar: 'https://placeimg.com/140/140/any',
                    avatar: require("../../assets/images/avatar9.png")
                },
            },
            {
                _id: 2,
                text: '❤️',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    // avatar: 'https://placeimg.com/140/140/any',
                    avatar: require("../../assets/images/avatar9.png")
                },
            },
            {
                _id: 1,
                text: 'Alrighty! Will give you a call shortly 🤗',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    // avatar: 'https://placeimg.com/140/140/any',
                    avatar: require("../../assets/images/avatar9.png")
                },
            },

            {
                _id: 2,
                text: 'I’m visiting mom this sunday 👻',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    // avatar: 'https://placeimg.com/140/140/any',
                    avatar: require("../../assets/images/avatar9.png")
                },
            },
            {
                _id: 2,
                text: 'Sure. Let’s aim for saturday',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    // avatar: 'https://placeimg.com/140/140/any',
                    avatar: require("../../assets/images/avatar9.png")
                },
            },
            {
                _id: 1,
                text: 'Alex, let’s meet this weekend. I’ll check with Dave too 😎',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    // avatar: 'https://placeimg.com/140/140/any',
                    avatar: require("../../assets/images/avatar9.png")
                },
            },
        ])
    }, []);

    const renderSend = (props) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity>
                    <Image source={require('../../assets/icons/add.png')} resizeMode='contain' style={{ height: 16, width: 16, marginRight: 8 }} />
                </TouchableOpacity>
                <Send {...props} textStyle={{ fontFamily: 'Montserrat-Regular' }}>
                    <Image source={require('../../assets/icons/send.png')} resizeMode={'center'} style={{ height: 28, width: 28, marginRight: 10, marginBottom: 8 }} />
                </Send>
            </View>
        );
    }

    const renderBubble = (props) => {
        return (
            <Bubble {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#1E56E1',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 6,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        marginBottom: 16
                    },
                    left: {
                        backgroundColor: '#323436',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 6,
                        marginBottom: 16
                    }
                }}

                textStyle={{
                    left: {
                        fontFamily: 'Montserrat-Regular',
                        color: '#fff',
                        fontSize: 13
                    },
                    right: {
                        fontFamily: 'Montserrat-Regular',
                        color: '#fff', fontSize: 13
                    }
                }}


            >

            </Bubble>
        )
    }

    const renderAvatar = (props) => {
        return (<Avatar {...props} imageStyle={{
            left: {
                height: 24, width: 24
            }
        }}>

        </Avatar>)
    }

    const renderInputToolbar = (props) => {
        return (<InputToolbar {...props} containerStyle={{ backgroundColor: '#1E56E1' }}>
        </InputToolbar>)
    }

    const renderComposer = (props) => {
        return (
            <Composer {...props} textInputStyle={{ fontFamily: 'Montserrat-Regular', fontSize: 13, backgroundColor: '#fff' }}>

            </Composer>
        )
    }

    const renderDay = (props) => {
        return (
            <Day {...props} dateFormat='MMM DD, YYYY' textStyle={{ fontFamily: 'Montserrat-Regular', color: '#727477', fontSize: 13 }} wrapperStyle={{ paddingVertical: 8 }}>

            </Day>
        )
    }

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Image
                style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    position: 'absolute',
                    opacity: 0.3
                }}
                source={require('../../assets/images/home_back.png')} />

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 12, borderBottomWidth: 2, borderBottomColor: '#B6B6B6' }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image source={require("../../assets/icons/black_btn.png")} style={{ width: 46, height: 46, resizeMode: 'contain' }} />
                </TouchableOpacity>

                <View style={{ alignItems: 'center' }}>
                    <Image source={require("../../assets/images/avatar9.png")} style={{ width: 38, height: 38, resizeMode: 'contain' }} />
                    <Rtext color='#000000'>Jessica Thompson</Rtext>
                </View>

                {/* <TouchableOpacity onPress={() => props.navigation.navigate("Points")}> */}
                <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                    <Image source={require("../../assets/icons/settings.png")} style={{ width: 46, height: 46, resizeMode: 'contain' }} />
                </TouchableOpacity>
            </View>

            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{ _id: 1 }}
                renderSend={renderSend}
                alwaysShowSend={true}
                placeholder='Type your message here...'
                renderBubble={renderBubble}
                // renderAvatar={renderAvatar}
                // renderInputToolbar={renderInputToolbar}
                renderComposer={renderComposer}
                renderDay={renderDay}
            />

        </View>
    )
}

export default Chat

const styles = StyleSheet.create({})