import {
  Alert,
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import ImageSlider from '../../../components/ImageSlider';
import productService from '../../../services/product-service';
import {IProduct} from '../../../constants/types';
import {Button, Icon} from 'general-components/src';
import {useAppDispatch, useAppSelector} from '../../../store';
import {addToCart} from '../../../store/slices/cartSlice';
import {colors} from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {SimilarProduct} from './components';
import {saveProducts} from '../../../store/slices/productSlice';

export default function ProductDetail({route}: any) {
  const {id = -1} = route?.params ?? {};
  const [item, setItem] = useState<IProduct>();
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const similarProducts = useAppSelector(state => state.product);

  useEffect(() => {
    getData();
  }, [id]);

  const getData = () => {
    productService
      .getProductDetail(id)
      .then((res: any) => {
        const arr = res?.data?.images?.map((x: string) => {
          return {url: x};
        });
        dispatch(saveProducts(res?.data?.products));
        setItem({...res?.data, images: arr});
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {});
  };

  const addToBasket = () => {
    dispatch(addToCart(item));
  };

  const navigateToBack = () => {
    navigation.canGoBack() && navigation.goBack();
  };
  
  const navigateToCart = () => {
    navigation.navigate('Cart');
  };

  const navigateToSimilar = (item: IProduct) => {
    navigation.navigate('ProductDetail', {id: item?.id});
  };

  const renderItem = ({item}: {item: IProduct}) => (
    <SimilarProduct item={item} onPress={navigateToSimilar} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Pressable onPress={navigateToBack}>
            <Icon name="chevron-back : ion" size={30} color={colors.darkgrey} />
          </Pressable>
          <Pressable onPress={navigateToCart}>
            <Icon name="cart : ion" size={30} color={colors.darkgrey} />
          </Pressable>
        </View>
        <ImageSlider images={item?.images ?? []} />
        <View style={styles.brandContainer}>
          <Text style={styles.title}>
            {item?.brand} {item?.title}
          </Text>
        </View>
        <Text style={styles.description}>{item?.description}</Text>
        <View style={styles.priceButtonRow}>
          <View style={styles.priceContainer}>
            <Icon name="price-tag : entypo" size={25} color={colors.darkgrey} />
            <Text style={styles.price}>{item?.price}$</Text>
          </View>
          <Button
            text="Add To Cart"
            onPress={addToBasket}
            ph={75}
            pv={10}
            mr={10}
            backgroundColor={colors.lightgrey}
          />
        </View>
        <TouchableOpacity>
          <View style={styles.flatlist}>
            <FlatList
              data={similarProducts.filter((x: any) => x.id != item?.id)}
              renderItem={renderItem}
              horizontal
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
