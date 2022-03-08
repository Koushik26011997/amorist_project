import { StyleSheet, Image, View, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Rtext } from '../../components/Rtext';
import { PostStories } from '../../utility';

const ProfileStories = () => {
    return (
        <View>
            {
                PostStories.map((item, index) => {
                    return (
                        <View key={index.toString()} style={{ margin: 12 }}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                horizontal
                                data={item.content}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity style={{ paddingHorizontal: 8, flexDirection: 'row', alignItems: 'center' }}>
                                            <Image source={item.image} style={{ height: 140, width: 100, resizeMode: 'contain' }} />
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                    )
                })
            }
        </View>
    )
}

export default ProfileStories

const styles = StyleSheet.create({})