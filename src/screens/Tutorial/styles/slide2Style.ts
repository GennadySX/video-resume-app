import {StyleSheet} from "react-native";
import {Width} from "../../../helpers/Normalizer";

export const slide2Style = StyleSheet.create({
    block: {
        padding: 20,
    },
    title: {left: 0, marginTop: 25, position: 'relative', top: 0},
    text: {
        fontSize: 13,
        fontFamily: 'Manrope-Medium',
    },
    img: {
        width: Width * 0.8,
        height: Width * 0.7,
        justifyContent: 'center',
        alignSelf: 'center',
        resizeMode: 'contain',
        marginBottom: 70
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
