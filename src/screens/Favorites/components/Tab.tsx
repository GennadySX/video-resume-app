import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import View = Animated.View;
import {TAB_MENU} from "../../../constants/TabMenu";

export interface ITab {

}

export default function Tab(props: ITab) {

    const [active, setActive] = React.useState(TAB_MENU[0].title)

    return (
        <View style={s.block}>

        </View>
    )
}

const s = StyleSheet.create({
    block: {

    }
})


