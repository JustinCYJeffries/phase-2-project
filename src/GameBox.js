import React, { useState, useEffect } from "react"
import PickedGame from "./PickedGame"
import PickemBox from "./PickemBox"

function Gamebox({selectedWeeksGames, selectedWeek, teamData, handleClick, winTeam }){
    const [pickedGames, setPickedGames] = useState([]) 
    const [winArray, setWinArray] = useState() 
    const [generatePickedGames, setGeneratePickedGames]= useState([])
    const [unPickedGames, setUnPickedGames]= useState(selectedWeeksGames)
    
    let updatedGameArry =[]
    let winnerArray = []
   
   
    function handleFilter(a){
 
    let wintotal=pickedGames.concat({a}) 
        setPickedGames(wintotal)
        
        
   }
      

  function populateBoxes(){
      
    pickedGames.forEach(e=>{
          let boxKey = e.a[1].boxKey
          let week = e.a[2].selectedWeek
          let winner = e.a[0].winner
          
          if (week==selectedWeek){
               updatedGameArry.push(boxKey)
                winnerArray.push(winner)
            }
                }
    )
    
   setWinArray(winnerArray)
    setGeneratePickedGames(updatedGameArry.map((item) => selectedWeeksGames[item]))
    
    setUnPickedGames(selectedWeeksGames.filter((d, i) => updatedGameArry.indexOf(i) == -1))
    
  }
  
 
function pickem(){
  
    return(
<div className="footballfieldbackground"><br/><br/><br/><div >
            {unPickedGames.map(game=> <PickemBox key={`${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`} boxKey={selectedWeeksGames.indexOf(game)} teams={game.team} teamData={teamData} handleClick={handleClick} winTeam={winTeam} handleFilter={handleFilter} selectedWeek={selectedWeek}/>)}
            {generatePickedGames.map(game=> <PickedGame key={`${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`} boxKey={selectedWeeksGames.indexOf(game)} teams={game.team} teamData={teamData} handleClick={handleClick} winTeam={winArray} handleFilter={handleFilter} selectedWeek={selectedWeek}/>)}          
        </div><br/><br/><br/></div>
    )

}

  useEffect(()=> {
    populateBoxes()
    
  }, [pickedGames, selectedWeeksGames])

    
   
    return(<div>
       {pickem()}
        </div>
    )
}

export default Gamebox
//generatePickedGames.map(game=> <PickedGame key={`${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`} boxKey={selectedWeeksGames.indexOf(game)} teams={game.team} teamData={teamData} handleClick={handleClick} winTeam={winTeam} handleFilter={handleFilter} selectedWeek={selectedWeek}/>)
//<div className="text_center">
  //          {selectedWeeksGames.map(game=> <PickemBox key={`${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`} boxKey={`${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`} teams={game.team} teamData={teamData} handleClick={handleClick} winTeam={winTeam} handleFilter={handleFilter}/>)}
            
    //    </div>

//if (pickedGames.map(pgame=>pgame.boxKey != `${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`))
            //return <PickemBox key={`${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`} boxKey={`${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`} teams={game.team} teamData={teamData} handleClick={handleClick} winTeam={winTeam} pickedFilter={pickedFilter}/>
            //else console.log(pickedGames)
        //})
          //  }
            
          