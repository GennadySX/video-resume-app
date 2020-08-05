import React from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';

export interface IAuthScreeen {}

class AuthScreen extends React.Component<any, any> {
  constructor(props: IAuthScreeen) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text> Test Text</Text>
      </View>
    );
  }
}

export default connect()(AuthScreen);
