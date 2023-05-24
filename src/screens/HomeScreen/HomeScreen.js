import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import FeedSection from '../../components/FeedSection/FeedSection';

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.tela}>
      <View style={styles.root}>
        <FeedSection />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tela: {},
  root: {
    padddingHorizontal: 10,
    paddingTop: 20,
  },
});

export default HomeScreen;
