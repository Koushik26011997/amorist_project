import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react'
import { SCREEN_WIDTH } from '../../utility'
import { Rtext } from '../../components/Rtext'
import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetFlatList
} from '@gorhom/bottom-sheet';

const FullImageShow = (props) => {
    // hooks
    const bottomSheetModalRef = useRef();

    // variables
    const data = useMemo(
        () =>
            Array(20)
                .fill(0)
                .map((_, index) => `index-${index}`),
        []
    );
    const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

    // callbacks
    const handleSheetChange = useCallback((index) => {
        console.log("handleSheetChange", index);
    }, []);
    // const handleSnapPress = useCallback((index) => {
    //     sheetRef.current?.snapToIndex(index);
    // }, []);
    // const handleClosePress = useCallback(() => {
    //     sheetRef.current?.close();
    // }, []);

    // render
    const renderItem = useCallback(
        ({ item }) => (
            <View style={styles.itemContainer}>
                <Rtext>{"Awesome pictures!!!"}</Rtext>
            </View>
        ),
        []
    );

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleCloseModalPress = useCallback(() => {
        console.log("KK", bottomSheetModalRef.current);
        bottomSheetModalRef.current?.dismiss();
    }, []);

    return (
        <BottomSheetModalProvider>
            <View style={{ backgroundColor: '#000', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={props.route.params?.image || require("../../assets/images/post1.png")} style={{ height: 180, width: "100%", resizeMode: 'cover' }} />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', position: 'absolute', bottom: 3, width: SCREEN_WIDTH - 32 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require("../../assets/icons/like.png")} style={{ height: 16, width: 16, resizeMode: 'contain', marginHorizontal: 6, tintColor: '#fff' }} />
                        <Rtext color='#fff' fontSize={12}>{12}</Rtext>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => handlePresentModalPress()}>
                        <Image source={require("../../assets/icons/comment.png")} style={{ height: 16, width: 16, resizeMode: 'contain', marginHorizontal: 6, tintColor: '#fff' }} />
                        <Rtext color='#fff' fontSize={12}>{20}</Rtext>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require("../../assets/icons/share.png")} style={{ height: 16, width: 16, resizeMode: 'contain', marginHorizontal: 6, tintColor: '#fff' }} />
                        <Rtext color='#fff' fontSize={12}>{3}</Rtext>
                    </TouchableOpacity>
                </View>

                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}
                    onChange={handleSheetChange}>
                    <BottomSheetFlatList
                        data={data}
                        keyExtractor={(i) => i}
                        renderItem={renderItem}
                        contentContainerStyle={styles.contentContainer} />
                </BottomSheetModal>
            </View>
        </BottomSheetModalProvider>
    )
}

export default FullImageShow

const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: "white",
        padding: 6
    },
    itemContainer: {
        padding: 6,
        margin: 6,
        backgroundColor: "#eeee",
        borderTopStartRadius: 12,
        borderBottomEndRadius: 12
    },
})