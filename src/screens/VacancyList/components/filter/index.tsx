import React from 'react';
import BottomDrawer from '../../../../components/BottomDrawer';
import {Height, Width} from '../../../../helpers/Normalizer';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {vacancyListScreenStyle as s} from '../../styles';
import Title from '../../../../components/ui/Title';
import InputUI from '../../../../components/ui/inputs/input';
import SelectModal from '../../../../components/ui/selectModal';
import ButtonBadge from '../../../../components/ui/buttons/badgely';
import ToggleButton from '../../../../components/ui/buttons/ToggleButton';
import Container from '../../../../components/Container';
import Button, {buttonType} from '../../../../components/ui/buttons';
import CheckBoxUI from '../../../../components/ui/checkbox';
import {Routes} from '../../../../routes/Routes';
import {useNavigation} from '@react-navigation/native';

export interface IFilterShield {
  onFilter: boolean;
  onCloseSheet: (value?: boolean) => void;
}

export default function FilterShield({onFilter, onCloseSheet}: IFilterShield) {
  const [onFilterPopup, setFilterPopup] = React.useState(false);
  const [isToggle, setToggle] = React.useState(false);
  const [isToggle1, setToggle1] = React.useState(false);
  const [isToggle2, setToggle2] = React.useState(false);
  const [check1, setCheck1] = React.useState(false);
  const [check2, setCheck2] = React.useState(false);
  const [check3, setCheck3] = React.useState(false);

  const navigation = useNavigation();

  const filterResult = () => {
    onCloseSheet(false);
    navigation.navigate(Routes.SearchResult);
  };

  const clearCheck = () => {
    setCheck1(false);
    setCheck2(false);
    setCheck3(false);
  };

  return (
    <View>
      <BottomDrawer
        startUp={onFilter}
        height={Height * 0.9}
        full
        onClose={() => onCloseSheet(false)}>
        <View style={s.bFilterBlock}>
          <Title text={'Фильтры'} fontSize={18} bottom={15} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              marginBottom: 100,
              width: Width,
              paddingRight: 20,
              paddingLeft: 20,
            }}>
            <InputUI
              fullWidth
              value={''}
              onChangeText={() => 'f'}
              placeholder={'Компания'}
            />
            <InputUI
              fullWidth
              value={''}
              onChangeText={() => 'f'}
              placeholder={'Город'}
            />
            <InputUI
              fullWidth
              value={''}
              onChangeText={() => 'f'}
              placeholder={'Должность'}
            />
            <SelectModal
              placeholder={'Зарплата'}
              values={['30 000 руб', '50 000 руб', '70 000 руб']}
              onSelected={(item: any) => console.log('selected item', item)}
            />
            <InputUI
              fullWidth
              value={''}
              onChangeText={() => 'f'}
              placeholder={'Требуемый опыт'}
            />
            <InputUI
              fullWidth
              value={''}
              onChangeText={() => 'f'}
              placeholder={'График'}
            />
            <ButtonBadge
              title={'Добавить метро'}
              onClick={() => setFilterPopup(true)}
            />
            <ButtonBadge
              title={'Добавить профобласть'}
              onClick={() => setFilterPopup(true)}
            />
            <ButtonBadge
              title={'Добавить отрасль'}
              onClick={() => setFilterPopup(true)}
            />
            <SelectModal
              placeholder={'Время публикации'}
              values={['JS', 'PHP', 'Python']}
              onSelected={(item: any) => console.log('selected item', item)}
            />
            <SelectModal
              placeholder={'Сортировка'}
              values={['JS', 'PHP', 'Python']}
              onSelected={(item: any) => console.log('selected item', item)}
            />
            <ToggleButton
              title={'Без вакансий агенств'}
              onClick={() => setToggle(!isToggle)}
              value={isToggle}
            />
            <ToggleButton
              title={'Только с указанной зарплатой'}
              onClick={() => setToggle1(!isToggle1)}
              value={isToggle1}
            />
            <ToggleButton
              title={'Доступные для соискателей от 14 лет'}
              onClick={() => setToggle2(!isToggle2)}
              value={isToggle2}
              style={{marginBottom: 100}}
            />
          </ScrollView>
          <Container
            shadow
            style={{marginBottom: 30, position: 'absolute', bottom: 0}}>
            <Button
              title={'Сохранить изменения'}
              type={buttonType.purple}
              onPress={() => filterResult()}
              style={{paddingBottom: 0}}
              textStyle={{fontSize: 13}}
            />
            <Button
              title={'Отмена'}
              type={buttonType.transparent}
              onPress={() => onCloseSheet(false)}
              textStyle={{color: 'gray', fontSize: 13}}
            />
          </Container>
        </View>
      </BottomDrawer>
      <BottomDrawer
        startUp={onFilterPopup}
        height={Height * 0.9}
        full
        onClose={() => setFilterPopup(false)}>
        <View style={xs.header}>
          <Title
            text={'Добавить метро'}
            fontSize={18}
            style={{marginBottom: 0}}
          />
          {(check1 || check2 || check3) && (
            <TouchableOpacity onPress={() => clearCheck()}>
              <Text style={xs.headerClear}>Очистить все</Text>
            </TouchableOpacity>
          )}
        </View>
        <Container style={{minHeight: check1 || check2 || check3 ? 470 : 520}}>
          <View style={xs.resultBlock}>
            <CheckBoxUI
              checked={check1}
              title={'Авиастроительный'}
              onCheck={() => setCheck1(!check1)}
            />
            <CheckBoxUI
              checked={check2}
              title={'Авиастроительный'}
              onCheck={() => setCheck2(!check2)}
            />
            <CheckBoxUI
              checked={check3}
              title={'Авиастроительный'}
              onCheck={() => setCheck3(!check3)}
            />
          </View>
        </Container>
        {(check1 || check2 || check3) && (
          <Button
            title={'Сохранить изменение'}
            onPress={() => setFilterPopup(false)}
            type={buttonType.purple}
            style={{paddingBottom: 0}}
          />
        )}
        <Button
          title={'Отмена'}
          onPress={() => setFilterPopup(false)}
          type={buttonType.transparent}
          textStyle={{color: 'gray'}}
        />
      </BottomDrawer>
    </View>
  );
}

const xs = StyleSheet.create({
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
});
