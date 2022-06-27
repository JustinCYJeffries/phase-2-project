import React from "react"

function ConferenceBox({teamData, conference}){
   
  
    const presortData= teamData.sort((a,b) =>(a.team.losses > b.team.losses) ? 1: -1)
    const sortData= presortData.sort((a,b) =>(a.team.wins < b.team.wins) ? 1: -1)




 const conferenceFinder = sortData.map(team=>{
       
    if(team.team.conference === conference)
    return(
        <div className="standingbox" key={team.team.shortDisplayName}>
        <span className="teamnamebox">{team.team.shortDisplayName}</span>
        <span className="winbox">{team.team.wins}</span>
        <span className="losebox">{team.team.losses}</span>
        </div>
    )  
    else return null
})

const northFilter = sortData.map(team=>{
    if(team.team.conference === conference){
        if(team.team.division ==="north")
    
    return(
        <div className="standingbox" key={team.team.shortDisplayName}>
        <span className="teamnamebox">{team.team.shortDisplayName}</span>
        <span className="winbox">{team.team.wins}</span>
        <span className="losebox">{team.team.losses}</span>
        </div>
    )  
    else return null
}else return null
})
const southFilter = sortData.map(team=>{
    if(team.team.conference === conference){
        if(team.team.division ==="south")
    
    return(
        <div className="standingbox" key={team.team.shortDisplayName}>
        <span className="teamnamebox">{team.team.shortDisplayName}</span>
        <span className="winbox">{team.team.wins}</span>
        <span className="losebox">{team.team.losses}</span>
        </div>
    )  
    else return null
}else return null
})
const eastFilter = sortData.map(team=>{
    if(team.team.conference === conference){
        if(team.team.division ==="east")
    
    return(
        <div className="standingbox"key={team.team.shortDisplayName}>
        <span className="teamnamebox">{team.team.shortDisplayName}</span>
        <span className="winbox">{team.team.wins}</span>
        <span className="losebox">{team.team.losses}</span>
        </div>
    )  
    else return null
}else return null
})
const westFilter = sortData.map(team=>{
    if(team.team.conference === conference){
        if(team.team.division ==="west")
    
    return(
        <div className="standingbox"key={team.team.shortDisplayName}>
        <span className="teamnamebox">{team.team.shortDisplayName}</span>
        <span className="winbox">{team.team.wins}</span>
        <span className="losebox">{team.team.losses}</span>
        </div>
    ) 
    else return null 
}else return null
})


    return(
        <div className="standingdisplaybox">
            <div className="conferenceboxpad">
           
           <div>
               <span className="titlebox">{`${conference} Standings`}</span>
               <span className="winbox">Wins</span>
               <span className="losebox">Losses</span>
               </div>
           {conferenceFinder}
           </div>
         <div className="conferenceboxpad">
           <div>
           <div>
               <span className="titlebox">{`${conference} North Standings`}</span>
               <span className="winbox">Wins</span>
               <span className="losebox">Losses</span>
               </div>
               {northFilter}
           </div>
           <div>
           <div>
               <span className="titlebox">{`${conference} South Standings`}</span>
               <span className="winbox">Wins</span>
               <span className="losebox">Losses</span>
               </div>
               {southFilter}
           </div>
           </div>
           <div className="conferenceboxpad">
           <div>
           <div>
               <span className="titlebox">{`${conference} East Standings`}</span>
               <span className="winbox">Wins</span>
               <span className="losebox">Losses</span>
               </div>
               {eastFilter}
           </div>
           <div>
           <div>
               <span className="titlebox">{`${conference} West Standings`}</span>
               <span className="winbox">Wins</span>
               <span className="losebox">Losses</span>
               </div>
               {westFilter}
           </div>
           </div>
        </div>
    )
}

export default ConferenceBox