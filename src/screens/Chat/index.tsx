import React from 'react';
import {View, ScrollView} from 'react-native';
import BlockTab from './components/BlockTab';
import Index from '../../components/ui/Title';
import Card from './components/SwipeCard';
import TabBar from '../../components/TabBar';
import {feedbackScreenStyle as s} from './styles';
import Search from './components/Search';
import ChatPanel from './components/ChatPanel';
import {messageListJSON} from '../../json/messageList';
import {Height} from '../../helpers/Normalizer';

export interface IChatScreen {}

export default class ChatScreen extends React.Component<any, any> {
  constructor(props: IChatScreen) {
    super(props);
    this.state = {
      onFilter: false,
      isToggle: false,
      isSearch: false,
      tabSection: false,
      isMessagePanel: false,
    };
  }

  openMessagePanel() {
    this.setState({isMessagePanel: !this.state.isMessagePanel});
  }

  render() {
    const {menu, tabSection, isMessagePanel} = this.state;
    return isMessagePanel ? (
      <ChatPanel
        messageList={messageListJSON}
        onBack={() => this.openMessagePanel()}
      />
    ) : (
      <TabBar
        active={menu}
        onClick={(title: string) => this.setState({menu: title})}>
        <View style={{height: Height}}>
          <View style={s.block}>
            <Index text={'Чат'} style={{left: 0, marginBottom: 20}} left />
            <Search />
            <BlockTab
              titles={['Активные', 'Архивные']}
              onClick={(val: boolean) => this.setState({tabSection: val})}
              selected={false}
            />

            {!tabSection ? (
              <ScrollView showsVerticalScrollIndicator={false}>
                <Card new onClick={() => this.openMessagePanel()} />
                <Card onClick={() => this.openMessagePanel()} />
                <Card new onClick={() => this.openMessagePanel()} latest />
              </ScrollView>
            ) : (
              <ScrollView showsVerticalScrollIndicator={false}>
                <Card archive onClick={() => this.openMessagePanel()} />
                <Card archive onClick={() => this.openMessagePanel()} />
                <Card archive onClick={() => this.openMessagePanel()} latest />
              </ScrollView>
            )}
          </View>
        </View>
      </TabBar>
    );
  }
}
