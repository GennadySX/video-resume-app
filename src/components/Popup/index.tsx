/*
 * GennadySX @2020
 */
import React, {ReactChild, ReactChildren} from "react";
import Dialog, {DialogContent, SlideAnimation} from 'react-native-popup-dialog';
import Title from "../ui/Title";
import {Height, Width} from "../../helpers/Normalizer";
import Button, {buttonType} from "../ui/buttons";
import {Image, StyleSheet, Text} from "react-native";
import Container from "../Container";
import {styles} from "../../styles/style";
import {AssetsPopup} from "../../helpers/Assets";

export interface IPopup {
    visible: boolean;
    onClose?: () => void;
    children: ReactChildren | ReactChild | any;
}

export default function Popup({visible, onClose, children}: IPopup) {
    return (
            <Dialog
                visible={visible}
                    onTouchOutside={() => onClose ? onClose() : {}}
                    dialogAnimation={new SlideAnimation({slideFrom: 'bottom'})}
                    dialogStyle={s.dialog}>
                <DialogContent  style={s.block}>
                    {children}
                </DialogContent>
            </Dialog>
    )
}


const s = StyleSheet.create({
    dialog: {
        borderRadius: 20
    },
    block: {
        width: Width * 0.90,
        paddingTop: 25,
    },
})
