import {StyleSheet} from "react-native";
import {Width} from "../../../helpers/Normalizer";

export const slide1Style = StyleSheet.create({
    block: {
        padding: 20,
    },
    text: {
        fontSize: 14,
        fontFamily: 'Manrope-Medium',
    },
    img: {
        width: Width * 0.8,
        height: Width * 0.7,
        justifyContent: 'center',
        resizeMode: 'contain',
        marginBottom: 50
    },
    btnSkip: {
        padding: 10,
        alignSelf: 'flex-end',
        position: 'relative',
        top: 20
    },
    btnSkipText: {
        color: 'gray',
        fontSize: 16,
    },
});
