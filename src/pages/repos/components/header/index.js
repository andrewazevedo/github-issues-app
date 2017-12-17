import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Header = () => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Adicionar repositório"
      placeholderTextColor="#333333"
    />
    <TouchableOpacity>
      <Icon name="plus" size={20} color="#333333" />
    </TouchableOpacity>
  </View>
);

export default Header;
