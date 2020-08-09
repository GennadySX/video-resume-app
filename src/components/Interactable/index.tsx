import React from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import {Height, Width} from '../../helpers/Normalizer';

import InteractableX from 'react-native-interactable-reanimated';

export interface IInteractable {
  children: React.ReactChildren | React.ReactChild;
  maxHeight: number;
  initHeight: number;
  active?: boolean;
}

export default class Interactable extends React.Component<any, any> {
  constructor(props: IInteractable) {
    super(props);
    this.state = {};
  }

  componentDidMount(): void {
    console.log('logging ', this.props);
  }

  render() {
    const {active, maxHeight, initHeight, children} = this.props;
    return (
      <InteractableX.View
        ref={(v: any) => (this.bs = v)}
        verticalOnly={true}
        dragToss={0.5}
        snapPoints={[{y: 30}, {y: 0}, {y: maxHeight}]}
        boundaries={{top: 0, bounce: 0.5}}
        initialPosition={{y: 0}}
        style={[styles.container]}>
        {children}
      </InteractableX.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    paddingTop: 40,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    position: 'absolute',
    left: Width * -0.025,
    top: -200,
    paddingBottom: 100,
    shadowColor: 'lightgray',
    elevation: 7,
    paddingLeft: 10,
    paddingRight: 10,
  },
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
