import React from "react"


function PickedGame({teams, teamData, handleClick, boxKey, pickedFilter, handleFilter, selectedWeek, winTeam}){

    const homeTeam=teams[1].id
    const awayTeam = teams[0].id
   let awayElement = [] 
   let homeElement = [] 
   


    
    const foundHomeTeam = teamData.map(element => {
        if (element.team.abbreviation == homeTeam)
        homeElement = element.team
        return(
            element.team.displayName
        )
    });
    
    const foundAwayTeam = teamData.map(element => {
        if (element.team.abbreviation == awayTeam){
            awayElement = element.team
            return(
            element.team.displayName
            
        )}
    });
    
    const foundwinteam = winTeam.map(winner =>{
      
        if(winner == homeTeam){
        return(homeElement.displayName)}
            
           
            if (winner==awayTeam){
            return (awayElement.displayName)}
               
        
       
    })



    return(
        <div className='box'>
            <h3 className='text_center'>{awayElement.displayName} @ {homeElement.displayName}</h3>
            <div>
      <h3>{foundwinteam} WIN!!</h3>
    </div>
        </div>
    )
}

export default PickedGame