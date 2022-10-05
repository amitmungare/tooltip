// importing useState from react 
import { useState } from 'react';
import './App.css';

// this is the app function which is called from index.js
function App() {

  // using state to set and get the position of the tip 
  const [position, setPosition] = useState("top")
  // boolean value to check hovering of mouse 
  const [flag, setFlag] = useState(true)

  // function called when position button clicked 
  function handleClick(event){
    // setting the position of the tip 
    setPosition(prevPosition=>{
      return prevPosition = event.target.value
    })
  }

  // when hovered on the button setting the value of flag to true 
  function handleMouseIn(){
    setFlag(true)
  }
  // when hovered out off the button setting the value of flag to false
  function handleMouseOut(){
    setFlag(false)
  }

  // based on the flag vaule setting the display of the tip to visiable or not visiable 
  const visibility = {display:flag?"block":"none"}

  return (
    <div className="App">

      {/* button to set the position of the tip left, right, up or down */}
      <div>
        <button onClick={handleClick} value="left">Left</button>
        <button onClick={handleClick} value="right">Right</button>
        <button onClick={handleClick} value="top">Top</button>
        <button onClick={handleClick} value="bottom">Bottom</button>     
      </div>

      <div>
        {/* when hoverd over this button the tip will be dispalyed  */}
        <button className='tooltip-hov' onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} >Hover over me
          {/* this is the tip message */}
          <div className={position} style={visibility}>
            I am {position} tip
          </div> 
        </button>
      </div>

    </div>
  );
}
// exporting the app function 
export default App;