import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 54 + metrics.statusBarHeight,
    paddingTop: metrics.statusBarHeight,
    paddingHorizontal: metrics.statusBarHeight,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 16,
    color: colors.dark,
    fontWeight: '800',
  },
});

export default styles;
