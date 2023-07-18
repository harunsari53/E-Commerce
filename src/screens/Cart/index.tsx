import {View, Text, SafeAreaView, Pressable, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Icon} from 'general-components/src';
import {colors} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import {useAppSelector} from '../../store';
import {IProduct} from '../../constants/types';
import {CartProduct} from './components';
import LoadingShop from '../../components/Loader/LoadingShop';
import LoadingCart from '../../components/Loader/LoadingCart';

const CartScreen = () => {
  const cart = useAppSelector(state => state.cart);
  const arr = [...cart];
  const [totalPrice, setTotalPrice] = useState<any>(0);

  const navigation = useNavigation<any>();
  const navigateToBack = () => {
    navigation.canGoBack() && navigation.goBack();
  };

  const onPressToCategories = () => {
    navigation.navigate('Categories');
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [arr]);

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
        <View style={styles.priceContainer}>
          <Text>Total Price: ${totalPrice}</Text>
        </View>
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
