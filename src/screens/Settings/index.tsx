/*
 * GennadySX @2020
 */
import React from 'react'
// @ts-ignore
import {connect} from 'react-redux'

import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import TabBar from "../../components/TabBar";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Title from "../../components/ui/Title";
import {Routes} from "../../routes/Routes";
import CheckBoxUI from "../../components/ui/checkbox";
import {styles} from "../../styles/style";
import Button, {buttonType} from "../../components/ui/buttons";


export interface ISettings {

}


class SettingsScreen extends React.Component<any, any> {
    constructor(props: ISettings) {
        super(props);
        this.state = {
            imLooking: false
        }
    }


    lookingActive() {
        this.setState({
            imLooking: !this.state.imLooking
        })
    }

    signOut() {
        this.props.navigation.navigate(Routes.Intro)
    }


    render() {
        const {imLooking} = this.state
        return (
            <TabBar active={Routes.Profile}>
                <Container style={{paddingTop: 20}}>
                    <Header backClick={() => this.props.navigation.navigate(Routes.Profile)}/>
                    <Title text={'Настройки'} left/>
                </Container>
                <ScrollView style={s.block}>
                    <Container>
                        <View style={s.resultBlock}>
                            <CheckBoxUI checked={imLooking} title={'Я ищу работу'}
                                        onCheck={() => this.lookingActive()}
                            />
                            <CheckBoxUI checked={!imLooking} title={'Я не ищу работу'}
                                        onCheck={() =>  this.lookingActive()}/>
                        </View>
                        <Text style={s.descBlock}>При нажатии на “Я не ищу работу” все резюме и профиль будут скрыты от работодателей</Text>

                        <TouchableOpacity onPress={() => {}} style={[s.btn, s.btnCountry]} >
                            <Text style={s.btnText}>Страна поиска</Text>
                            <Text style={s.btnValue}>Россия</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}} style={[s.btn]} >
                            <Text style={s.btnText}>О приложении</Text>
                        </TouchableOpacity>
                    </Container>
                        <Button style={{marginTop: 20}} title={'Выйти из аккаунта'} onPress={() => this.signOut()} type={buttonType.white} textStyle={{color: '#481380'}} shadow />
                </ScrollView>
            </TabBar>
        );
    }

}


const s = StyleSheet.create({
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


export default connect()(SettingsScreen)

