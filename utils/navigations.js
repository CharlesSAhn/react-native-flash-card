import { TabNavigator, StackNavigator } from 'react-navigation'
import AddDeck from '../components/AddDeck'
import Decks from '../components/Decks'
import { purple, white } from "./colors";
import Deck from "../components/Deck"
import IndividualDeckView from "../components/IndividualDeckView"
import AddQuestion from "../components/AddQuestion"

export const Tabs = TabNavigator({
        Decks: {
            screen: Decks,
            navigationOptions:{
                tabBarLabel: 'DECKS'
            }
        },
        AddDeck: {
            screen: AddDeck,
            navigationOptions:{
                tabBarLabel: 'NEW DECK'
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: purple,
            style: {
                height: 56,
                backgroundColor: white,
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
            }
        }
});

export const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs,
    },
    DeckDetail: {
        screen: Deck,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple
            }
        }
    },
    IndividualDeckDetail: {
        screen: IndividualDeckView,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple
            }
        }
    },
    AddQuestion: {
        screen: AddQuestion,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple
            }
        }
    }
});