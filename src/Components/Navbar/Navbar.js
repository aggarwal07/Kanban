import React, { Component } from 'react'
import './Navbar.css'
import {
  
  Link
} from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className='navbar color'>
        <div class="dropdown margin-left margin-up color">
        <button className='margin-left drop-button'>Display</button>
        <div class="dropdown-content">
        <div className='margin-left flex'>
          
          Grouping 

         
          <div className='hover'>

             <Link to="/Priority">Priority</Link> <br></br>
            

             <Link to="/User">User</Link> <br></br>
              <Link to="/Status">Status</Link> <br></br>
             
          </div>
          
        </div>
        <div className='margin-left'>
          Sorting <select className='span-margin' name="" id="">
            <option value="">Title</option>
            <option value="">Priority</option>
            
          </select>
        </div>
        
        
        </div>
      </div>
    </div>
    )
  }
}

export default Navbar
