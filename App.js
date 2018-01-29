import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import { MainNavigator } from "./utils/navigations"
import { setLocalNotification } from "./utils/helpers"

export default class App extends React.Component {

    componentDidMount(){
        setLocalNotification();
    }

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

