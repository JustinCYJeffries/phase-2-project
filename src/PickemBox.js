import React from "react"

function PickemBox({teams, teamData, setTeamData}){

    function homeTeam(teams){
        return (teamData===teams[1].id)
    }
    
    console.log(homeTeam)
    return(
        <div className='box'>
            <h3 className='text_center'>{teams[0].id} @ {teams[1].id}</h3>
            <button>{teams[0].id} Win</button>
            <button>{teams[1].id} Win</button>
        </div>
    )
}

export default PickemBox