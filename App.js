import React from 'react';
import { View } from 'react-native';
import AddDeck from './components/AddDeck'
import Decks from './components/Decks'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { purple, white } from "./utils/colors";
import Deck from "./components/Deck"
import IndividualDeckView from "./components/IndividualDeckView"
import AddQuestion from "./components/AddQuestion"

const Tabs = TabNavigator({
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
})

const MainNavigator = StackNavigator({
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
})

export default class App extends React.Component {
  render() {

      const store = createStore(
          reducer,
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )

    return (
        <Provider store={createStore(reducer)}>
          <View style={{flex: 1}}>
            <MainNavigator />
          </View>
        </Provider>

    )
  }
}

