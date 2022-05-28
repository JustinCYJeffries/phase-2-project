import React from "react"

function NFCE({teamData}){
   
  
 const sortData= teamData.sort((a,b) =>(a.team.wins < b.team.wins) ? 1: -1)
    const afcFilter = sortData.map(team=>{
       
        if(team.team.conference == "AFC")
        return(
            <div key={team.team.shortDisplayName}>
            <span>{team.team.shortDisplayName}</span>
            <span>{team.team.wins}</span>
            <span>{team.team.losses}</span>
            </div>
        )  
    })
    const nfcFilter = sortData.map(team=>{
        if(team.team.conference == "NFC")
        return(
            <div key={team.team.shortDisplayName}>
            <span>{team.team.shortDisplayName}</span>
            <span>{team.team.wins}</span>
            <span>{team.team.losses}</span>
            </div>
        )  
    })
    const afcNorthFilter = sortData.map(team=>{
        if(team.team.conference == "AFC"){
            if(team.team.division =="north")
        
        return(
            <div key={team.team.shortDisplayName}>
            <span>{team.team.shortDisplayName}</span>
            <span>{team.team.wins}</span>
            <span>{team.team.losses}</span>
            </div>
        )  
    }})
    const afcSouthFilter = sortData.map(team=>{
        if(team.team.conference == "AFC"){
            if(team.team.division =="south")
        
        return(
            <div key={team.team.shortDisplayName}>
            <span>{team.team.shortDisplayName}</span>
            <span>{team.team.wins}</span>
            <span>{team.team.losses}</span>
            </div>
        )  
    }})
    const afcEastFilter = sortData.map(team=>{
        if(team.team.conference == "AFC"){
            if(team.team.division =="east")
        
        return(
            <div key={team.team.shortDisplayName}>
            <span>{team.team.shortDisplayName}</span>
            <span>{team.team.wins}</span>
            <span>{team.team.losses}</span>
            </div>
        )  
    }})
    const afcWestFilter = sortData.map(team=>{
        if(team.team.conference == "AFC"){
            if(team.team.division =="west")
        
        return(
            <div key={team.team.shortDisplayName}>
            <span>{team.team.shortDisplayName}</span>
            <span>{team.team.wins}</span>
            <span>{team.team.losses}</span>
            </div>
        )  
    }})
    const nfcNorthFilter = sortData.map(team=>{
        if(team.team.conference == "NFC"){
            if(team.team.division =="north")
        
        return(
            <div key={team.team.shortDisplayName}>
            <span>{team.team.shortDisplayName}</span>
            <span>{team.team.wins}</span>
            <span>{team.team.losses}</span>
            </div>
        )  
    }})
    const nfcSouthFilter = sortData.map(team=>{
        if(team.team.conference == "NFC"){
            if(team.team.division =="south")
        
        return(
            <div key={team.team.shortDisplayName}>
            <span>{team.team.shortDisplayName}</span>
            <span>{team.team.wins}</span>
            <span>{team.team.losses}</span>
            </div>
        )  
    }})
    const nfcEastFilter = sortData.map(team=>{
        if(team.team.conference == "NFC"){
            if(team.team.division =="east")
        
        return(
            <div key={team.team.shortDisplayName}>
            <span>{team.team.shortDisplayName}</span>
            <span>{team.team.wins}</span>
            <span>{team.team.losses}</span>
            </div>
        )  
    }})
    const nfcWestFilter = sortData.map(team=>{
        if(team.team.conference == "NFC"){
            if(team.team.division =="west")
        
        return(
            <div key={team.team.shortDisplayName}>
            <span>{team.team.shortDisplayName}</span>
            <span>{team.team.wins}</span>
            <span>{team.team.losses}</span>
            </div>
        )  
    }})


    return(
        <div>
            
            <div>
                <h3>NFC East</h3>
                {nfcEastFilter}
            </div>
           
        </div>
    )
}

export default NFCE