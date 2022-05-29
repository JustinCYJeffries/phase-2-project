import React, {useState} from "react"
import UserTable from "./UserTable"




function Users({userList}){
    const [selectUserPicks, setSelectedUserPicks] = useState([])
    const userPicks = userList.map(user=>{
        
        return(<button key={user.id} onClick={e=>clickHandler(e)} userid={user.id} username={user.name}>{user.name}</button>)
    })
    function clickHandler(e){
        userList.map(user=>{
            // eslint-disable-next-line
            if(user.id==e.target.attributes.userid.value)
            return(
                setSelectedUserPicks(user.picks)
                
                )
                else return null
                
            
        })
        
        

    }
    return(<div className='text_center'>{userPicks}
    <br/><br/>
            <UserTable picks={selectUserPicks}  />
    </div>)
}

export default Users