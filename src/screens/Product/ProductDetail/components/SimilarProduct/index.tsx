import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {IProduct} from '../../../../../constants/types';
import styles from './style';
import FastImage from 'react-native-fast-image';

const SimilarProduct = ({
  item,
  onPress,
}: {
  item: IProduct;
  onPress: (item: IProduct) => void;
}) => {
  console.log(item);

  const _onPress = () => onPress(item);
  
  return (
    <Pressable onPress={_onPress}>
      <FastImage
        source={{uri: item?.thumbnail}}
        style={styles.imageContainer}
      />
    </Pressable>
  );
};

export default SimilarProduct;
