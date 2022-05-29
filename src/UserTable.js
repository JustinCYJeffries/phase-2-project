import React from "react"


function UserTable({picks}){
    const presortData= picks.sort((z,y) =>(Object.values(z.a[2])[0] > Object.values(y.a[2])[0]) ? 1: -1)
  const games =  presortData.map(pick=>{
        let hometeam= Object.values(pick.a[3])[0]
        let awayteam= Object.values(pick.a[4])[0]
        let selWeek=Object.values(pick.a[2])[0]
        let winner = Object.values(pick.a[5])[0]
        if (winner===hometeam){
            return(
                <div key={`${selWeek}+${awayteam}+${hometeam}`} className="predictcontainer">
                    Week:{selWeek} &nbsp;  <span className="predictboxloss">{awayteam}</span> @ <span className="predictboxwin">{hometeam}</span>
                    </div>  
            )}
            else return(
                <div key={`${selWeek}+${awayteam}+${hometeam}`} className="predictcontainer">
                    Week:{selWeek} &nbsp;  <span className="predictboxwin">{awayteam}</span> @ <span className="predictboxloss">{hometeam}</span>
                    </div>  
            )
        
        
    })

   
    
    return(
        <div>
            {games}
            <br/><br/><br/><br/><br/>
        </div>
    )
}

export default UserTable