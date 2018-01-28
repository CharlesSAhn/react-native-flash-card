export const DECK_ACTIONS = "DECK_ACTIONS"
export const LAST_QUIZ_DATE = "LAST_QUIZ_DATE"

export function deckAction({ decks }){
    return{
        type:DECK_ACTIONS,
        decks,
    }
}

export function quizTimeTrack( { time }){
    return{
        type:LAST_QUIZ_DATE,
        time,
    }
}
