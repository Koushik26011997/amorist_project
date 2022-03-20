import React, { useState } from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Rtext } from '../components/Rtext';

const CustomDrawerContent = props => {

  return (
    <View style={{ flex: 1, backgroundColor: "#f1f1f1", padding: 24 }}>
      <TouchableOpacity onPress={() => props.navigation.navigate("Chat")}>
        <Rtext fontWeight='bold'>Message</Rtext>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({

});
