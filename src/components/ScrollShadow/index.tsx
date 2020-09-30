import React, {ReactChild, ReactChildren, RefAttributes} from 'react';
import {Image, ScrollView, StyleProp, StyleSheet, View} from 'react-native';
import {IconsSvg} from '../../helpers/IconsSVG';
import {Width} from "../../helpers/Normalizer";
import {AssetsBackground} from "../../helpers/Assets";

export interface IScrollShadow {
  children?: ReactChildren | any;
  showsVerticalScrollIndicator?: boolean;
   whitely?: boolean;
  style?: StyleProp<any>;
  ref?: (ref: any) => void;
  onContentSizeChange?: () => void;

}

export default function ScrollShadow(props: IScrollShadow) {
  return (
    <View>

      <Image source={props.whitely ? AssetsBackground.shadow : AssetsBackground.topShadow} style={s.shadowContent} />
        {props.onContentSizeChange ? (
            <ScrollView onContentSizeChange={props.onContentSizeChange} showsVerticalScrollIndicator={ props.showsVerticalScrollIndicator || false}
                        style={props.style} ref={(ref:any) => props.ref = ref}>
                {props.children}
            </ScrollView>
        ) : (
            <ScrollView showsVerticalScrollIndicator={ props.showsVerticalScrollIndicator || false} style={props.style} ref={props.ref}>
                {props.children}
            </ScrollView>
        )
        }

    </View>
  );
}

const s = StyleSheet.create({
    shadowContent: {
      position: 'absolute',
      zIndex: 99,
      height: 32,
      width: Width+50,
      resizeMode: 'stretch',
      top: -18,
      left: -50,
      transform: [
          {rotate: '180deg'}
      ]
  },
});
