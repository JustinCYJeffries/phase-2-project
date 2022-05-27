import React, { useState } from "react"
import PickemBox from "./PickemBox"

function Gamebox({selectedWeeksGames, selectedWeek, teamData, handleClick, winTeam }){
   
   const [pickedGames, setPickedGames] = useState([])

    function pickedFilter(k,w){
        const pickedGame = [k, w]
        
        setPickedGames([pickedGames]+[pickedGame])
   }
    
   
    return(
        <div className="text_center">
            {selectedWeeksGames.map(game=><PickemBox key={`${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`} boxKey={`${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`} teams={game.team} teamData={teamData} handleClick={handleClick} winTeam={winTeam} pickedFilter={pickedFilter}/>)}
            {console.log(pickedGames)}
        </div>
    )
}

export default Gamebox