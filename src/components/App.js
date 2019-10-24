import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startGame, cancelGame} from '../actions/settings';
import { fetchNewDeck} from '../actions/deck';
import fetchStates from '../reducers/fetchStates';
import Instructions from './Instructions';
import DrawCard from './DrawCard';
import Card from './Card';
import Guess from './Guess';
import GameState from './GameState';

class App extends Component {

    startGame = () => {
        this.props.startGame();
        this.props.fetchNewDeck();

     };


    render() {
        console.log('this',this);
        if(this.props.fetchState== fetchStates.error) {
            return(
                <div>
                    <p>An error occured. Please try reloading the page.</p>
                    <p>{this.props.message}</p>
                </div>
            )
        }
        return(
            <div>
               <h2>♠️ ♦ Evens or Odds 🖤 ♣️</h2>
               {
                   this.props.gameStarted? (
                    <div>
                     <h3>The Game is on!</h3>
                     <br/>
                     <GameState/>
                     <br/>
                     <Guess/>
                     <br/>
                     <DrawCard/>
                     <hr/>
                     <Card/>
                     <hr/>
                     <button onClick={this.props.cancelGame}>Cancel Game</button>
                     </div>
                   ) : (
                    <div>
                     <h3>The Game awaits...</h3>
                     <br/>
                     <button onClick={this.startGame}>Start Game</button>
                     <hr/>
                     <Instructions/>
                     </div>

                   )
               }
            </div>
        );  
    }
}

const mapStateToProps= state => {
    const {
        settings: {gameStarted},
        deck: {fetchState, message}
    } =state;
    return {gameStarted, fetchState, message};
}

// const mapDispatchToProps= dispatch => {
//     return {
//        startGame: () => dispatch(startGame()),
//        cancelGame: () => dispatch(cancelGame()),
//        fecthNewDeck: ()=> fecthNewDeck(dispatch)
//     };
// }

const componentConnector= connect(mapStateToProps,
    {startGame, cancelGame,fetchNewDeck }
    );
export default componentConnector(App);