/*
 * GennadySX @2020
 */

import React from "react";
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import {Icons} from "../../../helpers/Assets";
import Title from "../../../components/ui/Title";
import {Height} from "../../../helpers/Normalizer";

interface ImessageList {
    me: boolean;
    text: string
}


export interface IChatPanel {
    messageList: ImessageList[];
    onBack?: () => void;
}

export default function ChatPanel(props: IChatPanel) {
    const [val, setVal ]  = React.useState('')
        return (
            <View style={s.block}>
                <Container style={s.header}>
                    <Header backClick={() => props.onBack && props.onBack() } title={'Компания'} style={{marginBottom: 20}} />
                </Container>
                <Container style={s.messageListContainer} >
                    {props.messageList.map((message: any, index: number) =>
                        <View style={[s.messageList, message.me && s.left]} >
                            <Text style={s.message} >{message.text}</Text>
                        </View>
                    )}
                </Container>
                <Container style={s.bottomPanel}>
                    <TextInput
                        placeholder={'Введите сообщение'}
                        value={val} onChangeText={setVal} style={s.inMessage} />
                    <TouchableOpacity  style={s.sendBtn} onPress={() => {}}>
                        <Image source={Icons.send} style={s.sendBtnIcon} />
                    </TouchableOpacity>
                </Container>
            </View>
        )
}



const s = StyleSheet.create({
    block: {
        flex: 1,
        paddingTop: 20,
        flexDirection: 'column'
    },
    container: {

    },
    header: {

    },
    title: {

    },
    messageListContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    messageList: {
        alignSelf: 'flex-start',
        marginBottom: 20,
        width: "80%",
        minHeight: 40,
    },
    left: {
        alignSelf: 'flex-end'
    },
    message: {
        backgroundColor: '#fafafa',
        borderRadius: 10,
        elevation: 2,
        fontFamily: "Manrope-Medium",
        fontSize: 12,
        padding: 15,
    },
    bottomPanel: {
        flexDirection: "row",
        marginBottom: 20
    },
    inMessage: {
        paddingLeft: 20,
        paddingRight: 55,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'rgba(72, 19, 128, 0.2)',
        width: '100%',
        backgroundColor: 'rgba(72, 19, 128, 0.03)',
        fontFamily: "Manrope-Medium",
    },
    sendBtn: {
        position: "absolute",
        right: 25,
        top: 5

    },
    sendBtnIcon: {

    }
})
