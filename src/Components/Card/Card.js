import React, { Component } from 'react'
import './Card.css'

export class Card extends Component {
  render() {
    let{id,title,tag}=this.props;
    return (
      <div className='color card border shadow'>
      <div className='padding color'>

      <p className='text-grey color'>{id}</p>
      <p className='bold color'>{title}</p>
      <div className='flex color'>
       
      <p className='border width padding text-grey color'>{tag}</p>
      </div>
      </div>
    </div>
    )
  }
}

export default Card

