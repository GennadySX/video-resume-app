import {StyleSheet} from "react-native";

export const swipeCardStyle = StyleSheet.create({
    block: {
        marginTop: 15,
        padding: 2,
    },
    blockChild: {
        flexDirection: 'column',
        borderRadius: 10,
        elevation: 2,
        backgroundColor: '#fafafa',
        padding: 17,
        paddingTop: 10,
        paddingBottom: 15,
    },
    font: {
        fontFamily: 'Manrope-Medium',
    },
    header: {
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    logDate: {
        fontSize: 12,
        color: 'gray'
    },
    body: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    lastMessage: {
        width: "90%",
        fontSize: 12,
        color: 'gray'
    },
    leftAction: {
        position: 'relative',
        top: 20,
        width: 205,
    },
    leftActionChild: {
        position: 'relative',
        width: 300,
        backgroundColor: '#6e3baa',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftActionContainer: {
        width: 100,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftActionIcon: {
        alignSelf: 'center',
        marginBottom: 10,
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    leftActionIconFlag: {
        alignSelf: 'center',
    },
    leftActionText: {
        color: '#fafafa',
        fontFamily: 'Manrope-Medium',
        fontSize: 11,
    },
    liner: {
        position: 'absolute',
        width: 1,
        left: '33%',
        backgroundColor: 'lightgray',
        opacity: 0.2,
        height: 250,
    },
});
