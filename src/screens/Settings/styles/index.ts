import {StyleSheet} from "react-native";
import {styles} from "../../../styles/style";

export const settingsScreenStyle = StyleSheet.create({
    block: {},
    resultBlock: {
        borderTopColor: 'rgba(39,39,39,0.2)',
        borderTopWidth: 1,
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerClear: {
        color: "rgba(101,99,99,0.66)",
        fontFamily: 'Manrope-Medium',
        right: 10
    },
    descBlock: {
        padding: 20,
        paddingLeft: 5,
        paddingRight: 5,
        color: "#868585",
        textAlign: 'center'
    },
    btn: {
        borderBottomColor: "#bbbbbb",
        borderBottomWidth: 1,
        borderTopColor: "#bbbbbb",
        borderTopWidth: 1,
        padding: 20,
        paddingLeft: 0

    },
    btnCountry: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: "#bbbbbb",
        borderBottomWidth: 0,
    },
    btnText: {
        ...styles.fontMedium
    },
    btnValue: {
        ...styles.fontMedium,
        color: '#868585'
    }
})
