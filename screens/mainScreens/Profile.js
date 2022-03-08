import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity, useWindowDimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utility'
import { Rtext } from '../../components/Rtext'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import TabbedViewPager from 'react-native-tabbed-view-pager-android';
import Followers from './Followers';
import Points from './Points';
import Post from './Post';
import Home from './Home';
import ProfilePosts from './ProfilePosts';
import ProfileStories from './ProfileStories';
import ProfileAppreciations from './ProfileAppreciations';
import ProfileLiked from './ProfileLiked';

const Profile = (props) => {

    const [pos, setPos] = useState(0);
    const TAB_ARR = ["Posts", "Stories", "Saved", "Appreciations"];

    const PostRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#ff4081' }}>
            <Rtext>PostRoute</Rtext>
        </View>
    );

    const StoriesRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#673ab7' }}>
            <Rtext>StoriesRoute</Rtext>
        </View>
    );

    const SavedRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#673ab7' }}>
            <Rtext>SavedRoute</Rtext>
        </View>
    );

    const AppreciationsRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#673ab7' }}>
            <Rtext>AppreciationsRoute</Rtext>
        </View>
    );

    const renderScene = SceneMap({
        first: PostRoute,
        second: StoriesRoute,
        third: SavedRoute,
        fourth: AppreciationsRoute
    });

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Posts' },
        { key: 'second', title: 'Stories' },
        { key: 'third', title: 'Saved' },
        { key: 'fourth', title: 'Appreciations' },
    ]);

    const renderTabBar = props => (
        <TabBar
            {...props}
            scrollEnabled
            tabStyle={{ width: SCREEN_WIDTH / 4 }}
            indicatorStyle={{ backgroundColor: '#2E8AF7', marginHorizontal: 6, borderRadius: 3, height: 3 }}
            style={{ backgroundColor: '#fff' }}
            labelStyle={{ color: '#000', fontFamily: 'MontserratRegular', fontSize: 12, textTransform: 'capitalize' }} />
    );

    const handleSwitchCases = (pos) => {
        switch (pos) {
            case 0:
                return <ProfilePosts {...props} />;

            case 1:
                return <ProfileStories props={props} />;

            case 2:
                return <ProfileLiked props={props} />;

            case 3:
                return <ProfileAppreciations props={props} />;
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView>

                <ImageBackground source={require("../../assets/images/profile_back.png")} imageStyle={{ height: SCREEN_HEIGHT / 4, width: SCREEN_WIDTH, resizeMode: 'contain' }}>

                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 124, width: 124, borderRadius: 64,
                        borderWidth: 12, borderColor: '#2E8AF7',
                        alignSelf: 'center',
                        marginTop: 64
                    }}>
                        <Image source={require("../../assets/images/profile_pic.png")} style={{ height: 120, width: 120, borderRadius: 60, borderWidth: 4, borderColor: '#1A171B' }} />

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', position: 'absolute', width: '96%', alignSelf: 'center', bottom: 8 }}>
                        <TouchableOpacity style={{
                            paddingHorizontal: 16, borderWidth: 1, borderColor: '#1A171B',
                            borderRadius: 24, paddingVertical: 6, alignItems: 'center', justifyContent: 'center',
                            width: 100
                        }}>
                            <Rtext fontSize={13}>2.7 points</Rtext>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            paddingHorizontal: 16, borderWidth: 1, borderColor: '#1A171B',
                            borderRadius: 24, paddingVertical: 6, alignItems: 'center', justifyContent: 'center',
                            width: 100
                        }}>
                            <Rtext fontSize={13} fontWeight='bold'>Support</Rtext>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>


                <View style={{ alignItems: 'center', padding: 12, marginTop: 8 }}>
                    <Rtext style={{ marginTop: 6 }} fontSize={15}>Alex Tsimikas</Rtext>
                    <Rtext style={{ marginTop: 6 }} fontSize={13}>Brooklyn, NY</Rtext>
                    <Rtext style={{ marginTop: 6 }}>Writer by Profession. Artist by Passion!</Rtext>
                </View>

                <View style={{ alignItems: 'center', padding: 12, margin: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Rtext fontWeight='bold'>2,467</Rtext>
                        <Rtext fontWeight='bold'>Followers</Rtext>
                    </View>

                    <View>
                        <Rtext fontWeight='bold'>1,589</Rtext>
                        <Rtext fontWeight='bold'>Following</Rtext>
                    </View>

                    <View>
                        <Rtext fontWeight='bold'>120</Rtext>
                        <Rtext fontWeight='bold'>Supports</Rtext>
                    </View>
                </View>

                {/* 
                <TabView
                    lazy
                    renderTabBar={renderTabBar}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width, height: layout.height }}
                /> 

                <TabbedViewPager
                    tabMode={"scrollable"}
                    tabGravity={"center"}
                    tabBackground={"#008B7D"}
                    tabIndicatorColor={"#FFB90B"}
                    tabIndicatorHeight={4}
                    tabTextColor={"#ffffffa0"}
                    tabSelectedTextColor={"#ffffff"}
                    tabElevation={4}
                    tabNames={["First", "Second", "Third"]}
                    style={styles.viewPager}
                    initialPage={0}
                    onPageSelected={(event) => this.onPageSelected(event.nativeEvent.position)}
                    onPageScrollStateChanged={(state) => this.onPageScrollStateChanged(state)}
                    onPageScroll={(event) => this.onPageScroll(event.nativeEvent)}>
                    {
                        ["First", "Second", "Third"].map((tabName) => {
                            return (
                                <View style={styles.pageStyle} key={tabName}>
                                    <Text>{tabName}</Text>
                                </View>
                            )
                        })
                    }
                </TabbedViewPager>
                <View style={{ backgroundColor: '#000', height: 1, marginHorizontal: 6 }} />*/}

                {/* <View style={{ flexDirection: 'row', alignItems: 'center', padding: 12, width: SCREEN_WIDTH }}>
                    <TouchableOpacity style={{ width: SCREEN_WIDTH / 4, borderBottomColor: po }}>
                        <Rtext numberOfLines={1}>Posts</Rtext>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: SCREEN_WIDTH / 4 }}>
                        <Rtext numberOfLines={1}>Stories</Rtext>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: SCREEN_WIDTH / 4 }}>
                        <Rtext numberOfLines={1}>Saved</Rtext>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: SCREEN_WIDTH / 4 }}>
                        <Rtext numberOfLines={1}>Appreciations</Rtext>
                    </TouchableOpacity>
                </View> */}

                <FlatList
                    horizontal
                    data={TAB_ARR}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={{
                                width: SCREEN_WIDTH / 4, borderBottomColor: index === pos ? '#2E8AF7' : '',
                                borderBottomWidth: index === pos ? 4 : 0, borderRadius: 3, alignItems: 'center',
                                justifyContent: 'center', marginHorizontal: 6, marginTop: 6, paddingBottom: 12
                            }}
                                onPress={() => setPos(index)}>
                                <Rtext numberOfLines={1} fontWeight={index === pos ? 'bold' : 'normal'}>{item}</Rtext>
                            </TouchableOpacity>
                        )
                    }} />
                <View style={{ backgroundColor: '#000', height: 1, marginHorizontal: 8 }} />

                <View style={{ marginVertical: 12 }}>
                    {handleSwitchCases(pos)}
                </View>

            </ScrollView>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})