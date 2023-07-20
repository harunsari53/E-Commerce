import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lemon + 70,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
    paddingVertical: 10,
    borderBottomColor: colors.darkgrey,
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 25,
    fontVariant: ['small-caps'],
    fontWeight: '800',
    color: colors.darkgrey,
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 20,
  },
  priceContainer: {
    marginTop: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: colors.orange,
    backgroundColor: colors.darkgrey + 60,
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 30,
    alignSelf: 'center',
    width: '50%',
  },
  loadingContainer: {
    width: width,
    height: height,
  },
  buttonContainer: {
    padding: 10,
    justifyContent: 'center',
    height: height * 0.3,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    color: colors.darkgrey,
    padding: 15,
  },
  button: {
    marginTop: 20,
    padding: 15,
    alignSelf: 'center',
    backgroundColor: colors.lightgrey,
    shadowOpacity: 1,
    shadowColor: colors.black,
  },
  deleteAll: {
    position: 'absolute',
    top: 60,
    right: 20,
  },
  actionSheetContainer: {
    height: 500,
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancel: {
    width: '95%',
    height: 40,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.red,
  },
  cancelText: {
    color: colors.red,
  },
});

export default styles;
