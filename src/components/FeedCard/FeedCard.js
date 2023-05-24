import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CommentPoster from '../CommentPoster/CommentPoster';

const FeedCard = ({comentario, pathImage = null, pathLocation = null}) => {
  return (
    <View style={styles.cartao}>
      <CommentPoster />
      <Text style={styles.legenda}>{comentario}</Text>
      <View style={styles.imagem} />
    </View>
  );
};

const styles = StyleSheet.create({
  cartao: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: 'white',

    borderWidth: 1,
    borderColor: '#BBBBBB',
    borderRadius: 5,

    alignItems: 'flex-start',
  },
  legenda: {
    fontSize: 16,
  },
  imagem: {
    alignSelf: 'center',
    width: '80%',
    height: 150,
    maxHeight: 400,
    backgroundColor: 'grey',
  },
});

export default FeedCard;
