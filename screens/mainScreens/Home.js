import React from 'react'
import { StyleSheet, ScrollView, View, ImageBackground, Image, TouchableOpacity, TextInput, FlatList, Text, Alert } from 'react-native'
import { PostList, SCREEN_WIDTH, Story } from '../../utility'
import { Rtext } from '../../components/Rtext';
import { StoryContainer } from 'react-native-stories-view';

const Home = (props) => {

    const [showStory, setShowStory] = React.useState(false);

    return (
        <View style={{ flex: 1 }}>
            {/* <Image source={require('../../assets/images/home_back.png')} style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                position: 'absolute',
                opacity: 0.3
            }} /> */}



            {
                showStory ?
                    <StoryContainer
                        visible={true}
                        enableProgress={true}
                        images={["https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk", "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk", "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"]}
                        duration={20}
                        onComplete={() => setShowStory(false)}
                        barStyle={{
                            ...props,
                            barHeight: 3
                        }}
                        userProfile={{
                            userImage: require("../../assets/images/story1.png"),
                            userName: 'Alexa Tereza',
                            userMessage: 'Work hard & success will follow !!',
                            imageArrow: require("../../assets/icons/back.png"),
                            onImageClick: () => {
                                setShowStory(false)
                            },
                        }}
                    // replyView={{
                    //     isShowReply: true,
                    //     onReplyTextChange: (textReply, progressIndex) => {
                    //         console.log(`Text : ${textReply} , position : ${progressIndex}`);
                    //     },
                    //     onReplyButtonClick: (buttonType, progressIndex) => {
                    //         switch (buttonType) {
                    //             case 'send':
                    //                 console.log(`Send button tapped for position : ${progressIndex}`);
                    //                 break;

                    //             case 'smiley':
                    //                 console.log(`Smiley button tapped for position : ${progressIndex}`);
                    //                 break;
                    //         }
                    //     },
                    // }}
                    /> : null
            }

            <ScrollView style={{ width: '100%', height: "100%" }}>
                <ImageBackground
                    imageStyle={{ width: '100%', height: "100%", opacity: 0.3 }}
                    source={require('../../assets/images/home_back.png')}>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 24, width: '100%', justifyContent: 'space-between' }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#EFEFEF', borderRadius: 16, width: '70%', height: 42, elevation: 6 }}>
                                <Image source={require("../../assets/icons/amorist_icon.png")} style={{ width: 24, height: 24, resizeMode: 'contain', marginLeft: 12 }} />
                                <TextInput placeholder='amorist' style={{ width: SCREEN_WIDTH / 2, fontFamily: 'Montserrat-Regular' }} />
                            </View>

                            {/* <TouchableOpacity style={{ width: '100%', marginHorizontal: 16 }} onPress={() => props.navigation.navigate("Profile", { "IsEdit": true })}> */}
                            <TouchableOpacity style={{ width: '100%', marginHorizontal: 16 }} onPress={() => props.navigation?.openDrawer()}>
                                <Image source={require("../../assets/images/avatar1.png")} style={{ height: 80, width: 50, resizeMode: 'contain' }} />
                            </TouchableOpacity>

                        </View>

                        <FlatList
                            style={{ marginLeft: 16 }}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            data={Story}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity style={{ margin: 6 }} key={index.toString()} onPress={() => setShowStory(true)}>
                                        <Image source={item} style={{ height: 50, width: 50, resizeMode: 'contain' }} />
                                    </TouchableOpacity>
                                )
                            }}
                        />

                        {
                            PostList.map((item, index1) => {
                                console.log("img1", item)
                                return (
                                    <View key={index1.toString()} style={{ padding: 16 }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 6 }}>
                                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => props.navigation.navigate("Profile", { "IsEdit": false, "UserImage": item.userImage, "UserName": item.userName })}>
                                                <Image source={item.userImage} style={{ height: 36, width: 36, resizeMode: 'contain' }} />
                                                <View style={{ paddingLeft: 6 }}>
                                                    <Rtext fontWeight='bold'>{item.userName}</Rtext>
                                                    <Rtext fontSize={12}>{item.postTime}</Rtext>
                                                </View>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={{ padding: 6 }}>
                                                <Image source={require("../../assets/icons/dot.png")} style={{ height: 16, width: 16, resizeMode: 'contain' }} />
                                            </TouchableOpacity>

                                        </View>

                                        <View style={{ alignItems: 'center', paddingVertical: 12 }}>

                                            {item.postContentText != "" && <Rtext style={{ lineHeight: 24 }}>{item.postContentText}</Rtext>}

                                            {
                                                <FlatList
                                                    data={item.postContentImages}
                                                    horizontal
                                                    showsHorizontalScrollIndicator={false}
                                                    keyExtractor={(img, pos) => pos.toString()}
                                                    showsVerticalScrollIndicator={false}
                                                    renderItem={({ img, pos }) => {
                                                        return (
                                                            <TouchableOpacity style={{ flex: 1, marginHorizontal: 6, width: "100%" }} onPress={() => props.navigation.navigate("FullImageShow", { "image": require("../../assets/images/post1.png") })}>
                                                                <Image source={require("../../assets/images/post1.png")} style={{ height: 180, width: SCREEN_WIDTH - 36, resizeMode: 'contain' }} />
                                                            </TouchableOpacity>
                                                        )
                                                    }} />
                                            }

                                        </View>

                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Image source={require("../../assets/icons/like.png")} style={{ height: 16, width: 16, resizeMode: 'contain', marginHorizontal: 12 }} />
                                                    <Rtext color='#6F6F6F' fontSize={12}>{item.postLikes}</Rtext>
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Image source={require("../../assets/icons/comment.png")} style={{ height: 16, width: 16, resizeMode: 'contain', marginHorizontal: 12 }} />
                                                    <Rtext color='#6F6F6F' fontSize={12}>{item.postComments}</Rtext>
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Image source={require("../../assets/icons/share.png")} style={{ height: 16, width: 16, resizeMode: 'contain', marginHorizontal: 12 }} />
                                                    <Rtext color='#6F6F6F' fontSize={12}>{item.postShares}</Rtext>
                                                </TouchableOpacity>
                                            </View>

                                            <TouchableOpacity>
                                                <Image source={require("../../assets/icons/wishlist.png")} style={{ height: 16, width: 16, resizeMode: 'contain', marginHorizontal: 12 }} />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{ backgroundColor: '#DDDCE3', height: 3, marginTop: 16 }} />
                                    </View>
                                )
                            })
                        }
                    </View>
                </ImageBackground>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})