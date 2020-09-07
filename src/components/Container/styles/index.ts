import {StyleSheet} from "react-native";
import {Width} from "../../../helpers/Normalizer";

export const containerStyle = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    shadowContent: {
        position: 'absolute',
        top: -50,
        left: -50,
        height: 150,
        width: Width+50,
        resizeMode: 'stretch',
    },
    shadowTop: {

    }
});
