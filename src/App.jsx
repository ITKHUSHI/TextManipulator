// @ts-ignore
import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';



function App() {
 
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
     <main className='bg-black w-full h-full flex justify-center items-center pb-8'>
     <div className='bg-black w-[100vw] h-[100vh] p-2 ' >
      
      <div className=' w-full h-32 flex justify-center items-center'>
       <h2 className='text-xl font-bold text-white'>Text Manipulator</h2>
      </div>
   

     <section className=' inline sm:flex flex-row  m-8 gap-4 justify-center items-center'>
     
    <button className="  rounded-lg p-3 mx-1 my-2  outline-none text-white shadow-lg shadow-blue-500 hover:transform-3 transform hover:scale-50  "   onClick={handleUpClick} >Convert to Uppercase </button> 
    <button className=" shadow-lg shadow-blue-500 text-white  rounded-lg p-1 mx-1 my-2  outline-none  hover:scale-50   "   onClick={handleLoClick} >Convert to Lowercase</button>
    <button className=" shadow-lg shadow-blue-500 text-white rounded-lg p-1 mx-1 my-2  outline-none   hover:scale-50  "    onClick={handleClearClick} >Clear Text</button>
    <button className=" shadow-lg shadow-blue-500 text-white rounded-lg p-1 mx-1 my-2  outline-none   hover:scale-50  "   onClick={handleSpeak}>Listen Text</button>
    <button className=" shadow-lg shadow-blue-500 text-white rounded-lg p-1 mx-1 my-2  outline-none   hover:scale-50  "   onClick={handleCopy}>Copy Text</button>
    <button className=" shadow-lg shadow-blue-500 text-white rounded-lg p-1 mx-1 my-2  outline-none   hover:scale-50  "   onClick={handleRemoveSpace}>Remove Space</button>
    </section>  
 
   
        
    <div className=" rounded-lg mx-2 my-2  flex  overflow-hidden  justify-center items-center  lg:h-[50%]">
      <textarea placeholder="write-here" className=" 
      w-full   mx-2 my-2 text-black-200  font-md font-serif lg:w-[70%] lg:h-full " value={text} onChange={handleOnChange} id="myBox" rows="8"  ></textarea>
       </div>
     <div className="rounded-lg mx-2 my-2  flex  overflow-hidden  justify-start items-center lg:ml-64 ">
         <div className="mx-2 my-2 p-2 text-bold text-white ">
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
     </main>
    </>
  )
}

export default App
