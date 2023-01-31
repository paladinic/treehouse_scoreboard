import React from "react";
import PropTypes from "prop-types";

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

// validating "props"
// if not, no errors displayed for wrong or missing props
// types defined as PorpTypes.<type>
// required prop defined as PorpTypes.<type>.isRequired
Counter.propTypes = {
    id: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    change_score: PropTypes.func.isRequired
}

export default Counter;