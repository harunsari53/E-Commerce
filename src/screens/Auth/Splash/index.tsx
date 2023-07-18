import {Text, SafeAreaView, ImageBackground, View} from 'react-native';
import React from 'react';
import styles from './style';
import LoadingShop from '../../../components/Loader/LoadingShop';
import GradientButton from '../../../components/GradientButton';

const Splash = ({navigation}: any) => {
  const navToCategory = () => {
    navigation.navigate('Categories');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>E-Commerce</Text>
      <View style={styles.lottie}>
        <LoadingShop />
      </View>
      <View style={styles.buttonContainer}>
        <GradientButton
          onPress={navToCategory}
          title="Explore"
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

export default Splash;
