import React from "react"

function TeamCard({team}){
    console.log(team)
    function validator(){
        const openInNewTab = (url) =>{
            const newWindow=window.open(url, "_blank", "noopener, noreferrer")
            if(newWindow) newWindow.opener = null
        }
        const onClickUrl = (url)=>{
            return()=>openInNewTab(url)
        }
        
    if(team!=="bananas"){
        return(<div>
            <div className="teamcard"><img src={`${team.team.logos[0].href}`} alt={team.team.color} className="cardlogohandler"/></div>
            <div className="teamcard">
                <h2>{team.team.displayName}</h2>
                <span onClick={onClickUrl(`${team.team.links[0].href}`)}style={{"color":`#${team.team.color}`, "fontWeight":"900"}}>Clubhouse</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span onClick={onClickUrl(`${team.team.links[1].href}`)} style={{"color":`#${team.team.color}`, "fontWeight":"900"}}>Roster</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span onClick={onClickUrl(`${team.team.links[2].href}`)} style={{"color":`#${team.team.color}`, "fontWeight":"900"}}>Statistics</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span onClick={onClickUrl(`${team.team.links[3].href}`)} style={{"color":`#${team.team.color}`, "fontWeight":"900"}}>Schedule</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span onClick={onClickUrl(`${team.team.links[4].href}`)} style={{"color":`#${team.team.color}`, "fontWeight":"900"}}>Depth Chart</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span onClick={onClickUrl(`${team.team.links[5].href}`)} style={{"color":`#${team.team.color}`, "fontWeight":"900"}}>Tickets</span>&nbsp;&nbsp;&nbsp;&nbsp;

                </div>
        </div>)
    }}
    return(<div>
        {validator()}
        </div>
    )
}

export default TeamCard