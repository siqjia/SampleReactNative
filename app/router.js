import React, { Component } from 'react';
import { Dimensions, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Bookcase from './BookCase';
import Explore from './Explore';
import AddBook from './AddBook';
import Lists from './Lists';
import Profile from './Profile';
import EditBook from './EditBook';

let screen = Dimensions.get('window');

//createBottomTabNavigator and createStackNavigator function returns a React component
//so we can export it directly

const Tabs = createBottomTabNavigator({
    'Book List': {
      screen: Bookcase,
      navigationOptions: {
        tabBarLabel: 'Bookcase',
        tabBarIcon: ({ tintColor }) => <Icon name="open-book" type="entypo" size={28} color={tintColor} />
      },
    },
    'Explore': {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: 'Explore',
        tabBarIcon: ({ tintColor }) => <Icon name="explore" size={28} color={tintColor} />
      },
    },
    'Add Book': {
      screen: AddBook,
      navigationOptions: {
        tabBarLabel: 'Add Book',
        tabBarIcon: ({ tintColor }) => <Icon name="ios-add-circle-outline" type="ionicon" size={28} color={tintColor} />
      },
    },
    'Lists': {
      screen: Lists,
      navigationOptions: {
        tabBarLabel: 'Lists',
        tabBarIcon: ({ tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />
      },
    },
    'Profile': {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name="face" size={28} color={tintColor} />
      },
    },
  },
  {initialRouteName: 'Book List'}
);

Tabs.navigationOptions = ({navigation}) => {
      const title = navigation.state.routes[navigation.state.index].routeName;
      const headerStyle = styleTitle(title);
      return {headerStyle, title};
  }

styleTitle = (title) => {
  let headerTitleStyle = {};
  switch(title){
    case 'Book List' :
    headerTitleStyle = { backgroundColor : 'red'};
    break;
    case 'Explore' :
    headerTitleStyle = { backgroundColor : 'blue'};
    break;
    case 'Add Book' :
    headerTitleStyle = { backgroundColor : 'green'};
    break;
    case 'Lists' :
    headerTitleStyle = { backgroundColor : 'orange'};
    break;
    case 'Profile' :
    headerTitleStyle = { backgroundColor : 'black'};
    break;
  }
  return headerTitleStyle;
}

const rootNavigator = createStackNavigator({
  // Tabs: {
  //   screen: Tabs,
  //   navigationOptions : ({navigation}) => {
  //     const title = navigation.state.routes[navigation.state.index].routeName;
  //     return {title};
  //   }
  // },
  Tabs,
  EditBook: {
    screen: EditBook,
    navigationOptions: ({navigation}) => ({
      gesturesEnabled: false,
      title: 'Edit Book',
    }),
  },
},
)


export const AppContainer = createAppContainer(rootNavigator);