import React, {Component} from 'react';
import {connect} from 'react-redux';
import {expandInstructions, collapseInstructions} from '../actions/settings';

const Instructions =props => {
   const {instructionsExpanded, expandInstructions, collapseInstructions}= props;
   if(instructionsExpanded)   {
   return(<div>
            <h3>Here are the instructions for the game</h3>
            <p>Welcome to Evens or Odds. Rules are.. </p>
            <p>The Deck is shuffled. Then, you have to guess if the next card is going to be odd or even?</p>
            <p>Make a choice on every draw. Let's see how many you get right!</p>
            <p>(Face cards don't count.)</p>
            <br/>
            <button onClick={collapseInstructions}>Show Less</button>
             </div>
                   );
             } 
            return (
                    <div>
                    <h3>Here are the instructions for the game</h3>
                     <p>Welcome to Evens or Odds. Rules are...</p>
                     <br/>
                     <button onClick={expandInstructions}>Show</button>
                     </div>
      );

    }


export default connect(
    state=> ({instructionsExpanded : state.settings.instructionsExpanded}),
 {expandInstructions, collapseInstructions})(Instructions);