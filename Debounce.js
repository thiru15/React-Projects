import { useCallback, useRef, useState } from "react";


const Debounce  = ()=>{

    const searchBox= useRef('')
    // useCallback(()=>{
        
    //     console.log("Search BOx changed");

    // },[searchBox])
    const [inputValue , setInputValue] = useState();

    function implementDebounce(cb,delay){
        let timeout;
        console.log("Inside debounce ",cb,delay)
        return (...args)=>{
            console.log("insidee child")
            if(timeout){
                clearTimeout(timeout)
            }
            setTimeout(()=>{
                console.log("Indside settimeout")
                cb(...args)

            },delay)
        }
    }

   
    

    function updateInput(value) {
        console.log("Inside update")

        setInputValue(value)

    }
    const handleOnChange = implementDebounce((e)=>{
        updateInput(e.target.value)


    },1000)


   
   

    return(
        <div>
            <input type="text"  placeholder="search box" onChange={handleOnChange}></input>
            <p> { inputValue } </p>

        </div>
    )
}
export default Debounce;