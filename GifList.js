
import { useEffect } from "react";
import axios from 'axios';
const GifList = ()=>{

    useEffect(()=>{

        console.log("Inside UseEffect -1 ")
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=eYBd404APDf0XtxwbSLBmnhdKbDcj6OM&limit=24&offset=5&rating=9&random_id=abcd123422222').then((res)=> res.json()).then((data)=>{
          console.log("Data -1 ",data)
      })

        // const options = {
        //     method: 'GET',
        //     url: 'api.giphy.com/v1/gifs/trending?',
        //     headers: {
        //       accept: 'application/json',
        //     },
        //     params: {
        //       api_key: 'eYBd404APDf0XtxwbSLBmnhdKbDcj6OM',
        //       limit:24
        //     },
        //   };
      
        //   axios
        //     .request(options)
        //     .then(function (response) {
        //       console.log("Res -1 ",response.data);
        //       console.log('Gifes  ', response.data.results);
            
        //     })
        //     .catch(function (error) {
        //       console.error(error);
        //     });
    },[])


    return(
        <div>
            <h1>Gif List</h1>

        </div>
    )
} 

export default GifList;