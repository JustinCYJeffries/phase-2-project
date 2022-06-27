import React,{useState} from "react"
import TeamCard from "./TeamCard"

function DivisionBox({teamData, divison, conference}){
   
  
const presortData= teamData.sort((a,b) =>(a.team.losses > b.team.losses) ? 1: -1)
const sortData= presortData.sort((a,b) =>(a.team.wins < b.team.wins) ? 1: -1)

const [selectedTeam, setSelectedTeam] = useState()


 const divFinder = sortData.map(team=>{
    if(team.team.conference === conference){
        if(team.team.division === divison)
    
    return(
        <div className="standingbox"key={team.team.shortDisplayName} onClick={(e)=>teamClick(e)} value={team.team}>
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
            <span className="titlebox">{`${conference} ${divison}  Standings`}</span>
            <span className="winbox">Wins</span>
            <span className="losebox">Losses</span>
            </div>
            {divFinder}<br/><br/><br/><br/>
            </div>
            <div className="teamcard"><TeamCard team={selectedTeam}/></div>
        </div>
    )
}

export default DivisionBox