import React, {useState, useEffect} from "react"
import Standings from './Standings'
import SignUpBox from './SignUpBox'


function MainContainer() {
  const [selectedWeek, setSelectedWeek] = useState(1)
  const [selectedWeeksGames, setSelectedWeekGames] = useState([])
  const [teamData, setTeamData] = useState([])
  

  const [userList, setUserList] = useState([])
  
  
  
  
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

function handlePickedData(pickedData){
  const dataIndex=userList.length
  const pickey = userList.map(user=>{
    
    
    if (dataIndex=== user.id){  
      user.picks = pickedData
      fetch(`http://localhost:3000/user/${dataIndex}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         name:user.name,
          picks:pickedData}),
      })
    
      return user
  }
  else return user}
  )
  
    setUserList(pickey)
   
  }
  useEffect(()=>{
    
          
          
  }, [handlePickedData])
  
  


  function handleAddUser(newUser){
   
  
   setUserList(userList.concat(newUser))

  }
 
  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((r) => r.json())
      .then((r)=>setUserList(r));
  }, []);




 function handleClick(e){
  let winTeam =  e.target.attributes.winner.value
  let loser =  e.target.attributes.loser.value
    
    const winnerWinner = () =>{
      
      const winningTeam = teamData.map(element =>{
            if(element.team.abbreviation === winTeam){
               element.team.wins++
                
            return ({ ...element})
           
            }
            

            return (element)
    })
        setTeamData(winningTeam)
    }
    const loserLoser = () =>{
        const loserTeam = teamData.map(element =>{
            if(element.team.abbreviation === loser){
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
    
    
    <SignUpBox handlePickedData={handlePickedData} userList={userList} addUser={handleAddUser}selectedWeeksGames={selectedWeeksGames} selectedWeek={selectedWeek} teamData={teamData}  handleClick={handleClick} handleWeek={handleWeek}/>
    <Standings teamData={teamData} userList={userList}/>
    </div>
  );
}

export default MainContainer