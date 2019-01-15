import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { loadUser } from './actions';
import { connect } from 'react-redux';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  _onEditProfile = () => {
    // this.props.navigation.navigate('EditProfile', {userObj: this.props.userObj});
    this.props.navigation.navigate('EditProfile');
  }

  _onSignOut = () => {
    this.props.navigation.navigate('Reading List'); //To-Do
  }

  render() {
    const userObj = {
      id: 1,
      firstName: 'Joe',
      lastName: 'Dough',
      info: 'UX Designer / Mobile developer',
      bookCount: 7,
      description: 'Hi, nice to meet you. I love to eat Joe and Dough. I think I am handsome.',
      profilePic: 'https://bootdey.com/img/Content/avatar/avatar6.png',
    }

    return (
      <View>
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={{ uri: userObj.profilePic }} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{userObj.firstName} {userObj.lastName}</Text>
            <Text style={styles.info}>{userObj.info}</Text>
            <Text style={styles.bookCount}>{userObj.bookCount} books on my reading list</Text>
            <Text style={styles.description}>{userObj.description}</Text>

            <TouchableOpacity style={styles.buttonContainer} onPress={this._onEditProfile}>
              <Text>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={this._onSignOut}>
              <Text>Sign Out</Text>
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
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 80
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
  bookCount: {
    fontSize: 13,
    color: "#696969",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center'
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

const mapStateToProps = (state) => ({
  users: state.UserProfile.users //triggers UserProfile in BaseReducer
});

const mapDispatchToProps = (dispatch) => ({
  loadingUser: (userCredentials) => {
    dispatch(loadUser(userCredentials));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)