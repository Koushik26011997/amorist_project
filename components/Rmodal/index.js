import React from 'react';
import * as Animatable from 'react-native-animatable';
import {
    View,
    StyleSheet,
    Modal,
    ImageBackground
} from 'react-native';
import { ANIMATION_TIME, SCREEN_WIDTH } from '../../utility';

const Rmodal = ({
    visible = false,
    background = 'white',
    modalBackground = 'rgba(17, 17, 17, 0.5)',
    children = {},
    onCancel = () => { },
    cancelable = true,
}) => {
    modalBackground = cancelable === true ? modalBackground : 'rgba(17, 17, 17, 0.75)';

    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                if (cancelable === true) onCancel();
            }}>
            <View style={[styles.centeredView, { backgroundColor: modalBackground }]}>
                <Animatable.View
                    style={[styles.modalView, { backgroundColor: background }]}
                    animation="fadeIn"
                    duration={ANIMATION_TIME}>
                    {/* <ImageBackground
                        imageStyle={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'stretch',
                            borderRadius: 10,
                        }}
                        source={require('../../assets/images/onboarding_1.png')}
                        style={{ width: '100%' }}> */}
                        <View style={{ paddingVertical: 16 }}>{children}</View>
                    {/* </ImageBackground> */}
                </Animatable.View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        borderRadius: 16,
        width: SCREEN_WIDTH - 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export { Rmodal };
