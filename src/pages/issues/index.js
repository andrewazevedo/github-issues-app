import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import Header from 'components/header';
import Card from 'components/card';
import Filter from './components/filter';

import styles from './styles';

class RepositoriesIssues extends Component {
  static navigationOptions = {
    header: props => <Header {...props} />,
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Filter />

        <Card
          title="rocketnative"
          subTitle="RocketSeat"
          onPress={() => {}}
        />
      </ScrollView>
    );
  }
}

export default RepositoriesIssues;
