import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  FlatList
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import BookcaseItem from './BookcaseItem';
import { loadBooks, deleteBook } from './actions';
import { connect } from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';
import BookStatusObj from '../utils/constants';

class Bookcase extends Component {
  constructor(props) {
    super(props);
    this.props.showBooksList();
    this.itemAction = this.itemAction.bind(this);
    const books = this.props.books;

    this.state = {
      data: books,
      listData: books
    };
  }

  componentDidUpdate = () => {
    const bookStatus = this.props.navigation.getParam('bookStatus', '');
    if (bookStatus) {
      this.showBookChangeMessage(bookStatus);
    }
  }

  showBookChangeMessage = (bookStatus) => {
    this.itemAction({
      type: BookStatusObj[bookStatus].type,
      title: BookStatusObj[bookStatus].title,
      message: BookStatusObj[bookStatus].message
    });
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

  _onDeleteBook = (deletedBook) => {
    this.props.deletingBook(deletedBook);
    this.props.navigation.navigate('Reading List', { bookStatus: "book deleted" });
  }

  _renderItem = ({ item }) => (
    <BookcaseItem
      bookObj={item}
      navigation={this.props.navigation}
      _onDeleteBook={this._onDeleteBook} //pass _onDeleteBook function to BookcaseItem component
    />
  );

  _keyExtractor = (item, index) => item.id.toString();

  searchFilterFunction = text => {
    let bookListData = this.state.data;
    let bookTitle;
    const newData = bookListData.filter((book)=>{
      bookTitle = book.title.toLowerCase();
      return bookTitle.indexOf(text.toLowerCase()) !== -1;
    })
    this.setState({ listData: newData });
  };

  _clearText = () => {
    this.setState({data: this.props.books});
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Type Here..."
          lightTheme
          icon={{ type: 'font-awesome', name: 'search' }}
          autoCorrect={false}
          onChangeText={text => this.searchFilterFunction(text)}
          onClear={this._clearText}
        />

        <StatusBar
          barStyle="light-content"
        />
        <FlatList
          data={this.state.listData} //state would be state of this component, props would be taking from the store
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
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
    backgroundColor: '#F5FCFF',
  }
});

//link component to data in the store
const mapStateToProps = (state) => ({
  books: state.BookCaseList.books //triggers BookcaseList in BaseReducer
});

//map any changes to the state when action is triggered
const mapDispatchToProps = (dispatch) => ({
  showBooksList: () => {
    dispatch(loadBooks()); //dispatch the action loadBooks
  },
  deletingBook: (deletedBook) => {
    dispatch(deleteBook(deletedBook)); //dispatch the action loadBooks
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Bookcase)