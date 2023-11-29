import React, { Component } from 'react'
import Content from '../Content/Content';
import './Board2.css'
import Head from '../Head/Head'
function handleRender(arr, key, value){
  return arr.tickets?.map((element)=>{
    if (element[key]==value){
      return(<Content id = {element.id} title = {element.title} tag ={element.tag} userID= {element.userID} status = {element.stauts} priority={element.priority}/>)}
     })
}
export class Boarduser extends Component {
  constructor() {
    super();
    
    this.state = {
      tickets : this.tickets,
      users : this.users
    };
  }
  async componentDidMount(){
    let dataURL = 'https://api.quicksell.co/v1/internal/frontend-assignment';
    let data = await fetch(dataURL);
    let parseData = await data.json();
    
    this.setState({
      tickets : parseData.tickets,
      users : parseData.users

    })
    
    
  }
  
  render() {
    return (
      <div className='flex
'>
        <div>
        <Head priority="User1"></Head>

       {handleRender(this.state, "userId", "usr-1")}
          </div>
        <div>
        <Head priority="User2"></Head>

       {handleRender(this.state, "userId", "usr-2")}
          </div>
        <div>
        <Head priority="User3"></Head>

       {handleRender(this.state, "userId", "usr-3")}
          </div>
        <div>
        <Head priority="User4"></Head>

       {handleRender(this.state, "userId", "usr-4")}
          </div>
        <div>
        <Head priority="User5"></Head>

       {handleRender(this.state, "userId", "usr-5")}
          </div>
        
        
      </div>
    )
  }
}

export default Boarduser
