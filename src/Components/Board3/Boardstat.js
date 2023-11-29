import React, { Component } from 'react'
import Content from '../Content/Content';
import './Board3.css'
import Head from '../Head/Head'
function handleRender(arr, key, value){
  return arr.tickets?.map((element)=>{
    if (element[key]==value){
      return(<Content id = {element.id} title = {element.title} tag ={element.tag} userID= {element.userID} status = {element.stauts} priority={element.priority}/>)}
     })
}
export class Boardstat extends Component {
  constructor() {
    super();
    
    this.state = {
      tickets : this.tickets
    };
  }
  async componentDidMount(){
    let dataURL = 'https://api.quicksell.co/v1/internal/frontend-assignment';
    let data = await fetch(dataURL);
    let parseData = await data.json();
    
    this.setState({
      tickets : parseData.tickets

    })
    
    console.log(this.state.tickets);
    
  }
  
  render() {
    return (
      <div className='flex
'>
        <div>
        <Head priority="To Do"></Head>

       {handleRender(this.state, "status", "Todo")}
          </div>
        <div>
        <Head priority="In Progress"></Head>

       {handleRender(this.state, "status", "In progress")}
          </div>
        <div>
        <Head priority="Backlog"></Head>

       {handleRender(this.state, "status", "Backlog")}
          </div>
        
        
        
      </div>
    )
  }
}

export default Boardstat
