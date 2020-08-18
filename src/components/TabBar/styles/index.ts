import {StyleSheet} from "react-native";
import {Height, Width} from "../../../helpers/Normalizer";

export const tabBarStyle = StyleSheet.create({
    block: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    container: {
        minHeight: Height - 90,
        maxHeight: Height - 90
    },
    tabContainer: {
        width: '100%',
        padding: 10,
        paddingTop: 15,
        backgroundColor: '#F8F2FF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 0,
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
});
