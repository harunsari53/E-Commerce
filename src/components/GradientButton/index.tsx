import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import { colors } from '../../constants/colors';

const GradientButton = ({title, onPress, style}: {title: string, onPress : any, style: any}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: -2}}
        end={{x: 1, y: 4}}
        colors={[colors.purple, colors.lemon, colors.darkblue]}
        style={[styles.linearGradient, style]}>
        <Text style={styles.title}> {title} </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default React.memo(GradientButton);