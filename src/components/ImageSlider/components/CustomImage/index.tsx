import {View, Text, Pressable} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import styles from './style';

export default function CustomImage({item, onPressed}: {item: any, onPressed?: any}) {
  return (
    <Pressable key={item?.url + Math.random().toString()} onPress={onPressed}>
      <FastImage
        //resizeMode="contain"
        style={styles.image}
        source={{
          uri: item?.url,
        }}
      />
    </Pressable>
  );
}
