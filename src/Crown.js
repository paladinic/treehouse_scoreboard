import React from "react";

function Crown(props){

    let crown;

    if(props.winner){
        crown = "WINNING"
    }
    else{
        crown = "_______"
    }

    return(
        <span>{crown}</span>
    )
}

export default Crown;