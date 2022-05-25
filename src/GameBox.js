import React from "react"
import PickemBox from "./PickemBox"

function Gamebox({selectedWeeksGames, selectedWeek}){
   
   
    return(
        <div class="text_center">
            {selectedWeeksGames.map(game=><PickemBox teams={game.team} />)}
        </div>
    )
}

export default Gamebox