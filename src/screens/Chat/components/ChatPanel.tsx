/*
 * GennadySX @2020
 */

import React, {useEffect, useRef} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Keyboard,
} from 'react-native';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import {Icons} from '../../../helpers/Assets';
import {IconsSvg} from '../../../helpers/IconsSVG';
import {Height, Width} from "../../../helpers/Normalizer";

interface ImessageList {
  me: boolean;
  text: string;
}

export interface IChatPanel {
  messageList: ImessageList[];
  onBack?: () => void;
}

export default function ChatPanel(props: IChatPanel) {
  const [val, setVal] = React.useState('');
  const [messageList, setMessageList] = React.useState(props.messageList);
  const scrollViewRef = React.useRef();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        scrollViewRef.current.scrollToEnd({animated: true});
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        scrollViewRef.current.scrollToEnd({animated: true});
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const newMessage = () => {
    if (val) {
      Promise.resolve(
        setMessageList([
          ...messageList,
          {
            text: val,
            me: true,
          },
        ]),
      ).then(() => setVal(''));
    }
  };

  return (
    <View style={s.block}>
      {React.createElement(IconsSvg.Background_Chat, s.background)}
      <Container style={s.header}>
        <Header
          backClick={() => props.onBack && props.onBack()}
          title={'Компания'}
          style={{marginBottom: 20}}
        />
      </Container>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({animated: true})
        }
        style={s.messageListContainer}>
        <Container>
          {messageList.map((message: any, index: number) => (
            <View style={[s.messageList, message.me && s.left]} key={index}>
              <Text style={s.message}>{message.text}</Text>
            </View>
          ))}
        </Container>
      </ScrollView>

      <Container style={s.bottomPanel}>
        <TextInput
          placeholder={'Введите сообщение'}
          value={val}
          onChangeText={setVal}
          style={s.inMessage}
        />
        <TouchableOpacity style={s.sendBtn} onPress={() => newMessage()}>
          {React.createElement(IconsSvg.SendIcon, {style: s.sendBtnIcon})}
        </TouchableOpacity>
      </Container>
    </View>
  );
}

const s = StyleSheet.create({
  block: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'column',
  },
  container: {},
  header: {},
  title: {},
  messageListContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  messageList: {
    alignSelf: 'flex-start',
    marginBottom: 20,
    width: '80%',
    minHeight: 40,
    position: 'relative',
    zIndex: 99,
  },
  left: {
    alignSelf: 'flex-end',
  },
  message: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    elevation: 2,
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
    padding: 15,
  },
  bottomPanel: {
    flexDirection: 'row',
    marginBottom: 20,
    position: 'relative',
    zIndex: 999999,
  },
  inMessage: {
    paddingLeft: 20,
    paddingRight: 55,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(72, 19, 128, 0.2)',
    width: '100%',
    backgroundColor: 'rgba(72, 19, 128, 0.03)',
    fontFamily: 'Manrope-Medium',
  },
  sendBtn: {
    position: 'absolute',
    right: 25,
    top: 5,
  },
  sendBtnIcon: {},
  background: {
    position: 'absolute',
    zIndex: -1,
    height: Height - 100,
    width: Width,
    bottom: 0,
  }
});
