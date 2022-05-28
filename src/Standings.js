import React from "react"
import AFC from "./AFC"
import AFCN from "./AFCN"
import AFCS from "./AFCS"
import AFCE from "./AFCE"
import AFCW from "./AFCW"
import NFC from "./NFC"
import NFCN from "./NFCN"
import NFCS from "./NFCS"
import NFCE from "./NFCE"
import NFCW from "./NFCW"
import NFL from "./NFL"
import "./Standings.css"

import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";

   function Standings({teamData}) {
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
                    <Link to="/AFCN">AFC West</Link>
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
                    <Link to="/NFCN">NFC West</Link>
                    </li>
                </ul>
              </li>
            </ul>
          </nav>
        
          </div>
  
         
          <Routes>
            <Route path="/AFC" element={<AFC teamData={teamData}/>} />
            <Route path="/AFCN" element={<AFCN teamData={teamData}/>} />
            <Route path="/AFCS" element={<AFCS teamData={teamData}/>} />
            <Route path="/AFCE" element={<AFCE teamData={teamData}/>} />
            <Route path="/AFCW" element={<AFCW teamData={teamData}/>} />
            
            <Route path="/NFC" element={<NFC teamData={teamData}/>} />
            <Route path="/NFCN" element={<NFCN teamData={teamData}/>} />
            <Route path="/NFCS" element={<NFCS teamData={teamData}/>} />
            <Route path="/NFCE" element={<NFCE teamData={teamData}/>} />
            <Route path="/NFCW" element={<NFCW teamData={teamData}/>} />
            
            <Route path="/" element={<NFL teamData={teamData}/>} />
              
            
          </Routes>
        </div>
      </Router>
    );
  }
  

  export default Standings