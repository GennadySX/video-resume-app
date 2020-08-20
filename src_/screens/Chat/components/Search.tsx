/*
 * GennadySX @2020
 */
import React from "react";
import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {Width} from "../../../helpers/Normalizer";

export interface ISearchPanel {
    onSearch?: (item?: any) => void;
}


export default function SearchPanel(props: ISearchPanel) {
        const [val, setVal]  = React.useState('')
    return (
        <View style={s.block}>
            <TextInput
                value={val}
                placeholder={'Поиск'}
                onChangeText={(e: string) => setVal(e)}
            />
        </View>
    )

}




const s = StyleSheet.create({
    block: {
        width: Width * 0.9,
        alignSelf: 'center',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        paddingLeft: 15
    }
})
