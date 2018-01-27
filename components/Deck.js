import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native'
import { connect } from 'react-redux'
import { gray } from '../utils/colors'


class Deck extends Component {

    static navigationOptions = ({ navigation }) => {
        const { deckTitle } = navigation.state.params;

        return {
            title: deckTitle
        }
    }

    addCard = () => {
        const { deckTitle } = this.props.navigation.state.params;
        this.props.navigation.navigate(
            'AddQuestion',
            { deckTitle: deckTitle}
        )
    }

    startQuiz = () => {
        const { deckTitle } = this.props.navigation.state.params;
        this.props.navigation.navigate(
            'IndividualDeckDetail',
            { deckTitle: deckTitle}
        )
    }

    render(){
        const { decks } = this.props;
        const { deckTitle } = this.props.navigation.state.params

        return(

            <View>
                <View style={styles.container}>

                    <Text style={styles.title}>{decks[deckTitle].title}</Text>
                    <Text style={styles.cards}>{decks[deckTitle].questions.length} cards</Text>

                    <View>
                        <TouchableOpacity style={styles.btn} onPress={this.addCard}>
                            <Text style={styles.btnText}> Add Card</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn} onPress={this.startQuiz}>
                            <Text style={styles.btnText}> Start Quiz</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        )
    }
}

function mapStateToProps (decks) {
    return {
        decks: decks
    }
}

export default connect(mapStateToProps)(Deck)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        //justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    title: {
        flexDirection: "row",
        fontSize: 40,
        textAlign: "center"
    },
    cards: {
        fontSize: 20,
        color: gray,
        paddingBottom: 50,
        textAlign: "center"
    },
    btn: {
        backgroundColor: '#E53224',
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        height:40
    },
    btnText: {
        color: '#fff'
    }
})