import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View
  } from 'react-native';
//import { navigation } from 'react-navigation';
import { Icon } from 'react-native-elements';

export default class BookcaseItem extends Component {
    _onEditBook = () => {
      // let id = this.props.bookObj.id;
      this.props.navigation.navigate('EditBook', {bookObj: this.props.bookObj});
    }

    render() {
      const bookObj = this.props.bookObj
        return(
          <TouchableOpacity onPress={this._onEditBook}>
            <View style={styles.rowContainer}>
              <Image source={{uri: bookObj.thumbnail}}
              style={styles.thumbnail}
              resizeMode="contain" />
              <View style={styles.rowText}>
                <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
                  {bookObj.title}
                </Text>
                <Text style={styles.author} numberOfLines={1} ellipsizeMode ={'tail'}>
                  {bookObj.author}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 100,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 4,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#CCC',
    shadowOpacity: 1.0,
    shadowRadius: 1
  },
  title: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777'
  },
  author: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: '#777'
  },
  thumbnail: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  }
  });


