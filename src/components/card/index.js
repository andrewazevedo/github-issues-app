import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles';
import { colors } from 'styles';

const Card = ({ title, subTitle, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.contentLeft}>
      <Image
        source={require('assets/img/repo_image.png')}
        style={styles.image}
      />

      <View styl={styles.textsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
    <Icon
      name="angle-right"
      size={20} color={colors.grey}
      style={styles.arrowIcon}
    />
  </TouchableOpacity>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Card;
