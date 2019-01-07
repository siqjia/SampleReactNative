import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {editBook} from './actions';
import {connect} from 'react-redux';

class EditBook extends Component {

  constructor(props) {
    super(props);
    this._editBook = this._editBook.bind(this);
    this._navigateToTabs = this._navigateToTabs.bind(this);
  }

  _editBook(){
    this.props.editBook({
      id: 1,
      title: 'The Goblet of Fire',
      author: 'J. K. Rowling',
      thumbnail: 'https://covers.openlibrary.org/w/id/7984916-M.jpg'
    });
    this.props.navigation.navigate('Tabs');
  }

  _navigateToTabs(){
    this.props.navigation.navigate('Tabs');
  }

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
          onPress={this._navigateToTabs}
        />
        <Button
          title="Edit Book"
          onPress={this._editBook}
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

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = (dispatch) => ({
  editBook: (book) => {
    dispatch(editBook(book)); //dispatch the action editBook
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(EditBook)