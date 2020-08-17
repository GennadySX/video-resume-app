/*
 * GennadySX @2020
 */

import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Icons} from '../../../helpers/Assets';
import LinearGradient from 'react-native-linear-gradient';
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {swipeCardStyle as s} from '../styles/swipeCardStyle';
import Title, {FontType} from "../../../components/ui/Title";
import Badge from "./Badge";

export interface ICard {
    latest?: boolean;
    archive?: boolean;
    new?: boolean;
    onClick: () => void;
}

const message = "Добрый день, когда мы сможем созвониться?"

export default function SwipeCard(props: ICard) {


  const realizeText = (text: string) => {
      if (text.toString().length > 50) {
        return text.slice(0, 65) + '...'
    }
    return text

  }

    const renderLeftActions = (text: string, progress: any, dragX: any, archive?: boolean) => {
        return (
            <RectButton style={[s.leftAction, text.toString().length > 38 ? {height: "110%"} : {height: '98%'},
                {width: archive ? 210 : 110}
            ]} onPress={() => {
            }}>
                <LinearGradient
                    colors={['rgba(133,37,221,0.14)', 'rgba(255,226,255,0.72)']}
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 1}}
                    style={s.leftActionChild}>
                    {archive ?
                        <>
                            <TouchableOpacity onPress={() => {}} style={s.leftActionContainer}>
                                <Image source={Icons.basket} style={s.leftActionIcon}/>
                                <Text style={s.leftActionText}>Удалить</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {}} style={s.leftActionContainer}>
                                <Image source={Icons.archive} style={s.leftActionIcon}/>
                                <Text style={s.leftActionText}>Разархивировать</Text>
                            </TouchableOpacity>
                        </>
                        :
                        <TouchableOpacity onPress={() => {}} style={[s.leftActionContainer, {paddingLeft: 20}]}>
                            <Image source={Icons.archive} style={s.leftActionIcon}/>
                            <Text style={s.leftActionText}>Архивировать</Text>
                        </TouchableOpacity>
                    }
                </LinearGradient>
            </RectButton>
        );
    };




    return (
        <View style={props.latest && {marginBottom: 180}}>
            <Swipeable renderLeftActions={(progress: any, dragX: any) => renderLeftActions(message, progress, dragX, props.archive)   }>
                <TouchableOpacity style={[s.block]} onPress={() => props.onClick()}>
                    <View style={s.blockChild}>
                        <View style={[s.header]}>
                            <Title text={'Компания'} left fontSize={18} fontType={FontType.medium}
                                   style={{marginBottom: 5}}/>
                            <Text style={s.logDate}>20:20</Text>
                        </View>
                        <View style={s.body}>
                            <Text style={[s.lastMessage, s.font]}>
                              {realizeText(message)}
                            </Text>
                            {props.new &&
                            <Badge value={1}/>}
                        </View>
                    </View>
                </TouchableOpacity>
            </Swipeable>
        </View>
    );
}
