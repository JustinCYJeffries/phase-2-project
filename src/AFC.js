import React from "react"

function AFC({teamData}){
   
  
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
            <h3>AFC Playoffs</h3>
            {afcFilter}
            </div>
            <div>
                <h3>AFC North</h3>
                {afcNorthFilter}
            </div>
            <div>
                <h3>AFC South</h3>
                {afcSouthFilter}
            </div>
            <div>
                <h3>AFC East</h3>
                {afcEastFilter}
            </div>
            <div>
                <h3>AFC West</h3>
                {afcWestFilter}
            </div>
           
        </div>
    )
}

export default AFC