import React from 'react'
import User2 from "../../assets/pngegg (2).png"
import "./search.css"

const Search = () => {
  return (
    <div>
      <div class="input-group flex-nowrap">
  
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
      <div className="userchat">
        <img src={User2} alt="user2" />
        <div className="userchat-info">
          <span>sara</span>
        </div>
</div>
    </div>
  )
}

export default Search