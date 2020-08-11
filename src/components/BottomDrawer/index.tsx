import React, {useEffect} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Width} from '../../helpers/Normalizer';
export interface ISignDrawer {
  children: React.ReactChild | React.ReactChildren;
  startUp?: boolean;
  height?: number;
  duration?: number;
  closeDuration?: number;
  padding?: number;
  full?: boolean;
}

export default function BottomDrawer({
  startUp,
  children,
  height,
  duration,
  closeDuration,
  padding,
  full,
}: ISignDrawer) {
  let RBSheetX: {open: () => void; close(): void} | null = null;

  useEffect(() => {
    if (startUp && RBSheetX) {
      RBSheetX.open();
    } else {
      if (RBSheetX) {
        RBSheetX.close();
      }
    }
  });

  return (
    <RBSheet
      ref={(ref: any) => {
        RBSheetX = ref;
      }}
      height={height || 500}
      openDuration={duration || 1000}
      closeDuration={closeDuration || 300}
      closeOnDragDown={true}
      customStyles={{
        wrapper: {
          padding: full ? 0 : padding || 10,
        },
        draggableIcon: {
          padding: 0,
        },
        container: {
          borderTopStartRadius: 10,
          borderTopEndRadius: 10,
        },
      }}>
      {children}
    </RBSheet>
  );
}
