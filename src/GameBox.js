import React, { useState } from "react"
import PickemBox from "./PickemBox"

function Gamebox({selectedWeeksGames, selectedWeek, teamData, handleClick, winTeam }){
   

    
    
   
    return(
        <div className="text_center">
            {selectedWeeksGames.map(game=> <PickemBox key={`${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`} boxKey={`${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`} teams={game.team} teamData={teamData} handleClick={handleClick} winTeam={winTeam} />)}
            
        </div>
    )
}

export default Gamebox



//if (pickedGames.map(pgame=>pgame.boxKey != `${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`))
            //return <PickemBox key={`${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`} boxKey={`${selectedWeek}`+`${game.team[0].id}`+`${game.team[1].id}`} teams={game.team} teamData={teamData} handleClick={handleClick} winTeam={winTeam} pickedFilter={pickedFilter}/>
            //else console.log(pickedGames)
        //})
          //  }
            
          