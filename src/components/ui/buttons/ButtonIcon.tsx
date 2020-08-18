/*
 * GennadySX @2020
 */
import React from "react";

import {Image, ImageStyle, StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from "react-native";
import {Icons} from "../../../helpers/Assets";

export interface IButtonIcon {
    icon: Icons;
    onPress: () => void;
    iconStyle?: StyleProp<ImageStyle>;
    style?: StyleProp<ViewStyle>;
    size?: number;
    focused?: boolean
}


export default function ButtonIcon(props: IButtonIcon) {
    return (
        <TouchableOpacity style={[s.block, props.style]} onPress={() => props.onPress()} activeOpacity={props.focused ? 1 : 0}>
            <Image source={props.icon}  style={[s.img, props.iconStyle,
                {
                    width: props.size || 25,
                    height: props.size || 25,
                }
            ]}/>
        </TouchableOpacity>
    )
}

const s = StyleSheet.create({
    block: {
        padding: 2
    },
    img: {
        resizeMode: "contain"
    }
})
