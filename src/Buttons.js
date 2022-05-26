import React from "react"


function Buttons({homeElement, awayElement}) {
  function handleAwayWin(){
    awayElement.win++
    homeElement.losses++
  }
  function handleHomeWin(){
    homeElement.win++
    awayElement.losses++
  }

  return (
    <div>
      <button onClick={handleAwayWin}>{awayElement.shortDisplayName} Win</button>
      <button onClick={handleHomeWin}>{homeElement.shortDisplayName} Win</button>
    </div>
  );
}

export default Buttons;