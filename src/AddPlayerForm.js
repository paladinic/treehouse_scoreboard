import React from "react";

function AddPlayerForm(props){

    // HOOK
    // const [value, setValue] = React.useState('');
    
    // REF HOOK
    const player_input = React.useRef()

    //control component, state controlled internally
    const handleSubmit = (event) => {

        // using REF HOOK
        let value = player_input.current.value;

        event.preventDefault(); //prevent reload and state loss
        if(value !== ""){
            props.addPlayer(value);
            
            // reset value after submit:
            // - HOOK:
            // setValue("");
            // - REF HOOK:
            event.currentTarget.reset(); 
        }
    }

    return (
        <form className='add_player'
        onSubmit = {(event) => handleSubmit(event)}
        >
            <input 
                type="text" 
                placeholder="player name"
                // REF HOOK
                ref = {player_input}
                // HOOK
                // onChange={(event) => setValue(event.target.value)} 
                // value = {value}
                >
            </input>
            <input 
                type = "submit"
                value = "Add Player"
                className="add_player_btn"
                >
            </input>
        </form>
    );
}

export default AddPlayerForm;