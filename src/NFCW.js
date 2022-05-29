import React from "react"

function NFCW({teamData}){
   
  
 const sortData= teamData.sort((a,b) =>(a.team.wins < b.team.wins) ? 1: -1)
 const nfcWestFilter = sortData.map(team=>{
    if(team.team.conference == "NFC"){
        if(team.team.division =="west")
    
    return(
        <div className="standingbox"key={team.team.shortDisplayName}>
        <span className="teamnamebox">{team.team.shortDisplayName}</span>
        <span className="winbox">{team.team.wins}</span>
        <span className="losebox">{team.team.losses}</span>
        </div>
    )  
}})


    return(
        <div><div>
            <div>
                <span className="titlebox">NFC West Standings</span>
                <span className="winbox">Wins</span>
                <span className="losebox">Losses</span>
                </div>
                {nfcWestFilter}
            </div><br/><br/><br/><br/>
        </div>
    )
}

export default NFCW