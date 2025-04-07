import React, {useState, useEffect} from "react"
import '../components/clock.css'

function Clock(){
    const [time, setTime] = useState("00:00:00");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const seconds = date.getSeconds().toString().padStart(2, '0');
            setTime(`${hours}:${minutes}:${seconds}`);
            }, 1000);
            return () => clearInterval(intervalId);
            }, []);
            return (
                <div className="clock">
                    <h1>{time}</h1>
                </div>)
    }

    export default Clock;
