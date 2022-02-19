import React, { useState } from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Rtext } from '../components/Rtext';

const CustomDrawerContent = props => {

  return (
    <View style={{ flex: 1, backgroundColor: "#f1f1f1" }}>
      <Rtext>Drawer</Rtext>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({

});
