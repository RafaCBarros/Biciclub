import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CommentCard from '../CommentCard/CommentCard';
import FeedCard from '../FeedCard/FeedCard';

const FeedSection = () => {
  const [comentario, setComentario] = useState('');

  const onPublish = () => {
    console.warn(`Comentário: ${comentario}`);
    setComentario('');
  };
  return (
    <View>
      <Text style={styles.titulo}> Feed </Text>
      <CommentCard
        value={comentario}
        setValue={setComentario}
        onPublish={onPublish}
      />
      <View style={styles.cartoes}>
        <FeedCard
          comentario={
            'Fui passear de bicicleta e tirei foto com esse cara de verde!'
          }
        />
        <FeedCard comentario={'Fiz essa rota sensacional hoje gente!'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    marginVertical: 10,
    color: 'black',
  },
  cartoes: {
    marginVertical: 10,
  },
});

export default FeedSection;
