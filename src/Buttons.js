import React from "react"


function Buttons({homeElement, awayElement, teamData, handleClick}) {
  
  
 
 
   function handleClick2(){
    // handleWin(homeElement, awayElement)
     console.log(homeElement, awayElement)
   }
  


  function handleHomeWin(){
    homeElement.win++
    awayElement.losses++
  }

  return (
    <div>
      <button onClick={e=>handleClick(e)} value={awayElement.abbreviation} winner={awayElement.abbreviation} loser={homeElement.abbreviation}>{awayElement.shortDisplayName} Win</button>
      <button onClick={handleClick2}>{homeElement.shortDisplayName} Win</button>
    </div>
  );
}

export default Buttons;