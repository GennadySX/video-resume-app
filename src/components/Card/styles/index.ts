import {StyleSheet} from "react-native";
import {styles} from "../../../styles/style";

export const CardStyle = StyleSheet.create({
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
        color: '#481380',
        fontWeight: 'bold',
        fontSize: 13,
    },
    //Popup
    container: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    desc: {
        ...styles.fontMedium,
        fontSize: 13,
        color: 'rgba(39,39,39,0.4)',
        marginBottom: 20

    },
    img: {
        width: 230,
        height: 230,
        marginBottom: 20,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    btn: {
        paddingBottom: 0
    },
    btnText: {
        ...styles.fontMedium,
        color: 'rgba(72,19,128,0.8)'
    }
});
