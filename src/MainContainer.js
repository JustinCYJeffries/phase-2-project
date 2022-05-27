import React, {useState, useEffect} from "react"
import Header from './Header'
import GameBox from './GameBox'
import Standings from './Standings'


function MainContainer() {
  const [selectedWeek, setSelectedWeek] = useState(1)
  const [selectedWeeksGames, setSelectedWeekGames] = useState([])
  const [teamData, setTeamData] = useState([])
  const [winTeam, setWinTeam] = useState(" ")
  const [loseTeam, setLoseTeam] = useState([])
 
  
  const fetchWeekData = () => {
    fetch(`https://api.myfantasyleague.com/fflnetdynamic2022/nfl_sched_${selectedWeek}.json`)
    .then(r=>r.json())
    .then((r)=>{
        
        setSelectedWeekGames(r.nflSchedule.matchup)})
      
      .catch((error) => {
        console.log(error);
        
      });
  };

  const fetchTeamData = () => {
    fetch("http://localhost:3000/teams")
    .then(r=>r.json())
    .then((r)=>{
        setTeamData(r)
     
        
    })
      
      .catch((error) => {
        console.log(error);
        
      });
  };

 function handleClick(e){
  let winTeam =  e.target.attributes.winner.value
  let loser =  e.target.attributes.loser.value
    
    const winnerWinner = () =>{
      
      const winningTeam = teamData.map(element =>{
            if(element.team.abbreviation == winTeam){
               element.team.wins++
                
            return ({ ...element})
           
            }
            

            return (element)
    })
        setTeamData(winningTeam)
    }
    const loserLoser = () =>{
        const loserTeam = teamData.map(element =>{
            if(element.team.abbreviation == loser){
               element.team.losses++

            return ({ ...element})
            
            }
            

            return (element)
    })
        setTeamData(loserTeam)
    }
       winnerWinner();
       loserLoser()
  }
    
  
  

  function handleWeek(e){
    setSelectedWeek(e.target.value)
}


  
  useEffect(()=> {
    fetchWeekData()
    
  }, [selectedWeek])

 
  useEffect(()=> {
   fetchTeamData()
  }, []) 
  

  return (
    <div>
      
    <Header selectedWeek={selectedWeek}  handleWeek={handleWeek}/>
    <GameBox selectedWeeksGames={selectedWeeksGames} selectedWeek={selectedWeek} teamData={teamData}  handleClick={handleClick} winTeam={winTeam}/>
    <Standings teamData={teamData}/>
    </div>
  );
}

export default MainContainer