import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CommentPoster = ({
  criadorPost = 'Usuario desconhecido',
  data = 'Data',
}) => {
  return (
    <View style={styles.root}>
      <View style={styles.perfil} />
      <View style={styles.textos}>
        <Text>{criadorPost}</Text>
        <Text>{data}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flexDirection: 'row', marginVertical: 5},
  perfil: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'grey',
  },
  textos: {flexDirection: 'column', marginHorizontal: 10},
  criador: {},
  data: {},
});
export default CommentPoster;
