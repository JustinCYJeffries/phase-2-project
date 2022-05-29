import React from "react"

function NFC({teamData}){
   
  
 const sortData= teamData.sort((a,b) =>(a.team.wins < b.team.wins) ? 1: -1)
 
 const nfcFilter = sortData.map(team=>{
    if(team.team.conference == "NFC")
    return(
        <div className="standingbox" key={team.team.shortDisplayName}>
        <span className="teamnamebox">{team.team.shortDisplayName}</span>
        <span className="winbox">{team.team.wins}</span>
        <span className="losebox">{team.team.losses}</span>
        </div>
    )  
})
const nfcNorthFilter = sortData.map(team=>{
    if(team.team.conference == "NFC"){
        if(team.team.division =="north")
    
    return(
        <div className="standingbox"key={team.team.shortDisplayName}>
        <span className="teamnamebox">{team.team.shortDisplayName}</span>
        <span className="winbox">{team.team.wins}</span>
        <span className="losebox">{team.team.losses}</span>
        </div>
    )  
}})
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
        <div>
        <div className="conferenceboxpad">
        <div>
            <span className="titlebox">NFC Standings</span>
            <span className="winbox">Wins</span>
            <span className="losebox">Losses</span>
            </div>
        {nfcFilter}
        </div>
        <div className="conferenceboxpad">
        <div>
            <div>
                <span className="titlebox">NFC North Standings</span>
                <span className="winbox">Wins</span>
                <span className="losebox">Losses</span>
                </div>
                {nfcNorthFilter}
            </div>
            <div>
            <div>
                <span className="titlebox">NFC South Standings</span>
                <span className="winbox">Wins</span>
                <span className="losebox">Losses</span>
                </div>
                {nfcSouthFilter}
            </div>
            </div>
            <div className="conferenceboxpad">
            <div>
            <div>
                <span className="titlebox">NFC East Standings</span>
                <span className="winbox">Wins</span>
                <span className="losebox">Losses</span>
                </div>
                {nfcEastFilter}
            </div>
            <div>
            <div>
                <span className="titlebox">NFC West Standings</span>
                <span className="winbox">Wins</span>
                <span className="losebox">Losses</span>
                </div>
                {nfcWestFilter}
            </div>
            </div>
        </div>
    )
}

export default NFC