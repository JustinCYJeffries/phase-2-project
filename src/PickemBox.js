import React from "react"

function PickemBox({teams, teamData, setTeamData}){

    const homeTeam=teams[1].id
    const awayTeam = teams[0].id
    

    
    const foundHomeTeam = teamData.map(element => {
        if (element.team.abbreviation == homeTeam)
        return(
            element.team.displayName
        )
    });
    
    const foundAwayTeam = teamData.map(element => {
        if (element.team.abbreviation == awayTeam)
        return(
            element.team.displayName
        )
    });




    return(
        <div className='box'>
            <h3 className='text_center'>{foundAwayTeam} @ {foundHomeTeam}</h3>
            <button>{teams[0].id} Win</button>
            <button>{teams[1].id} Win</button>
        </div>
    )
}

export default PickemBox