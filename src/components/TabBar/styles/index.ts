import {StyleSheet} from "react-native";
import {Height, Width} from "../../../helpers/Normalizer";

export const tabBarStyle = StyleSheet.create({
    block: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    container: {
        minHeight: Height - 115,
        maxHeight: Height - 115
    },
    tabContainer: {
        width: '100%',
        height: 115,
        minHeight: 115,
        maxHeight: 115,
        padding: 10,
        paddingTop: 15,
        paddingBottom: 0,
        backgroundColor: '#F8F2FF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 10,
    },
    tab: {
        alignSelf: 'center',
        alignItems: 'center',
    },
    tabIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    title: {
        color: '#868686',
        fontSize: 13,
        fontFamily: 'Manrope-Medium',
        marginBottom: 5
    },
    titleActive: {
        color: '#481380',
    },
    background: {
        position: 'absolute',
        zIndex: -1,
        height: Height,
        width: Width
    }
});
