import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../utility'
import { Rtext } from '../../components/Rtext'

const FullImageShow = (props) => {
    return (
        <View style={{ backgroundColor: '#000', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={props.route.params?.image || require("../../assets/images/post1.png")} style={{ height: 180, width: "100%", resizeMode: 'cover' }} />

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', position: 'absolute', bottom: 3, width: SCREEN_WIDTH - 32 }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require("../../assets/icons/like.png")} style={{ height: 16, width: 16, resizeMode: 'contain', marginHorizontal: 6, tintColor: '#fff' }} />
                    <Rtext color='#fff' fontSize={12}>{12}</Rtext>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require("../../assets/icons/comment.png")} style={{ height: 16, width: 16, resizeMode: 'contain', marginHorizontal: 6, tintColor: '#fff' }} />
                    <Rtext color='#fff' fontSize={12}>{2}</Rtext>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require("../../assets/icons/share.png")} style={{ height: 16, width: 16, resizeMode: 'contain', marginHorizontal: 6, tintColor: '#fff' }} />
                    <Rtext color='#fff' fontSize={12}>{3}</Rtext>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FullImageShow

const styles = StyleSheet.create({})