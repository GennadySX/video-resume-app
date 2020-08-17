import {StyleSheet} from "react-native";
import {Width} from "../../../helpers/Normalizer";

export const tabBarStyle = StyleSheet.create({
    container: {
        width: Width,
        backgroundColor: '#F8F2FF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingTop: 15,
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
        fontFamily: 'Manrope-Medium'
    },
    titleActive: {
        color: '#481380',
    },
});
