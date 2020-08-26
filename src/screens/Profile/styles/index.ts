import {StyleSheet} from "react-native";
import {styles} from "../../../styles/style";
import {Width} from "../../../helpers/Normalizer";

export const profileScreenStyle = StyleSheet.create({
    block: {},
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profileImageBlock: {
        justifyContent: 'center',
        padding: 15,
        alignItems: 'center',
    },
    imgContainer: {
        width: 135,
        height: 135,
        borderRadius: 70,
        padding: 15,

        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 115,
        height: 115,
        resizeMode: 'cover',
        borderRadius: 57,
    },
    status: {
        bottom: 15,
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 50,
        marginBottom: 10,
    },
    statusTitle: {
        color: '#fafafa',
        ...styles.fontMedium,
    },
    username: {
        ...styles.fontMedium,
        paddingTop: 5,
        alignSelf: 'flex-start',
        color: '#5e5c5c',
    },
    resumeContainer: {
        marginBottom: 20,
    },
    addResumeBtn: {
        width: 110,
        height: 65,
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        marginRight: 15,
        marginLeft: 15,
        alignItems: 'center',
    },
    addResumeIcon: {
        alignSelf: 'center',
        height: 65,
        width: 110,
        resizeMode: 'contain',
    },
    videoBlock: {
        flexDirection: 'row',
    },
    videoBlockImg: {
        width: Width * 0.25,
        height: Width * 0.25,
        resizeMode: 'contain',
        marginRight: 10,
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
    imgPopup: {
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
