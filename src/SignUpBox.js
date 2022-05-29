import React, { useState, useEffect } from "react"
import GameBox from "./GameBox";


function SignUpBox({addUser, selectedWeeksGames, selectedWeek, teamData, handleClick, winTeam, handlePickedData, userList}){
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
        const indexcalc = userList.length
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
          if(submitted==true){
          return(<div>
            <h2>Add Your User Name</h2>
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
        </div>)}
        else return(<GameBox selectedWeeksGames={selectedWeeksGames} selectedWeek={selectedWeek} teamData={teamData}  handleClick={handleClick} winTeam={winTeam} handlePickedData={handlePickedData}/>)
      }

      return(render())

}

export default SignUpBox