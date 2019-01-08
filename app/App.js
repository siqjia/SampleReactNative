import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createRootNavigator,AppContainer } from './router';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import Reducers from './BaseReducer';
import thunk from 'redux-thunk';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(Reducers, composeEnhancers(applyMiddleware(...middleware)));

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
