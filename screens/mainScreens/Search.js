import { StyleSheet, TouchableOpacity, View, Image, FlatList, ScrollView, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import { PostList, PostListSearch, SCREEN_WIDTH } from '../../utility'
import { Rtext } from '../../components/Rtext'

const Search = (props) => {

  const SearchTags = [
    {
      name: 'All',
      isSelected: true
    },
    {
      name: 'Profiles',
      isSelected: false
    },
    {
      name: 'Photos',
      isSelected: false
    },
    {
      name: 'Videos',
      isSelected: false
    },
    {
      name: 'Text',
      isSelected: false
    },
    {
      name: 'Links',
      isSelected: false
    }
  ];


  const handleData = (index) => {
    // let data = [...SearchTags];
    // data[index].isSelected = !data[index].isSelected;
    // setTags(data);
  }

  return (
    <View style={{ flex: 1 }}>

      <ScrollView style={{ width: '100%', height: "100%" }}>
        <ImageBackground
          imageStyle={{ width: '100%', height: "100%", opacity: 0.3 }}
          source={require('../../assets/images/home_back.png')}>
          <View>

            <View style={{ margin: 12 }}>
              <View style={{ backgroundColor: '#DDDCE3', borderRadius: 16, marginHorizontal: 16, paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center' }}>
                <TextInput style={{ fontFamily: 'Montserrat-Regular', width: "90%", height: 40, fontSize: 12 }} placeholder='Search for people, posts, tags...' placeholderTextColor="#414141" />

                <Image source={require("../../assets/icons/search.png")} style={{ width: 18, height: 18, resizeMode: 'contain' }} />
              </View>
              <Rtext fontWeight='bold' fontSize={14} style={{ marginHorizontal: 20, marginTop: 24, marginBottom: 16 }}>Popular</Rtext>

              <FlatList
                style={{ marginLeft: 12 }}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={SearchTags}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity style={{
                      paddingHorizontal: 12,
                      paddingVertical: 6,
                      margin: 6, borderRadius: 16, backgroundColor: item.isSelected ? '#2E8AF6' : null,
                      borderWidth: item.isSelected ? 0 : 1,
                      borderColor: "#414141"
                    }} key={index.toString()}
                      onPress={() => props.navigation.navigate("ExploreUsers")}>
                      <Rtext color={item.isSelected ? '#fff' : "#414141"} fontSize={11} fontWeight={item.isSelected ? 'bold' : "normal"}>{item.name}</Rtext>
                    </TouchableOpacity>
                  )
                }}
              />

            </View>

            {
              PostListSearch.map((item, index1) => {
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

                    <TouchableOpacity style={{ flex: 1, marginHorizontal: 6 }} onPress={() => props.navigation.navigate("FullImageShow", { "image": item.postContentImages })}>
                      <Image source={item.postContentImages} style={{ height: 200, width: SCREEN_WIDTH - 32, resizeMode: 'contain' }} />
                    </TouchableOpacity>

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

                    <View style={{ backgroundColor: '#B6B6B6', height: 1, marginTop: 16 }} />
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

export default Search

const styles = StyleSheet.create({})