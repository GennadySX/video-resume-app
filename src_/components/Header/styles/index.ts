import {StyleSheet} from "react-native";

export const headerStyle = StyleSheet.create({
    block: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    backImg: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Manrope-Bold',
    }
});
