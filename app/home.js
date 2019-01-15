import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
            Welcome to Book Management
        </View>
        <View style={styles.body}>
            <View style={styles.bodyContent}>
            <Text style={styles.name}>Welcome to Book Management</Text>
            <Text style={styles.info}>Welcome to Book Management</Text>
            
            <TouchableOpacity style={styles.buttonContainer} onPress={this._onEditProfile}>
                <Text>Login</Text>  
            </TouchableOpacity>              
            <TouchableOpacity style={styles.buttonContainer} onPress={this._onSignOut}>
                <Text>Sign Up</Text> 
            </TouchableOpacity>
            </View>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: "#bce3ff",
      height: 150,
    },
    body: {
      marginTop: 40,
    },
    bodyContent: {
      // flex: 1,
      alignItems: 'center',
      padding: 30,
    },
    name: {
      fontSize: 28,
      color: "#696969",
      fontWeight: "600"
    },
    info: {
      fontSize: 16,
      color: "#00BFFF",
      marginTop: 10
    },
    buttonContainer: {
      marginTop: 10,
      height: 45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 200,
      borderRadius: 30,
      backgroundColor: "#bce3ff",
    },
  });