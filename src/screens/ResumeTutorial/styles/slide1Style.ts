import {StyleSheet} from "react-native";

export const slide1Style = StyleSheet.create({
    block: {
        padding: 20,
    },
    text: {
        fontSize: 14,
        fontFamily: 'Manrope-Medium',
        marginBottom: 50
    },
    img: {
        alignSelf: 'center',
        width: 320,
        justifyContent: 'center',
        resizeMode: 'contain',
    },
    btnSkip: {
        padding: 10,
        alignSelf: 'flex-end',
        position: 'relative',
    },
    btnSkipText: {
        color: 'gray',
        fontSize: 16,
    },
});
