import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { Rtext } from '../../components/Rtext';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utility';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;

const OTP = ({ navigation }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <View style={{ flex: 1 }}>

            <Image
                style={styles.backgroundImg}
                source={require('../../assets/images/login_back.png')} />

            <TouchableOpacity onPress={() => navigation.goBack()} style={{ margin: 12 }}>
                <Image source={require("../../assets/icons/back_btn.png")} style={{ width: 64, height: 64, resizeMode: 'cover' }} />
            </TouchableOpacity>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 32 }}>
                <Rtext fontWeight="bold" color='#fff' fontSize={22}>Enter the OTP</Rtext>
                <Rtext color='#fff' style={{ width: "60%", margin: 12, textAlign: 'center' }}>Enter the code you have recieved on your phone</Rtext>

                <CodeField
                    ref={ref}
                    {...props}
                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[index === 3 ? styles.cell1 : styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />

                <TouchableOpacity style={{ backgroundColor: '#296EFF', padding: 20, borderRadius: 32, width: SCREEN_WIDTH - 64, alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate("Language")}>
                    <Rtext color='#fff'>CONTINUE</Rtext>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default OTP

const styles = StyleSheet.create({
    backgroundImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    root: { flex: 1, padding: 20, },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { margin: 32, backgroundColor: '#fff', borderRadius: 12, padding: 8, width: SCREEN_WIDTH - 64 },
    cell: {
        width: (SCREEN_WIDTH - 64) / 4,
        height: 40,
        lineHeight: 42,
        fontSize: 16,
        borderRightWidth: 0.3,
        borderRightColor: '#000',
        textAlign: 'center',
        fontFamily: 'MontserratRegular',
        color: '#3F414E'
    },

    cell1: {
        width: (SCREEN_WIDTH - 64) / 4,
        height: 40,
        lineHeight: 42,
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'MontserratRegular',
        color: '#3F414E'
    },

    focusCell: {
        borderColor: '#fff',
    }
});