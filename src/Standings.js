import React from "react"

function Standings({teamData}){
    
    const afcFilter = teamData.map(team=>{
        if(team.team.conference == "AFC")
        return(
            <div key={team.team.shortDisplayName}>
            <span>{team.team.shortDisplayName}</span>
            <span>{team.team.wins}</span>
            <span>{team.team.losses}</span>
            </div>
        )  
    })
    const nfcFilter = teamData.map(team=>{
        if(team.team.conference == "NFC")
        return(
            <div key={team.team.shortDisplayName}>
            <span>{team.team.shortDisplayName}</span>
            <span>{team.team.wins}</span>
            <span>{team.team.losses}</span>
            </div>
        )  
    })
    const afcNorthFilter = teamData.map(team=>{
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
    const afcSouthFilter = teamData.map(team=>{
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
    const afcEastFilter = teamData.map(team=>{
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
    const afcWestFilter = teamData.map(team=>{
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
    const nfcNorthFilter = teamData.map(team=>{
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
    const nfcSouthFilter = teamData.map(team=>{
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
    const nfcEastFilter = teamData.map(team=>{
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
    const nfcWestFilter = teamData.map(team=>{
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
            <h3>NFC Playoffs</h3>
            {nfcFilter}
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
            <div>
                <h3>NFC North</h3>
                {nfcNorthFilter}
            </div>
            <div>
                <h3>NFC South</h3>
                {nfcSouthFilter}
            </div>
            <div>
                <h3>NFC East</h3>
                {nfcEastFilter}
            </div>
            <div>
                <h3>NFC West</h3>
                {nfcWestFilter}
            </div>
        </div>
    )
}

export default Standings