import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import CustomButton from '../CustomButton/CustomButton';

const CommentCard = ({value, setValue, onPublish}) => {
  return (
    <View style={styles.cartao}>
      <TextInput
        style={styles.area}
        multiline
        numberOfLines={2}
        onChangeText={setValue}
        value={value}
      />

      <View style={styles.botoes}>
        <CustomButton
          style={styles.publicar}
          texto={'Publicar'}
          eventoPressionar={onPublish}
          tipo="SMALL"
          bgColor={'#6FE115'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',

    marginBottom: 10,
  },
  area: {
    padding: 10,
    textAlignVertical: 'top',
  },
  botoes: {
    flexDirection: 'row-reverse',
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default CommentCard;
