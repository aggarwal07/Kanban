import React, { Component } from 'react'
import Content from '../Content/Content';
import './Board.css'
import Head from '../Head/Head'

function handleRender(arr, key, value){
  return arr.tickets?.map((element)=>{
    if (element[key]==value){
      return(<Content id = {element.id} title = {element.title} tag ={element.tag} userID= {element.userID} status = {element.stauts} priority={element.priority}/>)}
     })
}
export class Board extends Component {
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
        <Head priority="Low"></Head>

       {handleRender(this.state, "priority", 1)}
          </div>
        <div>
        <Head priority="Medium"></Head>

       {handleRender(this.state, "priority", 2)}
          </div>
        <div>
        <Head priority="High"></Head>

       {handleRender(this.state, "priority", 3)}
          </div>
        <div>
        <Head priority="Urgent"></Head>

       {handleRender(this.state, "priority", 4)}
          </div>
        <div>
        <Head priority="No Priority"></Head>

       {handleRender(this.state, "priority", 0)}
          </div>
        
        
      </div>
    )
  }
}

export default Board
