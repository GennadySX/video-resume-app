import {StyleSheet} from "react-native";
import {Width} from "../../../../helpers/Normalizer";

export const titleStyle = StyleSheet.create({
    text: {
        fontFamily: 'Manrope-Bold',
        fontWeight: '600',
    },
    titleBlock: {
        position: 'relative',
        // backgroundColor: 'yellow',
        alignSelf: 'flex-start',
        width: Width * 0.7,
        marginBottom: 30,
        paddingLeft: 20
    },
});
