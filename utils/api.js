import { AsyncStorage } from 'react-native'
import { STORAGE_KEY } from './helpers'

export function saveDeckTitle({ data, key }) {
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({ [key]: data } ))
}



export function getDecks() {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then(res => JSON.parse(res))

}

export function addCardToDeck({ deckTitle, card }){
    return AsyncStorage.getItem(STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            let deck = data[deckTitle];
            deck.questions.push(card);
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ [deckTitle]: deck }))
        })
}