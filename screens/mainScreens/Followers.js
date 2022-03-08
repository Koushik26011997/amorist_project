import { StyleSheet, FlatList, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Rtext } from '../../components/Rtext'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utility'

const Followers = () => {

  const [data, setData] = useState([
    {
      name: 'Alex Tsimikas',
      isFollowing: false
    },
    {
      name: 'Alex Tsimikas',
      isFollowing: true
    },
    {
      name: 'Alex Tsimikas',
      isFollowing: true
    },
    {
      name: 'Alex Tsimikas',
      isFollowing: true
    },
    {
      name: 'Alex Tsimikas',
      isFollowing: true
    },
    {
      name: 'Alex Tsimikas',
      isFollowing: true
    },
    {
      name: 'Alex Tsimikas',
      isFollowing: true
    },
    {
      name: 'Alex Tsimikas',
      isFollowing: true
    },
    {
      name: 'Alex Tsimikas',
      isFollowing: true
    },
    {
      name: 'Alex Tsimikas',
      isFollowing: true
    },
    {
      name: 'Alex Tsimikas',
      isFollowing: true
    },
    {
      name: 'Alex Tsimikas',
      isFollowing: true
    },
    {
      name: 'Alex Tsimikas',
      isFollowing: true
    },
    {
      name: 'Alex Tsimikas',
      isFollowing: true
    },
    {
      name: 'Alex Tsimikas',
      isFollowing: true
    },
    {
      name: 'Alex Tsimikas',
      isFollowing: true
    }
  ])


  const ItemSeparator = () => {
    return (
      <View style={{ backgroundColor: '#B6B6B6', height: 1 }} />
    );
  };

  const handleData = (index) => {
    let temp = [...data];
    temp[index].isFollowing = !temp[index].isFollowing;
    setData(temp);
  }

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
        <View style={{ padding: 24 }}>
          <Rtext fontWeight='bold' fontSize={15}>Following</Rtext>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item, index }) => {
            return (
              <View style={{ margin: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 12 }}>

                <View style={{ marginHorizontal: 6, flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={require("../../assets/images/avatar13.png")} style={{ height: 36, width: 36, resizeMode: 'contain', marginRight: 6 }} />
                  <Rtext fontWeight='bold' fontSize={13}>{item.name}</Rtext>
                </View>


                {
                  item.isFollowing ?
                    <TouchableOpacity style={{ paddingHorizontal: 16, borderWidth: 1, borderColor: '#1A171B', borderRadius: 24, paddingVertical: 6, alignItems: 'center', justifyContent: 'center' }}
                      onPress={() => handleData(index)}>
                      <Rtext fontSize={13}>Following</Rtext>
                    </TouchableOpacity> :
                    <TouchableOpacity style={{ paddingHorizontal: 16, alignItems: 'center', justifyContent: 'center' }}
                      onPress={() => handleData(index)}
                    >
                      <Rtext color='#591371' fontWeight='bold' fontSize={13}>Remove</Rtext>
                    </TouchableOpacity>
                }
              </View>
            )
          }} />
      </ScrollView>
    </View>
  )
}

export default Followers

const styles = StyleSheet.create({})