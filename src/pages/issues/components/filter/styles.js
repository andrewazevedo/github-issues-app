import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 30,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: colors.darkGrey,
  },
  title: {
    color: colors.darkerGrey,
  },
});

export default styles;
