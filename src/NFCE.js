import React from "react"

function NFCE({teamData}){
   
  
 const sortData= teamData.sort((a,b) =>(a.team.wins < b.team.wins) ? 1: -1)
 const nfcEastFilter = sortData.map(team=>{
    if(team.team.conference == "NFC"){
        if(team.team.division =="east")
    
    return(
        <div className="standingbox"key={team.team.shortDisplayName}>
        <span className="teamnamebox">{team.team.shortDisplayName}</span>
        <span className="winbox">{team.team.wins}</span>
        <span className="losebox">{team.team.losses}</span>
        </div>
    )  
}})

    return(
        <div>
        <div>
            <span className="titlebox">NFC East Standings</span>
            <span className="winbox">Wins</span>
            <span className="losebox">Losses</span>
            </div>
            {nfcEastFilter}
        </div>
    )
}

export default NFCE