import {StyleSheet} from "react-native";
import {Height, Width} from "../../../../../helpers/Normalizer";

export const editVideoScreenStyle = StyleSheet.create({
    block: {
        height: Height,
        backgroundColor: '#ffffff',
    },
    topBlock: {
      height: Height * 0.5,
    },
    topBlockBackground: {
        width: Width,
        height: Height * 0.6,
        resizeMode: 'stretch',
        position: "absolute",
    },
    playButton: {
        position: 'absolute',
        top: "40%",
        left: "44%"
    },
    playButtonIcon: {
        height: 50,
        width: 50
    },
    bottomBlock: {
        backgroundColor: '#ffffff',
        zIndex: 99,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingTop: 20,
        height: Height * 0.4
    },
    toggleButton: {
        marginTop: 10
    },
    saveButton: {
        top: 30
    }
})
