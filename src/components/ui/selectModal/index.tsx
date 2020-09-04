import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Width} from '../../../helpers/Normalizer';
import BottomDrawer from '../../BottomDrawer';
import Title from '../Title';
import Container from '../../Container';
import {IconsSvg} from '../../../helpers/IconsSVG';

export interface ISelectModal {
  values: any[];
  selected?: string | any;
  onSelected: (item: any) => void;
  fullWidth?: boolean;
  placeholder?: string;
  title?: string;
  sheetHeight?: number;
}

export default function SelectModal(props: ISelectModal) {
  const [selected, setItem] = React.useState(props.selected && props.selected);
  const [modal, setModal] = React.useState(false);
  return (
    <View>
      <TouchableOpacity
        style={[s.block, props.fullWidth && {width: Width * 0.88}]}
        onPress={() => setModal(true)}>
        <Text style={[s.selected, !selected && s.placeholder]}>
          {selected ?? props.placeholder}
        </Text>
        {React.createElement(IconsSvg.ArrowDownIcon, {width: 20, height: 20})}
      </TouchableOpacity>
      <BottomDrawer
        height={props.sheetHeight ?? 250}
        startUp={modal}
        onClose={() => setModal(false)}>
        <View style={s.header}>
          {props.title && (
            <Title text={props.title} fontSize={18} style={{marginBottom: 0}} />
          )}
        </View>
        <Container>
          <View style={s.resultBlock}>
            {props.values.map((item: any, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setModal(false);
                  setItem(item);
                }}
                style={[s.resultItem]}
                activeOpacity={1}>
                <Text style={s.title}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Container>
      </BottomDrawer>
    </View>
  );
}

const s = StyleSheet.create({
  block: {
    backgroundColor: 'rgba(72, 19, 128, 0.02)',
    width: Width * 0.88,
    borderColor: 'rgba(72, 19, 128, 0.1)',
    borderWidth: 1,
    padding: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selected: {
    fontSize: 15,
    color: '#000000',
  },
  placeholder: {
    color: 'rgba(0,0,0,0.55)',
  },
  resultBlock: {
    borderTopColor: 'rgba(39,39,39,0.2)',
    borderTopWidth: 1,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerClear: {
    color: 'rgba(101,99,99,0.66)',
    fontFamily: 'Manrope-Medium',
    right: 10,
  },
  resultItem: {
    padding: 15,
    paddingLeft: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(101,99,99,0.66)',
  },
  title: {
    fontFamily: 'Manrope-Medium',
  },
});
