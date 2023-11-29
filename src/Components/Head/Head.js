import React, { Component } from 'react'
import './Head.css'


export class Head extends Component {
  render() {
    let {priority,icon} =this.props;
    return (
      <div className='flex space-between head'>
    <div >
      
      <p>{priority}</p>

    </div>
    <div className='flex'>
      <button className='button colorr'>+</button>
      <button className='button colorr' >...</button>

    </div>
    </div>
    )
  }
}

export default Head
