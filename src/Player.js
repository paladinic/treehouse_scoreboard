import React from "react";
import Counter from "./Counter";

// react component for players
function Player(props){
    return (
        <div className='player'>
            <button 
                onClick={() => props.removePlayer(props.id)} 
                className="delete_player_btn">&#10060;
            </button>
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
    return prev.score === next.score;
}    

export default React.memo(Player,prevPlayer);