import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native'
import { connect } from 'react-redux'
import { gray, red, green } from '../utils/colors'


class IndividualDeckView extends Component {

    state = {
        questionIndex: 0,
        questionMode: true,
        correctAnswer: 0,
        questionLength: 0,
        finishMode: false
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Quiz"
        }
    }

    answer = () => {
        this.setState(() => ({questionMode: !this.state.questionMode}));
    }

    correct = (size) => {
        if (this.state.questionIndex < size -1){
            this.setState(() => ({correctAnswer: this.state.correctAnswer + 1}));
            this.setState(() => ({questionMode: true}));
            this.setState(() => ({questionIndex: this.state.questionIndex + 1}));
        }
        else{
            this.setState(() => ({correctAnswer: this.state.correctAnswer + 1}));
            this.setState(() => ({finishMode: true}));
        }

    }

    incorrect = (size) => {
        if (this.state.questionIndex < size -1){
            this.setState(() => ({questionMode: true}));
            this.setState(() => ({questionIndex: this.state.questionIndex + 1}));
        }
       else{
            this.setState(() => ({finishMode: true}));
        }
    }


    render() {

        const { decks } = this.props;
        const { deckTitle } = this.props.navigation.state.params;
        const { questionIndex, questionMode, finishMode, correctAnswer } = this.state;
        const questions = decks[deckTitle].questions;

        return (

            <View style={styles.container}>
                {
                    !finishMode && (
                        <View >
                            <Text> {questionIndex+1} / {questions.length}</Text>

                            {
                                questionMode && (
                                    <View style={styles.questionContainer}>
                                        <Text style={styles.question}> {questions[questionIndex].question}</Text>
                                        <TouchableOpacity onPress={this.answer}>
                                            <Text style={styles.answerLink}>Answer</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }

                            {
                                !questionMode && (
                                    <View style={styles.questionContainer}>
                                        <Text style={styles.question}> {questions[questionIndex].answer}</Text>
                                        <TouchableOpacity onPress={this.answer}>
                                            <Text style={styles.answerLink}>Question</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }

                            <View style={styles.container2}>
                                <TouchableOpacity style={styles.correctBtn} onPress={() => this.correct(questions.length)}>
                                    <Text style={styles.btnText}> Correct </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.inCorrectBtn} onPress={() => this.incorrect(questions.length)}>
                                    <Text style={styles.btnText}> Incorrect</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    )
                }
                {
                    finishMode && (
                        <View>
                            <Text>Correctly answered {correctAnswer } out of { questions.length }. </Text>
                        </View>
                    )
                }
            </View>


        )

    }


}

function mapStateToProps (decks) {
    return {
        decks: decks
    }
}

export default connect(mapStateToProps)(IndividualDeckView)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    questionContainer: {
        marginTop: 50,
        alignItems: 'stretch'
    },
    container2: {
      marginTop: 70
    },
    question: {
        fontSize: 40,
        textAlign: "center"
    },
    answerLink: {
        fontSize:20,
        color: red,
        textAlign: "center"
    },
    correctBtn: {
        backgroundColor: green,
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 5,
        margin: 10,
        justifyContent: 'space-around'
    },
    inCorrectBtn: {
        backgroundColor: red,
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 5,
        margin: 10,
        justifyContent: 'space-around'
    },
    btnText: {
        color: '#fff',
        textAlign: "center"
    }
})