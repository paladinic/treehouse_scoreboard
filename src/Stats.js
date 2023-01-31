import React from "react";
import PropTypes from "prop-types";

function Stats(props){

    let total_score = props.players.reduce((total,player) => {
        return total + player.score;
    },0)


    return (
        <table className="stats">
        <tbody>
            <tr>
            <td>Players:</td>
            <td>{props.players.length}</td>
            </tr>
            <tr>
            <td>Total Points:</td>
            <td>{total_score}</td>
            </tr>
        </tbody>
        </table>
    );
}

// PropType for element, in object, in array of objects
Stats.propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number
    }))
}

export default Stats;