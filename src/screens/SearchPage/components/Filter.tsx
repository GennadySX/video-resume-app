import React from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleProp,
} from 'react-native';
import {Icons} from '../../../helpers/Assets';
import {filterStyle as s} from "../styles/filterStyle";
import Container from "../../../components/Container";

export interface IFilter {
  onFocus?: () => void;
  onChange?: (e: string) => void;
  iconClick?: () => void;
  value?: string;
  editable?: boolean;
  style?: StyleProp<any>;
}

export default function Filter({
  onFocus,
  editable,
  onChange,
  iconClick,
  value,
  style,
}: IFilter) {
  const [val, setVal] = React.useState(value);

  return (
    <View style={[s.block, style]}>
      <TouchableOpacity onPress={onFocus} style={s.inputField}>
        <TextInput
          editable={!!editable}
          value={val}
          placeholder={'Поиск'}
          onFocus={onFocus}
          onChangeText={(e: string) => setVal(e)}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={iconClick}>
        <Image source={Icons.filter} style={s.filterIcon} />
      </TouchableOpacity>
    </View>
  );
}


