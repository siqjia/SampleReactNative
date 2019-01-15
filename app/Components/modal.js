import React, { Component } from 'react';
import {
    Modal,
    Text,
    TouchableHighlight,
    View,
    StyleSheet
} from 'react-native';

// export default ModalAlert = (props) => { //static function as it has nothing to do with state, props as param
export default class ModalAlert extends Component {
    constructor(props) { //props passed in from parent component
      super(props);
    }
    render() {
    return (
        <View style={styles.container}>
            <Modal
                animationType = {"fade"}
                transparent = {false}
                visible = {this.props.modalVisible} //pass in from parent component via prop.
                // onRequestClose={() => { alert("Modal has been closed.") }} //required for Android
            >
                <View style = {styles.modal}>
                    <Text>{this.props.modalMsg}</Text>
                    <TouchableHighlight 
                        onPress={(visible) => this.props.toggleModal(!this.props.modalVisible)}>
                        <Text>close</Text>
                    </TouchableHighlight>
                </View>
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
        marginTop: 70
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#66cc99',
        padding: 100
    }
});