import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { addBook } from './actions';
import BookStatusObj from '../utils/constants';
import ModalAlert from '../Components/modal'

class AddBook extends Component {
  constructor(props) {
    super(props);
    this._addBook = this._addBook.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.itemAction = this.itemAction.bind(this);

    this.state = {
      // modalVisible: false,
      title: '',
      author: '',
      imageUrl: ''
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

  toggleModal(visible) {
    this.setState({ modalVisible: visible });
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

  _addBook() {
    if (this.state.title === '' || this.state.author === '' || this.state.imageUrl === ''){
      const bookStatus = 'add book empty input';
      this.itemAction({ 
        type: BookStatusObj[bookStatus].type, 
        title: BookStatusObj[bookStatus].title, 
        message: BookStatusObj[bookStatus].message 
      });
    } else {
      this.props.addingBook({ //id is generated at reducer
        title: this.state.title,
        author: this.state.author,
        thumbnail: this.state.imageUrl
      });
      this.props.navigation.navigate('Reading List', {bookStatus: "book added"}); //navigate to Reading List screen
    }
    // this.toggleModal(true); //activate ModalAlert when visbility set to true

    // this.itemAction({type:'success', title:'Success', message:'Book has been added!'});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Please enter the book details below:
        </Text>

        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Book Title"
          placeholderTextColor="#a5a5a5"
          autoCapitalize="none"
          onChangeText={this.handleTitle} />
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Author"
          placeholderTextColor="#a5a5a5"
          autoCapitalize="none"
          onChangeText={this.handleAuthor} />
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Book Cover Image Url"
          placeholderTextColor="#a5a5a5"
          autoCapitalize="none"
          onChangeText={this.handleImageUrl} />

        <Button
          title="Add Book"
          buttonStyle={{
            backgroundColor: "#00aced",
            width: 110,
            height: 40,
            borderRadius: 13
          }}
          containerStyle={{
            alignItems: "center"
          }}
          onPress={this._addBook}
        />

        <DropdownAlert
          ref={ref => this.dropdown = ref}
          closeInterval={2000}
          showCancel={true}
        />

        {/* <ModalAlert 
          modalVisible = {this.state.modalVisible}
          modalMsg = 'Book has been added!'
          toggleModal = {this.toggleModal}
        /> */}
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
    paddingTop: 23
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
  addingBook: (book) => {
    dispatch(addBook(book)); //dispatch the action addBook
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddBook)