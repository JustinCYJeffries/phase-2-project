import './App.css';
import React, {useEffect, useState} from "react"
import MainContainer from './MainContainer'

function App() {
  const [userList, setUserList] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((r) => r.json())
      .then(setUserList);
  }, []);

  return (
    <div>
    <MainContainer userList={userList} />  
    
    </div>
  );
}

export default App;
