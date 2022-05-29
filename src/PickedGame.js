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
        return(
            <div  key={homeElement.displayName}>
                <img src={`${homeElement.logos[0].href}`} key={homeElement.displayName} className='logohandler' />
                <p className="displayname"> {homeElement.displayName} Picked</p>
            </div>
        )}
            
           
            if (winner==awayTeam){
                return(
                    <div  key={awayElement.displayName}>
                        <img src={`${awayElement.logos[0].href}`} key={awayElement.displayName} className='logohandler' />
                        <p className="displayname">{awayElement.displayName} Picked</p>
                    </div>
                )}
               
        
       
    })



    return(
        <div className='box'>
            <h3 className='text_center'>{awayElement.displayName} @ {homeElement.displayName}</h3>
            <div>
      {foundwinteam}
    </div>
        </div>
    )
}

export default PickedGame