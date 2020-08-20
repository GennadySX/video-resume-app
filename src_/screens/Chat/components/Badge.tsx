/*
 * GennadySX @2020
 */

import React from "react";
import {Text} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {badgeStyle as s} from "../styles/badgeStyle";

export interface IBadge {
    value: string | number
}

export default function Badge(props: IBadge) {
    return (
        <LinearGradient colors={['#742DD2', '#FFE2FF']} start={{x: 0, y: 1}} end={{x: 1, y: 0}} style={s.block} >
                <Text style={s.badgeText}>{props.value}</Text>
        </LinearGradient>
    )
}


