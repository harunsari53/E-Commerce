import React, {useEffect, useState} from 'react';
import LoadingWave from '../../components/Loader/LoadingWave';
import categoryService from '../../services/category-service';
import {
  FlatList,
  LogBox,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import {Icon} from 'general-components/src';
import {colors} from '../../constants/colors';
import {Category} from './components';
import {ICategories, ICategory} from '../../constants/types';

LogBox.ignoreAllLogs();

export default function Categories() {
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategories>([]);
  const navigation = useNavigation<any>();

  const onGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    setLoading(true);
    categoryService
      .getCategories()
      .then(res => {
        const arr: ICategories = [];
        let obj: ICategory = {icon: '', name: ''};
        res?.data?.map((i: string) => {
          obj = {
            name: i,
            icon: i,
          };
          arr.push(obj);
        });
        setCategories(arr);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  const navigateToCart = () => {
    navigation.navigate('Cart');
  };

  const renderCategories = ({item}: {item: ICategory}) => (
    <Category item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading && <LoadingWave />}
      {!loading && (
        <View style={styles.headerContainer}>
          <Pressable onPress={onGoBack}>
            <Icon name="chevron-back : ion" size={30} color={colors.darkgrey} />
          </Pressable>
          <Text style={styles.title}>Categorıes</Text>
          <Pressable onPress={navigateToCart}>
            <Icon name="cart : ion" size={30} color={colors.darkgrey} />
          </Pressable>
        </View>
      )}
      <FlatList
        data={categories}
        renderItem={renderCategories}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
