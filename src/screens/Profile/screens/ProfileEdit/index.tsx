/*
 * GennadySX @2020
 */

import React from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import Container from "../../../../components/Container";
import Title from "../../../../components/ui/Title";
import {Assets} from "../../../../helpers/Assets";


export interface IProfileEditScreen {

}

export default function ProfileEditScreen(props: IProfileEditScreen) {
        return (
            <Container>
                <Title text={'Редактирование'} left  />

                    <Container style={s.avatarContainer} >
                            <TouchableOpacity style={s.avatarBtn}>
                                <Image source={Assets.photo} style={s.avatar} />
                            </TouchableOpacity>
                    </Container>

            </Container>
        )
}


const s = StyleSheet.create({
    avatarContainer: {

    },
    avatarBtn: {
        borderRadius: 50,
        width: 70,
        height: 70
    },
    avatar: {
        width: 35,
        height: 35,
    }
})
