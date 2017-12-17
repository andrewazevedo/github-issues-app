import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Icon name="chevron-left" size={20} color="#333333" />
        </TouchableOpacity>
        <Text style={styles.title}>rocketnative</Text>
        <Text />
      </View>
    );
  }
}

export default Header;
