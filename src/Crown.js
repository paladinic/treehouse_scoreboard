import React from "react";

function Crown(props){

    let crown;

    if(props.winner){
        crown = "block"
    }
    else{
        crown = "none"
    }

    return(
        <span style={{"display":crown}}>
            Winning
        </span>
    )
}

export default Crown;