import {StyleSheet} from "react-native";

export const blockTabStyle = StyleSheet.create({
    block: {
        marginTop: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tab: {
        padding: 10,
        paddingLeft: 39,
        paddingRight: 39,
        backgroundColor: 'rgba(72, 19, 128, 0.07)',
        borderRadius: 5,
    },
    line: {
        borderRightColor: 'rgba(109,109,109,0.30)',
        borderRightWidth: 0.5,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    outLine: {
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
    },
    tabActive: {},
    tabText: {
        fontSize: 13,
        fontFamily: 'Manrope-Medium',
        color: 'gray',
    },
    tabActiveText: {
        color: '#000000',
    },
});
