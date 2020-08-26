import {StyleSheet} from "react-native";
import {styles} from "../../../styles/style";

export const swipeCardStyle = StyleSheet.create({
    block: {
        marginTop: 15,
        padding: 2,
    },
    blockChild: {
        flexDirection: 'column',
        paddingBottom: 7,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: '#fafafa',
        padding: 17,
        paddingTop: 10,
    },
    font: {
        fontFamily: 'Manrope-Medium',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardDate: {
        fontSize: 11,
        paddingStart: 3,
        color: 'rgba(39,39,39,0.5)',
    },
    headerHeartIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    body: {
        paddingTop: 7,
        flexDirection: 'row',
    },
    bodyImage: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        marginRight: 17,
    },
    bodyPart: {
        paddingLeft: 10,
    },
    bodyCardTitle: {
        fontWeight: '500',
        fontSize: 15,
        marginBottom: 3,
    },
    companyText: {
        fontSize: 12,
        color: 'rgba(39,39,39,0.5)',
    },
    salaryText: {
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 15,
        fontWeight: 'bold',
    },
    experienceText: {
        fontSize: 11,
        color: 'rgba(39,39,39,0.5)',
    },
    bodyGeo: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        height: 25,
    },
    geoIcon: {
        position: 'relative',
        right: 3,
        resizeMode: 'contain',
        width: 20,
    },
    geoText: {
        fontSize: 11,
        color: 'rgba(39,39,39,0.5)',
    },
    footer: {
        width: '100%',
        paddingTop: 7,
        paddingBottom: 5,
        justifyContent: 'flex-end',
    },
    footerText: {
        alignSelf: 'flex-end',
        color: '#55A777',
        fontWeight: 'bold',
        fontSize: 13,
    },
    leftAction: {
        position: 'relative',
        top: 20,
        height: 185,
        width: 200,
    },
    leftActionChild: {
        position: 'relative',
        width: 300,
        backgroundColor: '#6e3baa',
        height: 185,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftActionContainer: {
        width: 100,
        padding: 20,
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
    inviteTitle: {
        ...styles.fontMedium,
        color: '#bbbbbb',
        fontWeight: '500',
        fontSize: 12
    }
});
