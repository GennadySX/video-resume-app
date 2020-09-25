import {StyleSheet} from "react-native";
import {Height, Width} from "../../../helpers/Normalizer";
import {styles} from "../../../styles/style";

export const cameraScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    header: {
        position: 'absolute',
        padding: 30,
        top: 0,
        zIndex: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Width,
    },
    headerBack: {
        width: '15%',
    },
    headerBackIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    title: {
        zIndex: 99,
        ...styles.fontMedium,
        color: '#fafafa',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 18,
        width: '60%',
    },
    controlsBlock: {
        position: 'absolute',
        zIndex: 10,
        width: Width,
        padding: 50,
        bottom: 0,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerRightBlock: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        alignSelf: 'center',
        margin: 20,
    },
    btnContainer: {
        borderTopColor: 'rgba(39,39,39,0.61)',
        borderTopWidth: 1,
    },
    timerBtn: {
        padding: 15,
        borderBottomColor: 'rgba(39,39,39,0.61)',
        borderBottomWidth: 1,
        paddingLeft: 20,
    },
    timerBtnTitle: {
        ...styles.fontMedium,
    },
    timerTitle: {
        ...styles.fontMedium,
        position: 'absolute',
        top: Height * 0.35,
        alignSelf: 'center',
        left: '50%',
        fontSize: 75,
        color: '#ae73ea'
    }
});
