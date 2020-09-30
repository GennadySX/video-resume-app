import {StyleSheet} from "react-native";
import {Width} from "../../../helpers/Normalizer";

export const slide3Style = StyleSheet.create({
    block: {
        padding: 25,
    },
    title: {
        left: 0,
        marginTop: 5,
        position: 'relative',
        top: -30,
    },
    text: {
        fontSize: 14,
        fontFamily: 'Manrope-Medium',
        position: 'relative',
        top: -30,
    },
    img: {
        width: Width * 0.8,
        height: Width * 0.7,
        justifyContent: 'center',
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    btnSkip: {
        alignSelf: 'flex-end',
        position: 'relative',
        top: -45,
    },
    btnSkipText: {
        color: 'gray',
        fontSize: 16,
    },
    next: {
        alignSelf: 'flex-end',
        left: Width * 0.379,
        bottom: 22,
    },
});
