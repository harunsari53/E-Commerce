import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  image: {
    width: width,
    height: width,
  },
});

export default styles;
