import React from "react"
import PickemBox from "./PickemBox"

function Gamebox({selectedWeeksGames, selectedWeek, teamData, handleClick, winTeam }){
   
    
   
    return(
        <div className="text_center">
            {selectedWeeksGames.map(game=><PickemBox key={`${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`} teams={game.team} teamData={teamData} handleClick={handleClick} winTeam={winTeam}/>)}

        </div>
    )
}

export default Gamebox