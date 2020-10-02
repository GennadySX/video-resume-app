import React, {ReactChild, ReactChildren, RefAttributes} from 'react';
import {Image, NativeScrollEvent, ScrollView, StyleProp, StyleSheet, View} from 'react-native';
import {IconsSvg} from '../../helpers/IconsSVG';
import {Height, Width} from "../../helpers/Normalizer";
import {AssetsBackground} from "../../helpers/Assets";


interface IGetY {
  nativeEvent: NativeScrollEvent;
}

export interface IScrollShadow {
  children?: ReactChildren | any;
  showsVerticalScrollIndicator?: boolean;
   whitely?: boolean;
  style?: StyleProp<any>;
  ref?: (ref: any) => void;
  onContentSizeChange?: () => void;

}

export default function ScrollShadow(props: IScrollShadow) {

  const [sY, setSY] = React.useState(false)



  return (
    <View>
       <Image source={props.whitely ? AssetsBackground.shadow : AssetsBackground.topShadow} style={[s.shadowContent, {opacity: sY ? 1 : 0 }]} />
        {props.onContentSizeChange ? (
            <ScrollView onContentSizeChange={props.onContentSizeChange} showsVerticalScrollIndicator={ props.showsVerticalScrollIndicator || false}
                        style={props.style} ref={(ref:any) => props.ref = ref}>
                {props.children}
            </ScrollView>
        ) : (
            <ScrollView onScroll={({nativeEvent}: IGetY) => setSY((Number(nativeEvent.contentOffset.y) >= 1))} showsVerticalScrollIndicator={ props.showsVerticalScrollIndicator || false} style={[{height: Height},props.style]} ref={props.ref}>
                {props.children}
                <View style={{marginBottom: 120 }} />
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
      width: Width + 50,
      resizeMode: 'stretch',
      top: -18,
      left: -50,
      transform: [
          {rotate: '180deg'}
      ]
  },
});
