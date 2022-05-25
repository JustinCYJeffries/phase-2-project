import './App.css';
import React, {useState, useEffect} from "react"
import Header from './Header'
import GameBox from './GameBox'
import Standings from './Standings'


function App() {
  const [selectedWeek, setSelectedWeek] = useState(1)
  const [selectedWeeksGames, setSelectedWeekGames] = useState([])

  function handleWeek(e){
    setSelectedWeek(e.target.value)
}
  
  useEffect(()=> {
    fetch(`https://api.myfantasyleague.com/fflnetdynamic2022/nfl_sched_${selectedWeek}.json`)
    .then(r=>r.json())
    .then((r)=>setSelectedWeekGames(r.nflSchedule.matchup))
  }, [selectedWeek])
  

  return (
    <div>
    <Header selectedWeek={selectedWeek}  handleWeek={handleWeek}/>
    <GameBox selectedWeeksGames={selectedWeeksGames} selectedWeek={selectedWeek} />
    <Standings />
    </div>
  );
}

export default App;
