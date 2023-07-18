import {Dimensions, StyleSheet} from 'react-native';
import { colors } from '../../../constants/colors';


const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lemon+90,
  },
  headerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  backIcon: {
  },
  title: {
    fontSize: 25,
    fontVariant: ['small-caps'],
    fontWeight: '800',
    color: colors.darkgrey
  },
  flatList:{
    marginLeft: 10,
  },
 
});

export default styles;
