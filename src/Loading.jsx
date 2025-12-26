import React, { useEffect, useState } from "react";
const Loading = () => {
const [text, setText] = useState('')

const [showImg,setShowImg] = useState(true)
useEffect (() => {
setTimeout (() => {
setShowImg(false)
    setText(
)

} , 3000)
} , []) 



  return (
    <>
     <div>
      {
        showImg ? (

          <div className="loading  wow zoomIn"  data-wow-duration="8s" >
            <center>  <img src="\logologing.png" alt="loading"  /></center>
          </div>
        ) : (
            <h6>{text} </h6>
        )
      }  
        </div> 
    </>
  )
}

export default Loading


// const [loading, setLoading] = useState(false);
// useEffect(() => {
//   setLoading(true);
//   setTimeout(() => {
//     setLoading(false);
//   }, 3000);
// }, [])

