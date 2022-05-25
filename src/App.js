import './App.css';
import React, {useState, useEffect} from "react"
import Header from './Header'
import GameBox from './GameBox'
import Standings from './Standings'


function App() {
  const [selectedWeek, setSelectedWeek] = useState(1)
  const [selectedWeeksGames, setSelectedWeekGames] = useState([])
  const [teamData, setTeamData] = useState([])

  function handleWeek(e){
    setSelectedWeek(e.target.value)
}
  
  useEffect(()=> {
    fetch(`https://api.myfantasyleague.com/fflnetdynamic2022/nfl_sched_${selectedWeek}.json`)
    .then(r=>r.json())
    .then((r)=>setSelectedWeekGames(r.nflSchedule.matchup))
  }, [selectedWeek])

  useEffect(()=> {
    fetch("http://localhost:3000/teams")
    .then(r=>r.json())
    .then((r)=>setTeamData(r))
  }, [])
  

  return (
    <div>
      
    <Header selectedWeek={selectedWeek}  handleWeek={handleWeek}/>
    <GameBox selectedWeeksGames={selectedWeeksGames} selectedWeek={selectedWeek} teamData={teamData} setTeamData={setTeamData}/>
    <Standings teamData={teamData}/>
    </div>
  );
}

export default App;
