import React, {useState, useEffect} from "react"




function Buttons({homeElement, awayElement, teamData, handleClick, boxKey, pickedFilter, handleFilter, selectedWeek}) {
  
  
  const [picked, setPicked] = useState(false)
  const [winName, setWinName] = useState("")
 
    let escalator = 0
  useEffect(()=> {
    
      
       
    }, [picked])
    
    


  function partyClick(e){
    setPicked(true)
   handleClick(e)
   setWinName(e.target.attributes.winnamez.value)
   const winner= e.target.attributes.winnamez.value
   escalator++
   const pickedkey = [{boxKey}]
   const pickedWeek = [{selectedWeek}]
      const pickedWin = [{winner}]
      const pickedArry = pickedWin.concat(pickedkey, pickedWeek)
      
      handleFilter(pickedArry)
   
}


 
  function picking(){
    if(picked==false){
      return(
        <div>
      <button onClick={e=>partyClick(e)} value={awayElement.abbreviation} winner={awayElement.abbreviation} loser={homeElement.abbreviation} winnamez={awayElement.shortDisplayName} week={selectedWeek}>{awayElement.shortDisplayName} Win</button>
      <button onClick={e=>partyClick(e)}value={homeElement.abbreviation} winner={homeElement.abbreviation} loser={awayElement.abbreviation}  winnamez={homeElement.shortDisplayName} week={selectedWeek}>{homeElement.shortDisplayName} Win</button>
    </div>
      )
    }
    else return(<div>
      <h3>{winName} WIN!!</h3>
    </div>)
  }
   


  return (
    <div>
      {picking()}
    </div>
  );
}

export default Buttons;