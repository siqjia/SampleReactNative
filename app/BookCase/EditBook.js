import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';

export default class EditBook extends Component {
  render() {
    const {navigation} = this.props;
    const bookObj = navigation.getParam('bookObj', {});
    const itemId = bookObj.id;
    const title = bookObj.title;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          EditBook #{JSON.stringify(itemId)}
        </Text>
        <Text style={styles.title}>
          {title}
        </Text>
        <Button
          title="Back to books"
          onPress={() => this.props.navigation.navigate('Tabs')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});