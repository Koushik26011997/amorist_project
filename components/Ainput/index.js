import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { normalizeSize, SCREEN_WIDTH } from '../../utility';

const Ainput = ({
  autoFocus = false,
  value = '',
  onChangeText = () => { },
  multiline = false,
  onBlur = () => { },
  placeholder = '',
  numberOfLines = 1,
  secureTextEntry = false,
  border = '#76A8C8',
  style = {},
  view = false,
  type = 'default',
  editable = true,
  maxLength = 250
}) => {
  const [lcSecureTextEntry, setLcSecureTextEntry] = useState(view ? true : secureTextEntry);

  if (type == 'hidden') return <></>;
  return (
    <View style={[styles.containerStyle]}>
      <TextInput
        autoFocus={autoFocus}
        value={value}
        onChangeText={onChangeText}
        // style={[
        //   styles.inputStyle,
        //   style,
        //   {
        //     // borderColor: border,
        //     color: "red",
        //     paddingRight: view ? 20 : 16,
        //     fontFamily: 'Montserrat-Regular',
        //     paddingLeft: 16,
        //   },
        // ]}
        style={[style, { paddingRight: view ? 20 : 16 }]}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor={"#A1A4B2"}
        onBlur={onBlur}
        multiline={multiline}
        numberOfLines={numberOfLines}
        secureTextEntry={lcSecureTextEntry}
        keyboardType={type}
        editable={editable}
        maxLength={maxLength}
      />
      {view ? (
        <TouchableOpacity
          style={styles.searchIcon}
          onPress={() => setLcSecureTextEntry(!lcSecureTextEntry)}>
          {lcSecureTextEntry ? (
            <Ionicons name="ios-eye" color={"#296EFF"} size={24} />
          ) : (
            <Ionicons name="ios-eye-off" color={"#296EFF"} size={24} />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    width: SCREEN_WIDTH - 64,
    flexDirection: 'column',
    alignSelf: 'center'
  },
  inputStyle: {
    width: SCREEN_WIDTH - 32,
    marginHorizontal: 16,
    padding: 8,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: normalizeSize(13),
    borderRadius: 8,
    // borderWidth: 1,
    // borderColor: "#000",
  },
  searchIcon: {
    position: 'absolute',
    right: 20,
    top: 32,
  },
});

export { Ainput };
