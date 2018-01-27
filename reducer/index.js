import { DECK_ACTIONS } from '../action'


const initialState = {
}

function decks(state = initialState, action){

    const { decks } = action;

    switch (action.type){
        case DECK_ACTIONS:
            return {
                ...state,
                ...decks
            }

        default:
            return state
    }
}

export default decks