import { DECK_ACTIONS, LAST_QUIZ_DATE } from '../action'


const initialState = {
}

function decks(state = initialState, action){

    const { decks, time } = action;

    switch (action.type){
        case DECK_ACTIONS:
            return {
                ...state,
                ...decks
            }

        case LAST_QUIZ_DATE:
            return {
                ...state,
                ...time
            }

        default:
            return state
    }
}

export default decks