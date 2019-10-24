import React from 'react';
import {connect} from 'react-redux';

const GameState =({remaining, correctGuesses}) => {
    const guessText= correctGuesses==1? 'guess': 'guesses';
    return(
        <div>
            <p> {correctGuesses} correct {guessText}</p>
            <p>{remaining} cards remaining</p>
        </div>
    )

}

export default connect(
   ({ 
       deck: {remaining},
    gameState: {correctGuesses} 
   })=>({remaining, correctGuesses})
)(GameState);