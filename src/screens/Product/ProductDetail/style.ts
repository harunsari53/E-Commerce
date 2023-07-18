import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lemon + 70,
  },
  brandContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    alignSelf: 'center',
  },
  brand: {
    fontSize: 40,
    fontWeight: '500',
    fontVariant: 'small-caps',
    color: colors.white,
    shadowOpacity: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.darkgrey,
    marginVertical: 5,
  },
  description:{
    fontSize: 13,
    color: colors.darkgrey,
    marginVertical: 5,
  },
  priceButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  priceContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  price:{
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 10,
    color: colors.darkgrey,
  },
  flatlist:{
    marginTop: 10,
  }
});

export default styles;
