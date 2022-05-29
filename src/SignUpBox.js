import React, { useState } from "react"
import GameBox from "./GameBox";
import Header from "./Header";


function SignUpBox({addUser, selectedWeeksGames, selectedWeek, teamData, handleClick, winTeam, handlePickedData, userList, handleWeek}){
    const [formData, setFormData] = useState({
        name: "",
        picks:[] 
      });
      const [submitted, setSubmitted] = useState(true)
      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }
      function handleSubmit(e) {
        e.preventDefault()
        
        const newUser = {
           
          "name": formData.name,
            "picks": [],
            
          }
        fetch("http://localhost:3000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((r) => r.json())
          .then(addUser);
          setSubmitted(false)
          
      
    }
    
          
     



      function render(){
          if(submitted===true){
          return(<div className='text_center'>
            <h2>Add Your User Name To Begin</h2>
            <form onSubmit={(e)=>handleSubmit(e)}>
                
                  <input type="text"
                    
                    label="Name"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  
                  <button type="submit">Submit</button>
              </form>
              <br/><br/><br/>
        </div>)}
        else return(<div><Header selectedWeek={selectedWeek}  handleWeek={handleWeek}/>
          <GameBox selectedWeeksGames={selectedWeeksGames} selectedWeek={selectedWeek} teamData={teamData}  handleClick={handleClick} winTeam={winTeam} handlePickedData={handlePickedData}/>
        </div>)
      }

      return(render())

}

export default SignUpBox