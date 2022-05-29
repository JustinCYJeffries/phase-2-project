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
   const winner= e.target.attributes.winner.value
   escalator++
   const pickedkey = [{boxKey}]
   const pickedWeek = [{selectedWeek}]
      const pickedWin = [{winner}]
      const pickedArry = pickedWin.concat(pickedkey, pickedWeek)
      
      handleFilter(pickedArry)
   
}
function homeLogo(){
  if (homeElement.logos != undefined){
    return( <img onClick={e=>partyClick(e)}value={homeElement.abbreviation} winner={homeElement.abbreviation} loser={awayElement.abbreviation}  winnamez={homeElement.shortDisplayName} week={selectedWeek} src={`${homeElement.logos[0].href}`} key={homeElement.displayName} className='logohandler' />)
  }
}
function awayLogo(){
  if (awayElement.logos != undefined){
    return( <img onClick={e=>partyClick(e)} value={awayElement.abbreviation} winner={awayElement.abbreviation} loser={homeElement.abbreviation} winnamez={awayElement.shortDisplayName} week={selectedWeek} src={`${awayElement.logos[0].href}`} key={awayElement.displayName} className='logohandler' />)
  }
}



 
  function picking(){
    if(picked==false){
      return(
      <div>
        {awayLogo()}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{homeLogo()}
      <div>
      <button onClick={e=>partyClick(e)} value={awayElement.abbreviation} winner={awayElement.abbreviation} loser={homeElement.abbreviation} winnamez={awayElement.shortDisplayName} week={selectedWeek}>{awayElement.shortDisplayName} Win</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={e=>partyClick(e)}value={homeElement.abbreviation} winner={homeElement.abbreviation} loser={awayElement.abbreviation}  winnamez={homeElement.shortDisplayName} week={selectedWeek}>{homeElement.shortDisplayName} Win</button>
    </div></div>
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