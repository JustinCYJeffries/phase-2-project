import React from "react"

function AFC({teamData}){
   
  
 const sortData= teamData.sort((a,b) =>(a.team.wins < b.team.wins) ? 1: -1)
 
 const afcFilter = sortData.map(team=>{
       
    if(team.team.conference == "AFC")
    return(
        <div className="standingbox" key={team.team.shortDisplayName}>
        <span className="teamnamebox">{team.team.shortDisplayName}</span>
        <span className="winbox">{team.team.wins}</span>
        <span className="losebox">{team.team.losses}</span>
        </div>
    )  
})

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
const afcSouthFilter = sortData.map(team=>{
    if(team.team.conference == "AFC"){
        if(team.team.division =="south")
    
    return(
        <div className="standingbox" key={team.team.shortDisplayName}>
        <span className="teamnamebox">{team.team.shortDisplayName}</span>
        <span className="winbox">{team.team.wins}</span>
        <span className="losebox">{team.team.losses}</span>
        </div>
    )  
}})
const afcEastFilter = sortData.map(team=>{
    if(team.team.conference == "AFC"){
        if(team.team.division =="east")
    
    return(
        <div className="standingbox"key={team.team.shortDisplayName}>
        <span className="teamnamebox">{team.team.shortDisplayName}</span>
        <span className="winbox">{team.team.wins}</span>
        <span className="losebox">{team.team.losses}</span>
        </div>
    )  
}})
const afcWestFilter = sortData.map(team=>{
    if(team.team.conference == "AFC"){
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
        <div>
            <div>
           
           <div>
               <span className="titlebox">AFC Standings</span>
               <span className="winbox">Wins</span>
               <span className="losebox">Losses</span>
               </div>
           {afcFilter}
           </div>
         
           <div>
           <div>
               <span className="titlebox">AFC North Standings</span>
               <span className="winbox">Wins</span>
               <span className="losebox">Losses</span>
               </div>
               {afcNorthFilter}
           </div>
           <div>
           <div>
               <span className="titlebox">AFC South Standings</span>
               <span className="winbox">Wins</span>
               <span className="losebox">Losses</span>
               </div>
               {afcSouthFilter}
           </div>
           <div>
           <div>
               <span className="titlebox">AFC East Standings</span>
               <span className="winbox">Wins</span>
               <span className="losebox">Losses</span>
               </div>
               {afcEastFilter}
           </div>
           <div>
           <div>
               <span className="titlebox">AFC West Standings</span>
               <span className="winbox">Wins</span>
               <span className="losebox">Losses</span>
               </div>
               {afcWestFilter}
           </div>
           
        </div>
    )
}

export default AFC