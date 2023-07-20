import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

import FastImage from 'react-native-fast-image';

import {useAppDispatch} from '../../../../store';
import {
  decreaseToAmount,
  increaseToAmount,
} from '../../../../store/slices/cartSlice';

import {IProduct} from '../../../../constants/types';
import styles from './style';

const CartProduct = ({item}: {item: {item: IProduct; amount: number}}) => {
  const {item: _item, amount: _amount} = item;

  const dispatch = useAppDispatch();

  const decreaseAmount = () => {
    dispatch(decreaseToAmount(_item));
  };
  const increaseAmount = () => {
    dispatch(increaseToAmount(_item));
  };

  return (
    <View style={styles.container}>
      <FastImage source={{uri: _item?.thumbnail}} style={styles.image} />
      <View style={styles.midContainer}>
        <Text style={styles.brand} numberOfLines={1}>
          {_item?.brand + ' - ' + _item?.title}
        </Text>
        <View style={styles.priceContainer}>
          <Text>{_amount * _item?.price}$</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Pressable onPress={decreaseAmount} style={styles.box}>
          <Text>-</Text>
        </Pressable>
        <Text style={{width: 20, textAlign: 'center'}}>{_amount}</Text>
        <Pressable onPress={increaseAmount} style={styles.box}>
          <Text>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CartProduct;
