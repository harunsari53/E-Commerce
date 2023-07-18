import {StyleSheet} from 'react-native';
import { colors } from '../../constants/colors';


export const styles = StyleSheet.create({
  linearGradient: {
    paddingVertical: 20,
    borderRadius: 100,
    opacity:0.9,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight:'900',
    textAlign: 'center',
    color: colors.white,
    shadowOpacity: 1,
    shadowColor: colors.black,
  },
});