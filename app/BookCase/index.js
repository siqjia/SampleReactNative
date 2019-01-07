import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList
} from 'react-native';
import BookcaseItem from './BookcaseItem';
import {loadBooks} from './actions';
import {connect} from 'react-redux';

class Bookcase extends Component {
  constructor(props) {
    super(props);
    this.props.showBooksList();
  }

  _renderItem = ({item}) => (
    <BookcaseItem
      bookObj={item}
      navigation={this.props.navigation}
    />
  );

  _keyExtractor = (item, index) => item.id.toString();

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <FlatList
          data={this.props.books} //state would be state of this component, props would be taking from the store
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
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
  books:state.BookCaseList.books //triggers BookcaseList in BaseReducer
});

//map any changes to the state when action is triggered
const mapDispatchToProps = (dispatch) => ({
  showBooksList: () => {
    dispatch(loadBooks()); //dispatch the action loadBooks
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Bookcase)

