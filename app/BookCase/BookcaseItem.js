import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View
  } from 'react-native';
import { Icon } from 'react-native-elements';

export default class BookcaseItem extends Component {
    constructor(props) {
      super(props);
    }

    _onDeleteBook = () => { //called by <Icon/> component in the render
      this.props._onDeleteBook(this.props.bookObj); //pass _onDeleteBook function from parent component using this.props
      //don't need to navigate as alr on Book List screen
    }

    _onEditBook = () => {
      // let id = this.props.bookObj.id;
      this.props.navigation.navigate('EditBook', {bookObj: this.props.bookObj});
    }

    _renderItem = ({item}) => (
      <BookcaseItem
        bookObj={item}
        navigation={this.props.navigation}
      />
    );

    render() {
      const bookObj = this.props.bookObj;
        return(
          //assign the method _onEditBook to onPress method
          //use this. as it is within a class
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
              <Icon reverse name='delete' color='#00aced' size={28} onPress={this._onDeleteBook}/>
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


