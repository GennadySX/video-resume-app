import {StyleSheet} from "react-native";
import {Width} from "../../../../helpers/Normalizer";

export const radioUIStyle = StyleSheet.create({
    block: {
        justifyContent: 'flex-start',
        width: Width * 0.8,
    },
    input: {
        backgroundColor: 'rgba(72, 19, 128, 0.02)',
        width: '100%',
        fontSize: 15,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10,
        borderRadius: 10,
        borderColor: 'rgba(72, 19, 128, 0.1)',
        borderWidth: 1,
        color: '#000000',
    },
});
