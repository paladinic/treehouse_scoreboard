import React from "react";

function StopWatch() {

    const [isRunning, setIsRunning] = React.useState(false);
    const [time, setTime] = React.useState(0);
    
    React.useEffect(() => {
        let id;
        if (isRunning) {
            id = setInterval(() => {
                setTime(prev => prev+1);
            }, 1000);//timer
        }

        return ()=> clearInterval(id);//cleanup function
    }, [isRunning]);

    function resetTimer(){
        setIsRunning(false);
        setTime(0);
    }

    return (
        <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{time}</span>
        <button onClick={() => setIsRunning(prev => !prev)}>
            { isRunning ? "Stop" : "Start"}
        </button> 
        <button onClick={resetTimer}>Reset</button>
        </div>
    );

}

export default StopWatch;