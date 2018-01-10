import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Filter = () => (
  <View style={styles.container}>
    <TouchableOpacity>
      <Text style={styles.title}>Todas</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.title}>Abertas</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.title}>Fechadas</Text>
    </TouchableOpacity>
  </View>
);

export default Filter;
