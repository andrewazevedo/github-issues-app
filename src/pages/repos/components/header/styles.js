import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 54 + metrics.statusBarHeight,
    paddingTop: metrics.statusBarHeight,
    paddingHorizontal: metrics.statusBarHeight,
    backgroundColor: colors.white,
  },
  input: {
    height: 35,
    flexGrow: 1,
    marginRight: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 12,
    backgroundColor: colors.darker,
  },
});

export default styles;
