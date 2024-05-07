import { useRef, useState } from "react";

function useTimer(value=0){
    let [isRunning,setRunning]=useState(false);
    let [timer,setTimer]=useState(value);
    let ref=useRef(null);
    function startTimer(){
        ref.current=setInterval(()=>{
            setTimer((pre)=>pre+1);
        },1000)
        setRunning(true);
    }
    function stopTimer(){
        clearInterval(ref.current);
    }
    function resetTimer(){
        stopTimer();
        setTimer(value);
        setRunning(false);
    }
    return[timer,isRunning,startTimer,stopTimer,resetTimer

    ]
}
export default useTimer;