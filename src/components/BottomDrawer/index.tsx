import React, {useEffect} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {View} from 'react-native';
export interface ISignDrawer {
  children: React.ReactChild | React.ReactChildren | any;
  startUp?: boolean;
  onClose?: () => void;
  height?: number;
  duration?: number;
  closeDuration?: number;
  padding?: number;
  full?: boolean;
}

interface nativeEventLayout {
  nativeEvent: {layout: any}; //для оптимизации памяти
}

export default function BottomDrawer({
  startUp,
  onClose,
  children,
  height,
  duration,
  closeDuration,
  padding,
  full,
}: ISignDrawer) {
  let RBSheetX: {open: () => void; close(): void} | null = null;

  const [heightLayout, setHeightLayout] = React.useState(height ?? 500);

  useEffect(() => {
    if (startUp && RBSheetX) {
      RBSheetX.open();
    } else if (startUp === false && RBSheetX) {
      RBSheetX.close();
    }
  });

  return (
    <RBSheet
      ref={(ref: any) => {
        RBSheetX = ref;
      }}
      height={height ?? heightLayout}
      openDuration={duration || 300}
      closeDuration={closeDuration || 300}
      closeOnDragDown={true}
      onClose={() => (startUp && onClose ? onClose() : {})}
      customStyles={{
        wrapper: {
          padding: full ? 0 : padding || 10,
        },
        draggableIcon: {
          padding: 0,
        },
        container: {
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
        },
      }}>
      <View
        onLayout={({nativeEvent}: nativeEventLayout) => !height && setHeightLayout(nativeEvent.layout.height + 40)}>
        {children}
      </View>
    </RBSheet>
  );
}
