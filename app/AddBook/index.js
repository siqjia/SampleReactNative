import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal
} from 'react-native';
import { addBook } from './actions';
import { connect } from 'react-redux';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this._addBook = this._addBook.bind(this);
  }

  state = {
    modalVisible: false
  }

  _addBook() {
    this.props.addingBook({ //id is generated at reducer
      title: 'Twilight',
      author: 'Stephenie Meyer',
      thumbnail: 'https://covers.openlibrary.org/w/id/8315303-L.jpg'
    });
    this.props.navigation.navigate('Book List'); //navigate to Book List screen
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Add Book
        </Text>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
        <Button
          title="Add Book"
          onPress={this._addBook}
          onPress={() => {
            this.setModalVisible(true);
          }}
        />
        </Modal>
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
  addingBook: (book) => {
    dispatch(addBook(book)); //dispatch the action addBook
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddBook)