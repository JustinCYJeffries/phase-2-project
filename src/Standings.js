import React from "react"
import ConferenceBox from "./ConferenceBox"
import NFL from "./NFL"
import "./Standings.css"
import Users from "./Users"
import DivisionBox from "./DivisionBox"

import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";


   function Standings({teamData, userList}) {
    return (
      <Router>
        <div>
            <div>
          <nav>
            <ul className="main-navigation ">
              <li>
                <Link to="/">NFL</Link>
              </li>
              <li>
                <Link to="/AFC">AFC</Link>
                <ul>
                    <li>
                    <Link to="/AFCN">AFC North</Link>
                    </li>
                    <li>
                    <Link to="/AFCS">AFC South</Link>
                    </li>
                    <li>
                    <Link to="/AFCE">AFC East</Link>
                    </li>
                    <li>
                    <Link to="/AFCW">AFC West</Link>
                    </li>
                </ul>
              </li>
              <li>
                <Link to="/NFC">NFC</Link>
                <ul>
                    <li>
                    <Link to="/NFCN">NFC North</Link>
                    </li>
                    <li>
                    <Link to="/NFCS">NFC South</Link>
                    </li>
                    <li>
                    <Link to="/NFCE">NFC East</Link>
                    </li>
                    <li>
                    <Link to="/NFCW">NFC West</Link>
                    </li>
                </ul>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
        
          </div>
  
         
          <Routes>
            <Route path="/AFC" element={<ConferenceBox teamData={teamData} conference="AFC"/>} />
            <Route path="/AFCN" element={<DivisionBox teamData={teamData} divison="north" conference="AFC"/>} />
            <Route path="/AFCS" element={<DivisionBox teamData={teamData} divison="south" conference="AFC"/>} />
            <Route path="/AFCE" element={<DivisionBox teamData={teamData} divison="east" conference="AFC"/>} />
            <Route path="/AFCW" element={<DivisionBox teamData={teamData} divison="west" conference="AFC"/>} />
            
            <Route path="/NFC" element={<ConferenceBox teamData={teamData} conference="NFC"/>} />
            <Route path="/NFCN" element={<DivisionBox teamData={teamData} divison="north" conference="NFC"/>} />
            <Route path="/NFCS" element={<DivisionBox teamData={teamData} divison="south" conference="NFC"/>} />
            <Route path="/NFCE" element={<DivisionBox teamData={teamData} divison="east" conference="NFC"/>} />
            <Route path="/NFCW" element={<DivisionBox teamData={teamData} divison="west" conference="NFC"/>} />
            <Route path="/users" element={<Users userList={userList}/>} />
            <Route path="/" element={<NFL teamData={teamData}/>} />
              
            
          </Routes>
        </div>
      </Router>
    );
  }
  

  export default Standings