import { DECK , DECK_DRAW} from './types';

export const fetchDeckSuccess= (deckJson )=> {
    const {remaining, deck_id} = deckJson;

    return { type: DECK.FETCH_SUCCESS, remaining, deck_id};
};

export const fetchDeckError = error => {
    return{type: DECK.FETCH_ERROR, message: error.message};
}

export const fetchNewDeck = () => dispatch => {
    return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(response=> {
        if (response.status !== 200) {
            throw new Error("Unsuccessful request to deckofcardsapi.com");  
        }
        return response.json();
    })
    .then(json=> dispatch(fetchDeckSuccess(json)))
    .catch(error=> dispatch(fetchDeckError(error)));
}

export const fetchDrawCard = deck_id => dispatch => {
    return fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
    .then(response=> {
        if (response.status !== 200) {
            throw new Error("Unsuccessful request to deckofcardsapi.com");  
        }
        return response.json();
    })
    .then(json=> {
        dispatch({
        type: DECK_DRAW.FETCH_SUCCESS,
        cards: json.cards,
        remaining: json.remaining
    });
})
.catch(error=> dispatch({type: DECK_DRAW.FETCH_ERROR, message: error.message}));
}