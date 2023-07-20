import React, {useEffect, useRef, useState} from 'react';
import {View, Text, SafeAreaView, Pressable, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Button, Icon} from 'general-components/src';
import {CartProduct} from './components';
import LoadingCart from '../../components/Loader/LoadingCart';

import {useAppDispatch, useAppSelector} from '../../store';
import {IProduct} from '../../constants/types';

import styles from './style';
import {colors} from '../../constants/colors';
import {clearCart} from '../../store/slices/cartSlice';

const CartScreen = () => {
  const cart = useAppSelector(state => state.cart);
  const arr = [...cart];
  const dispatch = useAppDispatch();

  const [totalPrice, setTotalPrice] = useState<any>(0);

  useEffect(() => {
    calculateTotalPrice();
  }, [arr]);

  const navigation = useNavigation<any>();
  const navigateToBack = () => {
    navigation.canGoBack() && navigation.goBack();
  };

  const onPressToCategories = () => {
    navigation.navigate('Categories');
  };

  const renderItem = ({item}: {item: {item: IProduct; amount: number}}) => (
    <CartProduct item={item} />
  );

  const calculateTotalPrice = () => {
    let price = 0;
    arr.map(x => {
      const {item = {}, amount = 1}: any = x ?? {};
      price += Number(item?.price) * Number(amount);
    });
    setTotalPrice(price);
  };

  const onClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable style={styles.icon} onPress={navigateToBack}>
          <Icon name="chevron-back : ion" size={30} color={colors.darkgrey} />
        </Pressable>
        <Text style={styles.title}>{'Cart'}</Text>
      </View>
      <FlatList data={cart} renderItem={renderItem} />
      {totalPrice > 0 && (
        <>
          <Pressable style={styles.deleteAll} onPress={onClearCart}>
            <Icon name="trash : entypo" size={25} color={colors.darkgrey} />
          </Pressable>
          <View style={styles.priceContainer}>
            <Text>Total Price: ${totalPrice}</Text>
          </View>
        </>
      )}
      {totalPrice == 0 && (
        <View style={styles.loadingContainer}>
          <LoadingCart />
          <View style={styles.buttonContainer}>
            <Text style={styles.emptyText}>
              Your cart is empty, please click below to add items to your cart
            </Text>
            <Button
              text="Go To Categories"
              onPress={onPressToCategories}
              containerStyle={styles.button}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;
