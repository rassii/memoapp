import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './main.css';

import BodyText from './src/elements/BodyText';

export default class App extends React.Component {
  render() {
    return (
      <View className={styles.container}>

        <View style={styles.appbar}>
          <View>
            <Text style={styles.appbarTitle}>MEMOT</Text>
          </View>
        </View>

        <View style={styles.memoList}>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>

        </View>

        <View>
          <Text>+</Text>
        </View>

      </View>
    );
  }
}
