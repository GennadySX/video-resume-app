import {StyleSheet} from "react-native";
import {Width} from "../../../helpers/Normalizer";

export const slide3Style = StyleSheet.create({
    block: {
        padding: 25,
    },
    title: {
        left: 0,
        marginTop: 25,
        position: 'relative',
        top: 25
    },
    text: {
        fontSize: 14,
        fontFamily: 'Manrope-Medium',
        position: 'relative',
        top: 15,
    },
    img: {
        width: 300,
        justifyContent: 'center',
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    btnSkip: {
        alignSelf: 'flex-end',
        position: 'relative',
        top: 10,
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
