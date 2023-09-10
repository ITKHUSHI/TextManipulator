import React, { useState } from 'react';
import { useSpeechSynthesis } from "react-speech-kit";


export default function Text(props) {
    
  
    const [text, setText] = useState(" ");  
    
   const {speak} =useSpeechSynthesis();
  
   const handleSpeak=()=>{
    speak({text});
    
   }

    
	const handleUpClick = () =>{
    let newText=text.toUpperCase();
		setText(newText);
	}
  const handleLoClick = () =>{
    let newText=text.toLowerCase();
		setText(newText);
	}
  const handleClearClick = () =>{
    let newText=" ";
		setText(newText);
	}
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleRemoveSpace=()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "));

  }
  
	const handleOnChange = (event) =>{

    setText(event.target.value);
	}
 
  return (
    <>
     <div >
      <h1 className="text-2xl text-center  bg-orange-300 m-8"> Text Manipulation</h1>   
 
    

      <nav className=' inline sm:flex flex-row '>
      
     <button className="bg-blue-500  rounded-lg p-1 mx-1 my-2  outline-none hover:bg-green-500 "   onClick={handleUpClick} >Convert to Uppercase </button> 
     <button className="bg-blue-500  rounded-lg p-1 mx-1 my-2  outline-none hover:bg-green-500 "   onClick={handleLoClick} >Convert to Lowercase</button>
     <button className="bg-blue-500  rounded-lg p-1 mx-1 my-2  outline-none hover:bg-green-500 "    onClick={handleClearClick} >Clear</button>
     
     <button className="bg-blue-500  rounded-lg p-1 mx-1 my-2  outline-none hover:bg-green-500 "   onClick={handleSpeak}>play</button>
     <button className="bg-blue-500  rounded-lg p-1 mx-1 my-2  outline-none hover:bg-green-500 "   onClick={handleCopy}>Copy</button>
     <button className="bg-blue-500  rounded-lg p-1 mx-1 my-2  outline-none hover:bg-green-500 "   onClick={handleRemoveSpace}>Remove Space</button>
     </nav>  
  
    
         
     <div className=" bg-blue-500 mx-2 my-2  flex  overflow-hidden   ">
       <textarea placeholder="write-here" className=" 
       w-full   mx-2 my-2 text-black-200   " value={text} onChange={handleOnChange} id="myBox" rows="8"  ></textarea>
   

  
  
        </div>
      <div className=" mx-2 my-2">
          <div className="mx-2 my-2 p-2 text-bold ">
       <h1>your summary text</h1>
     <p>{text.split(" ").filter((element)=>{
      return element.length!==0} ).length}
       words and {text.length}  charecters</p>
       <h1>Preview</h1>   
       <p>{text.length>0?text:"Enter somthing to preview"}</p>   
      <p>{0.008*text.split(" ").length} Mintues </p>
      
        </div>
       </div>
  </div>
  
     
   </>
  )
}
