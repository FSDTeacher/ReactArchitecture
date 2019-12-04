/*
 * File Description
 * Main App Screen
 *
 * Created on Thu Sep 19 2019
 * Created by: Gautam Sharma
 * Copyright (c) 2019
 */

//import liraries
import React from 'react';
import BaseComponent from '@library/component/base/BaseComponent';
import {View, Text, Button} from 'react-native';
import Styles from './Styles';

import MainViewModel from './MainViewModel';

import {connect} from 'react-redux';
import Utils from '../../library/utility';

// create a component
class MainApp extends BaseComponent {
  constructor(props) {
    super(props);
    mainViewModel = new MainViewModel(this);
  }

  showError(msg) {
    Utils.Toast.showToast(msg);
  }

  render() {
    return (
      <View style={Styles.container}>
        <Button
          onPress={() => mainViewModel.onIncrementPress()}
          title="Increase Count"
          color="#841584"
          accessibilityLabel="Increase Count"
        />

        <Text>{this.props.count}</Text>

        <Button
          onPress={() => mainViewModel.onDecrementPress()}
          title="Decrease Count"
          color="#841584"
          accessibilityLabel="Decrease Count"
        />
      </View>
    );
  }
}

//make this component available to the app
const mapStateToProps = state => ({
  count: state.main.count,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainApp);
