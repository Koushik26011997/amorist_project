import React, { useState } from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, View, FlatList, Image, TouchableOpacity, Linking } from 'react-native';
import { Rtext } from '../components/Rtext';

const CustomDrawerContent = props => {

  return (
    // <View style={{ flex: 1, backgroundColor: "#f1f1f1", padding: 24, ...props }}>
    //   <TouchableOpacity onPress={() => props.navigation.navigate("Chat")}>
    //     <Rtext fontWeight='bold'>Message</Rtext>
    //   </TouchableOpacity>
    // </View>

    <DrawerContentScrollView {...props} style={{flex:1 }}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="Message"
        onPress={() => props.navigation.navigate("Chat")}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({

});
