import React from "react";
import Header from "./Header"
import Player from "./Player"
import AddPlayerForm from "./AddPlayerForm"
import StopWatch from "./StopWatch";

// parent component
function App(){

    const [players, setPlayers] = React.useState([
      {
        name: "Guil",
        id:1,
        score:0,
        winner:false
      },
      {
        name: "Treasure",
        id:2,
        score:0,
        winner:false
      },
      {
        name: "Ashley",
        id:3,
        score:0,
        winner:false
      },
      {
        name: "James",
        id:4,
        score:0,
        winner:false
    }]);

    const removePlayer = (id) =>{
        setPlayers( prevState => update_scores(prevState.filter( p => p.id !== id),0,0));
    }

    // const [nextPlayerId,setNextPlayerId] = React.useState(5);
    const nextPlayerId = React.useRef(5);


    const addPlayer = (name) =>{
      
      let new_player = {
        name:name,
        score:0,
        id: nextPlayerId.current++ // REF HOOK
      }
      
      setPlayers(
            prevState => [
              ...prevState,new_player
            ]
        );

      // HOOK
      // setNextPlayerId(prevId => prevId + 1)
    }

    const update_scores = (ps,id,delta) => {

      // update score
      ps = ps.map(p => {
            if(p.id === id){
              return {
                name : p.name,
                score : p.score + delta,
                id: p.id,
                winner: p.winner
              }
            }
            return p
      });
    
      // get max score
      let max_score = ps.reduce((max,current) => current.score > max.score ? current : max).score;

      // update crown
      ps = ps.map(p => {
        if(p.score === max_score && p.score > 0){
          return {
            name : p.name,
            score : p.score,
            id: p.id,
            winner: true
          }
        }
        else{
          return {
            name : p.name,
            score : p.score,
            id: p.id,
            winner: false
          }
        }
      });

      return ps
    }

    const change_score = (id,delta) => {

      setPlayers(prevState => update_scores(prevState,id,delta))
      
    }

    return(
        <div className="scoreBoard">
            <Header 
                title="Scoreboard" 
                players={players}
            />

            {/* players list */}
            {players.map(
                player =>
                <Player
                    id = {player.id}
                    removePlayer = {removePlayer}
                    change_score = {change_score}
                    name = {player.name}
                    key = {player.id.toString()}
                    score = {player.score}
                    winner  = {player.winner}
                />
            )}

            {/* add player section */}
            <AddPlayerForm
                addPlayer = {addPlayer}
            />


            {/* timer */}
            <StopWatch
              
            />
        </div>
    )
}

export default App;
