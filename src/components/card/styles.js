import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: metrics.cardHeight,
    borderRadius: 5,
    padding: 20,
    marginBottom: 10,
    backgroundColor: colors.white,
  },
  contentLeft: {
    flexDirection: 'row',
  },
  image: {
    width: 45,
    height: 45,
    marginRight: 10,
  },
  textsContainer: {
    marginLeft: 50,
  },
  title: {
    fontSize: 16,
    color: colors.dark,
    fontWeight: '800',
    paddingBottom: 5,
  },
  subTitle: {
    color: colors.grey,
  },
  arrowIcon: {
    alignSelf: 'center',
  },
});

export default styles;
