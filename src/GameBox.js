import React, { useState, useEffect } from "react"
import PickemBox from "./PickemBox"
import PickedGame from "./PickedGame"

function Gamebox({selectedWeeksGames, selectedWeek, teamData, handleClick, winTeam }){
    const [pickedGames, setPickedGames] = useState([]) 
    const [pickedWeeks, setPickedWeeks] = useState() 
    const [generatePickedGames, setGeneratePickedGames]= useState([])
    const [unPickedGames, setUnPickedGames]= useState(selectedWeeksGames)
    
    let updatedGameArry =[]
   function handleFilter(a){
 
    let wintotal=pickedGames.concat({a}) 
        setPickedGames(wintotal)
        
        
   }
      

  function populateBoxes(){
      
    pickedGames.forEach(e=>{
          let boxKey = e.a[1].boxKey
          let week = e.a[2].selectedWeek
          let winName = e.a[0].selectedWeek
          
          if (week==selectedWeek){
               updatedGameArry.push(boxKey)}
                }
    )
    
    setPickedWeeks(updatedGameArry)
    setGeneratePickedGames(updatedGameArry.map((item) => selectedWeeksGames[item]))
    setUnPickedGames(selectedWeeksGames.filter((d, i) => updatedGameArry.indexOf(i) == -1))
    
    

  }

function pickem(){
    return(
        <div className="text_center">
                    {console.log(unPickedGames)}
                    {unPickedGames.map(game=> <PickemBox key={`${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`} boxKey={selectedWeeksGames.indexOf(game)} teams={game.team} teamData={teamData} handleClick={handleClick} winTeam={winTeam} handleFilter={handleFilter} selectedWeek={selectedWeek}/>)}
                    {generatePickedGames.map(game=> <PickedGame key={`${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`}  boxKey={selectedWeeksGames.indexOf(game)} teams={game.team} teamData={teamData} handleClick={handleClick} winTeam={winTeam} handleFilter={handleFilter} selectedWeek={selectedWeek}/>)}
                </div>
            )
    
}

  useEffect(()=> {
    populateBoxes()
    
  }, [])
    
   
    return(<div>
        {pickem()}
        </div>
    )
}

export default Gamebox

//<div className="text_center">
  //          {selectedWeeksGames.map(game=> <PickemBox key={`${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`} boxKey={`${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`} teams={game.team} teamData={teamData} handleClick={handleClick} winTeam={winTeam} handleFilter={handleFilter}/>)}
            
    //    </div>

//if (pickedGames.map(pgame=>pgame.boxKey != `${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`))
            //return <PickemBox key={`${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`} boxKey={`${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`} teams={game.team} teamData={teamData} handleClick={handleClick} winTeam={winTeam} pickedFilter={pickedFilter}/>
            //else console.log(pickedGames)
        //})
          //  }
            
          