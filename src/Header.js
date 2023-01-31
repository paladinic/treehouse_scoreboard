import React from "react";
import Stats from "./Stats";
import PropTypes from "prop-types";

// rect component for headers
function Header(props){
return (
    <header>
        <h1>{props.title}</h1>
        <Stats
            players = {props.players}
        />
    </header>
);
}

// Validate props types
Header.propTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.object)
}

// Default values for Props
Header.defaultProps = {
    title: "Scoreboard"
}


export default Header