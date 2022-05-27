import React, {useState} from "react"




function Buttons({homeElement, awayElement, teamData, handleClick, winTeam}) {
 let pickedWinner=[]
  const [picked, setPicked] = useState(false)
 
  function picking(){
    if(picked==false){
      return(
        <div>
      <button onClick={e=>handleClick(e)} value={awayElement.abbreviation} winner={awayElement.abbreviation} loser={homeElement.abbreviation}>{awayElement.shortDisplayName} Win</button>
      <button onClick={e=>handleClick(e)}value={homeElement.abbreviation} winner={homeElement.abbreviation} loser={awayElement.abbreviation}>{homeElement.shortDisplayName} Win</button>
    </div>
      )
    }
    else return(setPicked(true))

  }
   


  return (
    <div>
      {picking()}
    </div>
  );
}

export default Buttons;