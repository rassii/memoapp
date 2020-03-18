import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import from './main.css';

import BodyText from './src/elements/BodyText';

export default class App extends React.Component {
  render() {
    return (
      <View className="container">

        <View className="appbar">
          <View>
            <Text className="appbarTitle">MEMOT</Text>
          </View>
        </View>

      </View>
    );
  }
}
