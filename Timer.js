import { useState } from "react";


const Timer = ()=>{

    console.log("Timerr ")

    const [hours,setHours] = useState(0);

    const [mintues,setMinutes] = useState(0);

    const [seconds , setSeconds] = useState(45);

    function handleHours(e){

        setHours(e.target.value)



    }

    function handleMinutes(e){
        setMinutes(e.target.value)

    }
    function handleSeconds(e){
        setSeconds(e.target.value)

    }

    function resetTimer(){
        clearInterval()
    }

    function startTimer(){
        console.log("seconds ",seconds)
        setInterval(()=>{
            if(seconds && seconds>0){
                console.log("SSww")

                setSeconds((prevSeconds)=> prevSeconds-1)
            }
        },1000)
    }

    return (
        <div>

        <div style={{display:'flex' ,justifyContent:'space-evenly'}}>

            <div>
            <input type="number" onKeyDown={handleHours}></input>
            </div>

           
            <div>
            <input type="number" onKeyDown={handleMinutes}></input>
            </div>
            <div>
            <input type="number" onKeyDown={handleSeconds} value={seconds}/> 
            </div>








        </div>

        <button style={{backgroundColor:"green ",color:"white",marginTop:"40px",width:"50px"}} onClick={startTimer} > Start</button>

        <button style={{backgroundColor:"Red",color:"white",marginTop:"40px",width:"50px"}} onClick={startTimer} > Reset</button>


        </div>
    )


}
export default Timer;