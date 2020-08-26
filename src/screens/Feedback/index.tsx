import React from 'react';
import {View, ScrollView} from 'react-native';
import BlockTab from './components/BlockTab';
import Index from '../../components/ui/Title';
import Card from './components/SwipeCard';
import TabBar from '../../components/TabBar';
import {TAB_MENU} from '../../constants/TabMenu';
import MiniCard from './components/MiniCard';
import {feedbackScreenStyle as s} from './styles';

export interface IFeedback {}

export default class FeedbackScreen extends React.Component<any, any> {
  constructor(props: IFeedback) {
    super(props);
    this.state = {
      onFilter: false,
      isToggle: false,
      isSearch: false,
      tabSection: false,
    };
  }

  render() {
    const {tabSection} = this.state;
    return (
      <TabBar>
        <View style={s.block}>
          <Index text={'Отклики'} style={{left: 0, marginBottom: 20}} left />
          <BlockTab
            titles={['Активные', 'Без ответа']}
            onClick={(val: boolean) => this.setState({tabSection: val})}
            selected={tabSection}
          />

          {!tabSection ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <Card
                flagged
                feedback
                disLikeAble
                onClick={() => this.props.navigation.navigate('Vacancy')}
              />
              <Card
                feedback
                disLikeAble
                onClick={() => this.props.navigation.navigate('Vacancy')}
              />
              <Card
                feedback
                disLikeAble
                onClick={() => this.props.navigation.navigate('Vacancy')}
                latest
              />
            </ScrollView>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              <Card
                feedback
                disLikeAble
                onClick={() => this.props.navigation.navigate('Vacancy')}
                inviteTitle={'Резюме просмотрено'}
              />
              <Card
                feedback
                disLikeAble
                onClick={() => this.props.navigation.navigate('Vacancy')}
                inviteTitle={'Резюме просмотрено'}
              />
              <Card
                feedback
                disLikeAble
                onClick={() => this.props.navigation.navigate('Vacancy')}
                inviteTitle={'Резюме просмотрено'}
                latest
              />
            </ScrollView>
          )}
        </View>
      </TabBar>
    );
  }
}
