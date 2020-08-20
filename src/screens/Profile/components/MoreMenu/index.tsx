/*
 * GennadySX @2020
 */
import React from "react";
import BottomDrawer from "../../../../components/BottomDrawer";
import Container from "../../../../components/Container";
import Title from "../../../../components/ui/Title";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Button, {buttonType} from "../../../../components/ui/buttons";
import {useNavigation} from "@react-navigation/native";
import {Routes} from "../../../../routes/Routes";

export interface IMoreMenu {
    active: boolean,
    onClose: () => void
}

export default function ProfileMoreMenu(props: IMoreMenu) {
    const navigation = useNavigation()
    const passScreen = (screen: Routes) => {
        Promise.resolve(props.onClose()).then(() => navigation.navigate(screen))
    }

    return (
        <BottomDrawer startUp={props.active} height={250} full onClose={props.onClose} >
            <Container >
                <Title text={'Изменить'} left fontSize={18} unBottom  />
                <View style={s.block}>
                        <TouchableOpacity  onPress={() => navigation.navigate(Routes.Settings)} style={s.menuBtn}>
                            <Text>Редактирование профиля</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => passScreen(Routes.Settings)} style={s.menuBtn}>
                            <Text>Настройки</Text>
                        </TouchableOpacity>
                </View>
                <Button title={'Отмена'} onPress={props.onClose} type={buttonType.transparent} textStyle={{color: '#bbbbbb'}} />
            </Container>
        </BottomDrawer>
    )
}



const s = StyleSheet.create({
    block: {
        marginTop: 15,
        paddingBottom: 10,
        borderTopColor: '#dadada',
        borderTopWidth: 1
    },
    menuBtn: {
        padding: 15,
        paddingLeft: 0,
        borderBottomColor: '#dadada',
        borderBottomWidth: 1
    }
})
