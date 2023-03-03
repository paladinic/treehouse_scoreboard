import React from "react";
import Counter from "./Counter";
import Crown from "./Crown";

// react component for players
function Player(props){
    // console.log(props.winner)
    return (
        <div className='player'>
            <button 
                onClick={() => props.removePlayer(props.id)} 
                className="delete_player_btn">&#10060;
            </button>
            <Crown
                winner = {props.winner}
            />
            <span className="player_name">
                {props.name}
            </span>
            <Counter
                score = {props.score}
                change_score = {props.change_score}
                id = {props.id}
            />
        </div>
    );
}

// memo for rendering efficiency
function prevPlayer(prev,next){
    return prev.score === next.score && prev.winner === next.winner;
}    

export default React.memo(Player,prevPlayer);