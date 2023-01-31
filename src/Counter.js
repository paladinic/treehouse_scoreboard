import React from "react";

// react component for counters
function Counter (props){

    let id = props.id

    return (
        <div className="counter">
            <button onClick={() => props.change_score(id,-1)} className="counterBtn decrement"> - </button>
            <span>{props.score}</span>
            <button onClick={() => props.change_score(id,1)} className="counterBtn increment"> + </button>
        </div>
    );
    
}

export default Counter;