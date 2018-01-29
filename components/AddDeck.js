import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import { getMetricMetaInfo } from "../utils/helpers";
import SubmitButton from "./SubmitButton"
import { saveDeckTitle } from "../utils/api"
import { connect } from 'react-redux'
import { deckAction } from '../action'


class AddDeck extends Component {

    state = {
        title: null
    }

    submit = () => {
        const { title } = this.state;
        const { decks } = this.props;
        const data = {
                title: title,
                questions: []
        }

        if (this.state.title === null){
            Alert.alert(
                'Alert!',
                'Missing Title',
                [

                    {text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                ],
                { cancelable: false }
            )
        }
        else{
            const key = title;
            decks[key] = data;
            saveDeckTitle({ key, data }).then(() => {
                this.props.deckAction(decks);
                this.setState({ title: null});
                this.props.navigation.goBack()
                this.props.navigation.navigate(
                    'DeckDetail',
                    { deckTitle: key}
                )

            });
        }
    }

    render() {

        const { title } = this.state;

        return (
            <View style={styles.container}>

                <View>
                    <Text style={styles.text}> { getMetricMetaInfo('addDeck').message } </Text>
                </View>
                <View>
                    <TextInput style={styles.textInput} placeholder={"Deck title"} onChangeText={(text) => this.setState({title: text})} />
                </View>
                <View>
                    <SubmitButton onPress={this.submit} name="submit"/>
                </View>
            </View>
        )
    }
}


const mapStateToProps = decks=> ({decks: decks});

export default connect(mapStateToProps, {deckAction})(AddDeck)


const styles = StyleSheet.create({

    // row:{
    //     //flexDirection: 'row',
    //     flex: 1,
    //     justifyContent: 'center'
    // },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "white",
        justifyContent: 'space-around'
    },
    textInput: {
        margin: 15,
        height: 40,
        borderColor: '#E53224',
        borderWidth: 1,
        paddingLeft:30
    },
    text: {
        fontSize: 50,
        textAlign: 'center'
    }
})