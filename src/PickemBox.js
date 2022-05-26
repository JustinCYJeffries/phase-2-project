import React from "react"

function PickemBox({teams, teamData, setTeamData}){

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
            <h3 className='text_center'>{awayElement.displayName} @ {homeElement.displayName}</h3>
            <button>{awayElement.shortDisplayName} Win</button>
            <button>{homeElement.shortDisplayName} Win</button>
        </div>
    )
}

export default PickemBox