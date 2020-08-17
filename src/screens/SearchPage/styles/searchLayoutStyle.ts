import {StyleSheet} from "react-native";
import {Height, Width} from "../../../helpers/Normalizer";

export const searchLayoutStyle = StyleSheet.create({
    block: {
        position: 'absolute',
        width: Width,
        height: Height,
        backgroundColor: '#fafafa',
        zIndex: 99,
        padding: 20,

    },
    container: {
        paddingTop: 20,

    },
    resultBlock: {
        borderTopColor: 'rgba(39,39,39,0.2)',
        borderTopWidth: 1,
    },
    resultItem: {
        padding: 15,
        paddingLeft: 0,
        borderBottomColor: 'rgba(39,39,39,0.2)',
        borderBottomWidth: 1,
        fontFamily: 'Manrope-Medium',
    },
});
