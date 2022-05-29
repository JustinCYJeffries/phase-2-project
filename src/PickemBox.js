import React from "react"
import Buttons from "./Buttons"

function PickemBox({teams, teamData, handleClick, winTeam, boxKey, pickedFilter, handleFilter, selectedWeek}){

    const homeTeam=teams[1].id
    const awayTeam = teams[0].id
   let awayElement = [] 
   let homeElement = [] 
   
   

    
    const foundHomeTeam = teamData.map(element => {
        if (element.team.abbreviation == homeTeam)
        homeElement = element.team
        return(
            element.team.displayName
        )
    });
    
    const foundAwayTeam = teamData.map(element => {
        if (element.team.abbreviation == awayTeam){
            awayElement = element.team
            return(
            element.team.displayName
            
        )}
    });
    



    return(
        <div className='box'>
            <h3 className="teampickemboxes">{awayElement.displayName} @ {homeElement.displayName}</h3><br/><br/>
            <Buttons awayElement={awayElement} homeElement={homeElement} teamData={teamData} handleClick={handleClick} winTeam={winTeam} boxKey={boxKey} pickedFilter={pickedFilter} handleFilter={handleFilter} selectedWeek={selectedWeek}/>
            
        </div>
    )
}

export default PickemBox