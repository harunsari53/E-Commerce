import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lemon + 75,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: colors.purple+50,
    textAlign: 'center',
    fontVariant: ['small-caps'],
    marginTop: 10,
    shadowOpacity: 1,
    shadowColor: colors.black,
    shadowRadius: 10
  },
  lottie: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    paddingHorizontal: 50,
    shadowOpacity: 1,
    shadowColor: colors.darkgrey,
  },
  button: {
    marginBottom: 20,
  },
});

export default styles;
