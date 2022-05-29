import React from "react"

function AFCN({teamData}){
   
  
    const presortData= teamData.sort((a,b) =>(a.team.losses > b.team.losses) ? 1: -1)
    const sortData= presortData.sort((a,b) =>(a.team.wins < b.team.wins) ? 1: -1)
 
 const afcNorthFilter = sortData.map(team=>{
    if(team.team.conference == "AFC"){
        if(team.team.division =="north")
    
    return(
        <div className="standingbox" key={team.team.shortDisplayName}>
        <span className="teamnamebox">{team.team.shortDisplayName}</span>
        <span className="winbox">{team.team.wins}</span>
        <span className="losebox">{team.team.losses}</span>
        </div>
    )  
}})

    return(
        <div>
            <div>
            <div>
                <span className="titlebox">AFC North Standings</span>
                <span className="winbox">Wins</span>
                <span className="losebox">Losses</span>
                </div>
                {afcNorthFilter}
            </div>
            <br/><br/><br/><br/>
            </div>
    )
}

export default AFCN