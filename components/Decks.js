import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet,FlatList, ScrollView, TouchableOpacity  } from 'react-native'
import { connect } from 'react-redux'
import { getDecks, saveDeckTitle } from "../utils/api"
import { getDailyReminderValue } from "../utils/helpers";
import { deckAction } from '../action'
import { gray } from '../utils/colors'



function DeckView( { title, questionsLength }) {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.cards}>{questionsLength} cards</Text>
            <View style={styles.line} />
        </View>

    )
}

class Decks extends Component {

    state = {
        React: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    }

    componentDidMount() {

        const { React, JavaScript  } = this.state;
        const { dispatch } = this.props;

        let key = React.title;
        let data = React;


        //save initial date
        saveDeckTitle({ key, data }).then(() => {

            getDecks()
                .then(function(decks){
                    dispatch(deckAction({decks}));
                })

        });

        data = JavaScript
        key = data.title
        //save initial date
        saveDeckTitle({ key, data }).then(() => {

            getDecks()
                .then(function(decks){
                    //console.log(decks);
                    dispatch(deckAction({decks}));
                })

        });
    }


    render() {

        const { decks } = this.props;
        return (
            <ScrollView>
                { Object.keys(decks).length > 0 && (
                    Object.keys(decks).map((k) =>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate(
                                'DeckDetail',
                                { deckTitle: decks[k].title}
                            )} key={decks[k].title}>
                                <DeckView title={decks[k].title} questionsLength ={decks[k].questions.length}/>
                            </TouchableOpacity>
                         )
                )}
            </ScrollView>
        )
    }
}

const mapStateToProps = decks=> ({decks: decks});

export default connect(mapStateToProps)(Decks);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        //justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        flexDirection: "row",
        fontSize: 40
    },
    cards: {
        fontSize: 20,
        color: gray,
        paddingBottom: 50
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: 400,
    }
})