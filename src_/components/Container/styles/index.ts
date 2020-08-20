import {StyleSheet} from "react-native";
import {Width} from "../../../helpers/Normalizer";

export const containerStyle = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    shadowContent: {
        position: 'absolute',
        top: -40,
        height: 150,
        width: Width,
        resizeMode: 'contain',
    }
});
