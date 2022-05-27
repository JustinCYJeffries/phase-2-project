import React, {useState} from "react"




function Buttons({homeElement, awayElement, teamData, handleClick, boxKey, pickedFilter}) {
  
  
  const [picked, setPicked] = useState(false)
  const [winName, setWinName] = useState("")
  

  function partyClick(e){
   setPicked(true)
   handleClick(e)
   setWinName(e.target.attributes.winnamez.value)
   pickedFilter(boxKey, )
 }

 
  function picking(){
    if(picked==false){
      return(
        <div>
      <button onClick={e=>partyClick(e)} value={awayElement.abbreviation} winner={awayElement.abbreviation} loser={homeElement.abbreviation} winnamez={awayElement.shortDisplayName}>{awayElement.shortDisplayName} Win</button>
      <button onClick={e=>partyClick(e)}value={homeElement.abbreviation} winner={homeElement.abbreviation} loser={awayElement.abbreviation}  winnamez={homeElement.shortDisplayName}>{homeElement.shortDisplayName} Win</button>
    </div>
      )
    }
    else return(<div>
      <h3>{winName} WINS!!</h3>
    </div>)
  }
   


  return (
    <div>
      {picking()}
    </div>
  );
}

export default Buttons;