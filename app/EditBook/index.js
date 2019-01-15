import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import { Button } from 'react-native-elements';
import { editBook } from './actions';
import { connect } from 'react-redux';
import BookStatusObj from '../utils/constants';

class EditBook extends Component {
  constructor(props) {
    super(props);
    this._editBook = this._editBook.bind(this);
    // this._navigateToTabs = this._navigateToTabs.bind(this);
    this.itemAction = this.itemAction.bind(this);

    const { navigation } = this.props;
    const bookObj = navigation.getParam('bookObj', {});

    this.state = {
      itemId: bookObj.id,
      title: bookObj.title,
      author: bookObj.author,
      imageUrl: bookObj.thumbnail
    };
  }

  itemAction(item) {
    switch (item.type) {
      case 'close':
        this.closeAction();
        break;
      default:
        this.dropdown.alertWithType(item.type, item.title, item.message);
    }
  }

  handleTitle = (text) => {
    this.setState({ title: text })
  }
  handleAuthor = (text) => {
    this.setState({ author: text })
  }
  handleImageUrl = (text) => {
    this.setState({ imageUrl: text })
  }

  _editBook() {
    if (this.state.title === '' || this.state.author === '' || this.state.imageUrl === '') {
      const bookStatus = 'edit book empty input';
      this.itemAction({
        type: BookStatusObj[bookStatus].type,
        title: BookStatusObj[bookStatus].title,
        message: BookStatusObj[bookStatus].message
      });
    } else {
      this.props.editBook({
        id: this.state.itemId, //id not editable
        title: this.state.title,
        author: this.state.author,
        thumbnail: this.state.imageUrl
      });
      this.props.navigation.navigate('Reading List', { bookStatus: "book edited" });
    }
  }

  render() {
    const { navigation } = this.props;
    const bookObj = navigation.getParam('bookObj', {});

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Edit Book #{JSON.stringify(bookObj.id)}
        </Text>

        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Book Title"
          placeholderTextColor="#a5a5a5"
          defaultValue={bookObj.title}
          autoCapitalize="none"
          onChangeText={this.handleTitle}
        />
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Author"
          placeholderTextColor="#a5a5a5"
          defaultValue={bookObj.author}
          autoCapitalize="none"
          onChangeText={this.handleAuthor}
        />
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Book Cover Image Url"
          placeholderTextColor="#a5a5a5"
          defaultValue={bookObj.thumbnail}
          autoCapitalize="none"
          onChangeText={this.handleImageUrl}
        />

        <Button
          title="Edit Book"
          buttonStyle={{
            backgroundColor: "#00aced",
            width: 110,
            height: 40,
            borderRadius: 13
          }}
          containerStyle={{
            alignItems: "center"
          }}
          onPress={this._editBook}
        />

        <DropdownAlert
          ref={ref => this.dropdown = ref}
          closeInterval={2000}
          showCancel={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#a5a5a5',
    borderWidth: 1,
    paddingLeft: 10
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

export default connect(mapStateToProps, mapDispatchToProps)(EditBook)