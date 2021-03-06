import React from "react"

function Header({handleWeek, selectedWeek}){
   
    
    return(
        <div>
            <h1 className="text_center">Pick Week {selectedWeek}'s Games</h1>
            <h3 className="text_center">Or Choose a week</h3>
            <label >
        <select onChange={e=> handleWeek(e)}>
          <option value="1" >Week 1</option>
          <option value="2" >Week 2</option>
          <option value="3" >Week 3</option>
          <option value="4" >Week 4</option>
          <option value="5" >Week 5</option>
          <option value="6" >Week 6</option>
          <option value="7" >Week 7</option>
          <option value="8" >Week 8</option>
          <option value="9" >Week 9</option>
          <option value="10" >Week 10</option>
          <option value="11" >Week 11</option>
          <option value="12" >Week 12</option>
          <option value="13" >Week 13</option>
          <option value="14" >Week 14</option>
          <option value="15" >Week 15</option>
          <option value="16" >Week 16</option>
          <option value="17" >Week 17</option>
        </select>
      </label>
<p>&nbsp;</p>


        </div>
    )
}

export default Header