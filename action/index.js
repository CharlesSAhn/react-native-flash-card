export const DECK_ACTIONS = "DECK_ACTIONS"

export function deckAction({ decks }){
    return{
        type:DECK_ACTIONS,
        decks,
    }
}
