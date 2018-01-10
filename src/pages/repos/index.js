import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Card from 'components/card';
import Header from './components/header';

import styles from './styles';

class Repositories extends Component {
  static navigationOptions = {
    header: props => <Header {...props} />,
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Card
          title="rocketnative"
          subTitle="RocketSeat"
          onPress={() => this.props.navigation.navigate('reposIssues')}
        />
      </ScrollView>
    );
  }
}

export default Repositories;
