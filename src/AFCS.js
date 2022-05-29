import React,{useState} from "react"
import TeamCard from "./TeamCard"

function AFCS({teamData}){
   
  
    const presortData= teamData.sort((a,b) =>(a.team.losses > b.team.losses) ? 1: -1)
    const sortData= presortData.sort((a,b) =>(a.team.wins < b.team.wins) ? 1: -1)
    
    const [selectedTeam, setSelectedTeam] = useState("bananas")

 const afcSouthFilter = sortData.map(team=>{
    if(team.team.conference === "AFC"){
        if(team.team.division ==="south")
    
    return(
        <div className="standingbox" key={team.team.shortDisplayName} onClick={(e)=>teamClick(e)} value={team.team}>
        <span className="teamnamebox">{team.team.shortDisplayName}</span>
        <span className="winbox">{team.team.wins}</span>
        <span className="losebox">{team.team.losses}</span>
        </div>
    )  
    else return null
}else return null
})
function teamClick(e){
    sortData.map(team=>{
        if(team.team.shortDisplayName ===e.target.innerText)
        return(setSelectedTeam(team))
        else return null
})   
}


    return(
        <div>
        <div className="standingcolumn">
            <div>
                <span className="titlebox">AFC South Standings</span>
                <span className="winbox">Wins</span>
                <span className="losebox">Losses</span>
                </div>
                {afcSouthFilter}<br/><br/><br/><br/>
                </div>
            <div className="teamcard"><TeamCard team={selectedTeam}/></div>
        </div>
    )
}

export default AFCS