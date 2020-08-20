import {StyleSheet} from "react-native";
import {Width} from "../../../helpers/Normalizer";

export const filterStyle = StyleSheet.create({
    block: {
        width: Width * 0.9,
        alignSelf: 'center',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    inputField: {
        width: '87%',
        paddingLeft: 20,
        paddingRight: 10,
        fontFamily: 'Manrope-Medium',
    },
    filterIcon: {
        alignSelf: 'flex-end',
    },
});
