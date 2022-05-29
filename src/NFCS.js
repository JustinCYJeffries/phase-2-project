import React from "react"

function NFCS({teamData}){
   
  
 const sortData= teamData.sort((a,b) =>(a.team.wins < b.team.wins) ? 1: -1)
 
 const nfcSouthFilter = sortData.map(team=>{
    if(team.team.conference == "NFC"){
        if(team.team.division =="south")
    
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
            <span className="titlebox">NFC South Standings</span>
            <span className="winbox">Wins</span>
            <span className="losebox">Losses</span>
            </div>
            {nfcSouthFilter}
        </div>
    )
}

export default NFCS