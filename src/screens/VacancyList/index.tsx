import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Index from '../../components/ui/Title';
import Card from '../../components/Card';
import Header from '../../components/Header';
import {Icons} from '../../helpers/Assets';
import {vacancyListScreenStyle as s} from './styles';
import Container from '../../components/Container';
import TabBar from '../../components/TabBar';
import FilterShield from './components/filter';

export interface IVacancyList {}

export default class VacancyListScreen extends React.Component<any, any> {
  constructor(props: IVacancyList) {
    super(props);
    this.state = {
      onFilter: false,
      title: '',
    };
    console.log('props VacancyListScreen: () =>', this.props);
  }

  componentDidMount() {
    if (this.props.route && this.props.route.params) {
      this.setState({title: this.props.route.params.title});
    }
  }

  filterFocus() {
    this.setState({onFilter: true}, () =>
      console.log('is filter', this.state.onFilter),
    );
  }

  render() {
    const {onFilter, title} = this.state;
    return (
      <TabBar>
        <Container style={s.block}>
          <Header
            rightBlock={
              <View style={s.header}>
                <TouchableOpacity onPress={() => this.filterFocus()}>
                  <Image source={Icons.filters} style={s.headerImg} />
                </TouchableOpacity>
              </View>
            }
          />
        </Container>

        <ScrollView showsVerticalScrollIndicator={false} style={s.mainBlock}>
          <Container>
            <Index
              text={title || 'Результаты поиска'}
              fontSize={22}
              left
              unBottom
            />
            <Text style={[s.descText, s.font]}>1005 вакансий</Text>
          </Container>

          <Card onClick={() => this.props.navigation.navigate('Vacancy')} />
          <Card onClick={() => this.props.navigation.navigate('Vacancy')} />
          <Card
            latest
            onClick={() => this.props.navigation.navigate('Vacancy')}
          />
        </ScrollView>
        <FilterShield
          onFilter={onFilter}
          onCloseSheet={() => this.setState({onFilter: false})}
        />
      </TabBar>
    );
  }
}
