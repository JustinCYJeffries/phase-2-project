import React,{useState} from "react"
import TeamCard from "./TeamCard"

function AFCE({teamData}){
   
    
  
    const presortData= teamData.sort((a,b) =>(a.team.losses > b.team.losses) ? 1: -1)
 const sortData= presortData.sort((a,b) =>(a.team.wins < b.team.wins) ? 1: -1)
 
 const [selectedTeam, setSelectedTeam] = useState("bananas")

 const afcEastFilter = sortData.map(team=>{
    if(team.team.conference == "AFC"){
        if(team.team.division =="east")
    
    return(
        <div className="standingbox"key={team.team.shortDisplayName} onClick={(e)=>teamClick(e)} value={team.team}>
        <span className="teamnamebox">{team.team.shortDisplayName}</span>
        <span className="winbox">{team.team.wins}</span>
        <span className="losebox">{team.team.losses}</span>
        </div>
    )  
}})

function teamClick(e){
    sortData.map(team=>{
        if(team.team.shortDisplayName ===e.target.innerText)
        return(setSelectedTeam(team))
    
})   
}

    return(
        <div>
        <div className="standingcolumn">
            <div>
                <span className="titlebox">AFC East Standings</span>
                <span className="winbox">Wins</span>
                <span className="losebox">Losses</span>
            </div>
            {afcEastFilter}
        </div>
            <div className="teamcard"><TeamCard team={selectedTeam}/></div>
        </div>
    )
}

export default AFCE