import {StyleSheet} from "react-native";
import {Height, Width} from "../../../helpers/Normalizer";

export const tabBarStyle = StyleSheet.create({
    block: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    container: {
        minHeight: Height - 85,
        maxHeight: Height - 85
    },
    tabContainer: {
        width: '100%',
        height: 85,
        minHeight: 85,
        maxHeight: 90,
        paddingLeft: 10,
        paddingRight: 10,
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
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    title: {
        color: '#868686',
        fontSize: 13,
        fontFamily: 'Manrope-Medium',
        top: 5,
        marginBottom: 20
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
