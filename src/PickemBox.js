import React from "react"
import Buttons from "./Buttons"

function PickemBox({teams, teamData, handleClick, winTeam, boxKey, pickedFilter, handleFilter, selectedWeek}){

    const homeTeam=teams[1].id
    const awayTeam = teams[0].id
   let awayElement = [] 
   let homeElement = [] 
   
   

    
    const foundHomeTeam = teamData.map(element => {
        if (element.team.abbreviation === homeTeam)
        homeElement = element.team
        return(
            element.team.displayName
        )
    });
    
    const foundAwayTeam = teamData.map(element => {
        if (element.team.abbreviation === awayTeam){
            awayElement = element.team
            return(
            element.team.displayName
            
        )}else return null
    });

  


    return(
        <div className='box' key={foundAwayTeam}>
            <h3 className="teampickemboxes" key={foundHomeTeam}>{awayElement.displayName} @ {homeElement.displayName}</h3>
            <Buttons awayElement={awayElement} homeElement={homeElement} teamData={teamData} handleClick={handleClick} winTeam={winTeam} boxKey={boxKey} pickedFilter={pickedFilter} handleFilter={handleFilter} selectedWeek={selectedWeek}/>
            
        </div>
    )
}

export default PickemBox