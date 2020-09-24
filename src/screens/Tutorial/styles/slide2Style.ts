import {StyleSheet} from "react-native";
import {Width} from "../../../helpers/Normalizer";

export const slide2Style = StyleSheet.create({
    block: {
        padding: 20,
    },
    title: {left: 0, marginTop: 25, position: 'relative', top: 10},
    text: {
        fontSize: 13,
        fontFamily: 'Manrope-Medium',
    },
    img: {
        width: 300,
        justifyContent: 'center',
        alignSelf: 'center',
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
