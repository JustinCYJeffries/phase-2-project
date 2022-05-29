import React from "react"

function NFL({teamData}){
   
    const presortData= teamData.sort((a,b) =>(a.team.losses > b.team.losses) ? 1: -1)
 const sortData= presortData.sort((a,b) =>(a.team.wins < b.team.wins) ? 1: -1)
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
                <span className="titlebox">AFC Standings</span>
                <span className="winbox">Wins</span>
                <span className="losebox">Losses</span>
                </div>
            {afcFilter}
            </div>
            <div className="conferencebox">
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
            <div className="conferencebox">
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

export default NFL