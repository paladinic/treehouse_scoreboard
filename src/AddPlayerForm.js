import React from "react";


// react component for players
function AddPlayerForm(props){

    const [value, setValue] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); //prevent reload and state loss
        if(value !== ""){
            props.addPlayer(value);
            setValue("");
        }
    }

    return (
        <form className='add_player'
        onSubmit = {(event) => handleSubmit(event)}
        >
            <input 
                type="text" 
                placeholder="player name"
                onChange={(event) => setValue(event.target.value)} 
                className="add_player_btn"
                value = {value}
                >
            </input>
            <input 
                type = "submit"
                value = "Add Player"
                >
            </input>
        </form>
    );
}

export default AddPlayerForm;