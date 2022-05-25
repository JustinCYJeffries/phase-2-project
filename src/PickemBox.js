import React from "react"

function PickemBox({teams}){
    return(
        <div class='box'>
            <h3 class='text_center'>{teams[0].id} @ {teams[1].id}</h3>
            <button>{teams[0].id} Win</button>
            <button>{teams[1].id} Win</button>
        </div>
    )
}

export default PickemBox