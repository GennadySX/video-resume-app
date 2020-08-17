import {StyleSheet} from "react-native";

export const toggleUIStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 50,
        borderRadius: 50,
        alignItems: 'center',
    },
    roundBounce: {
        width: 30,
        height: 30,
        position: 'relative',
        top: 1,
        resizeMode: 'contain',
    },
});
