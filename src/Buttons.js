import React from "react"


function Buttons({homeElement, awayElement, teamData, handleClick}) {
  

  
  return (
    <div>
      <button onClick={e=>handleClick(e)} value={awayElement.abbreviation} winner={awayElement.abbreviation} loser={homeElement.abbreviation}>{awayElement.shortDisplayName} Win</button>
      <button onClick={e=>handleClick(e)}value={homeElement.abbreviation} winner={homeElement.abbreviation} loser={awayElement.abbreviation}>{homeElement.shortDisplayName} Win</button>
    </div>
  );
}

export default Buttons;