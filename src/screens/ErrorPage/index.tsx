import React from 'react';
import {StyleSheet, Text} from 'react-native';
import TabBar from '../../components/TabBar';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Title from '../../components/ui/Title';
import {IconsSvg} from '../../helpers/IconsSVG';
import Button, {buttonType} from '../../components/ui/buttons';
import {styles} from "../../styles/style";

export interface IErrorPageScreen {
}

export default class ErrorPageScreen extends React.Component<any, any> {
    constructor(props: IErrorPageScreen) {
        super(props);
        this.state = {};
    }

    toBack() {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <TabBar>
                <Container paddingTop={true}>
                    <Header/>
                </Container>
                <Container paddingTop={true} style={{alignSelf: 'center'}}>
                    <Title style={{marginTop: 20}} text={'Что-то пошло \n' + 'не так'} textStyle={s.center}/>
                    <Text style={[s.center, s.desc]}>Невозможно открыть данную страницу</Text>
                    <Button
                        title={'Вернуться назад'}
                        onPress={() => this.toBack()}
                        type={buttonType.white}
                        shadow
                        style={{marginBottom: 40}}
                        textStyle={{color: '#481380'}}
                    />
                    {React.createElement(IconsSvg.ErrorPageIcon)}
                </Container>
            </TabBar>
        );
    }
}

const s = StyleSheet.create({
    center: {textAlign: 'center'},
    desc: {
        ...styles.fontMedium,
        color: 'rgba(0,0,0,0.62)',
        marginBottom: 30
    },
});
