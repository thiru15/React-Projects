import React, { useState } from 'react'

export default function Carousal() {
    const listCarousals =[
        {
            url:'https://cdn.pixabay.com/photo/2023/06/27/10/51/man-8091933_1280.jpg'
        },
        {
            url:'https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg'
        },
        {
            url:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
        }

    ]
    const [slide,setSlide] = useState(0)
    const mainLayout ={
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
    }
    const dynamicStyles = {
        backgroundImage: `url(${listCarousals[slide].url})`,
        backgroundColor:'blue',
        color:'red',
        width:'500px',
        height:'500px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    }

    const handleLeft = ()=>{
       console.log("handleLeft ");
       setSlide(prevSlide=>((prevSlide-1)+listCarousals.length)%listCarousals.length)

    }
     const handleRight = ()=>{
        console.log("handleRight ");
       setSlide(prevSlide=>((prevSlide+1)+listCarousals.length)%listCarousals.length)

    }
  return (
    <div style={mainLayout}>
        <h1>Carousals</h1>
         
         <div style={dynamicStyles} >
            <button onClick={handleLeft}>Left</button>
            <button onClick={handleRight}>Right</button>

         </div>

    </div>
  )
}
