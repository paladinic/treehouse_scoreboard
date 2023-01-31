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
        score:0
      },
      {
        name: "Treasure",
        id:2,
        score:0
      },
      {
        name: "Ashley",
        id:3,
        score:0
      },
      {
        name: "James",
        id:4,
        score:0
        }]);

    const removePlayer = (id) =>{
        setPlayers( prevState => prevState.filter( p => p.id !== id));
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

    const change_score = (id,delta) => {
        setPlayers( prevState => prevState.map(p => {
          if(p.id === id){
            return {
              name : p.name,
              score : p.score + delta,
              id: p.id
            }
          }
          return p
        }));

        // console.log(id,' - ',delta);

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
