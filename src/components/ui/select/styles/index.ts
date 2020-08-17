import {StyleSheet} from "react-native";
import {Width} from "../../../../helpers/Normalizer";

export const selectPickerStyle = StyleSheet.create({
    block: {
        width: Width * 0.87,
        borderRadius: 10,
        backgroundColor: 'rgba(72, 19, 128, 0.02)',
        borderColor: 'rgba(72, 19, 128, 0.1)',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 5,
    },
    container: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    itemStyle: {
        fontFamily: 'Manrope-Medium',
    },
    selectIcon: {
        position: 'absolute',
        alignSelf: 'flex-end',
        right: 15,
        top: 17,
    },
});
