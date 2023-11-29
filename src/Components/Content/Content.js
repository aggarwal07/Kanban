import React, { Component } from 'react'
import Head from '../Head/Head'
import Card from '../Card/Card'

export class Content extends Component {
  render() {
    let {id,title,tag,userID,status,priority} = this.props
    return (
      <div>
        {/*<Head priority={priority}></Head>*/}
        <Card id={id} title={title} tag = {tag}></Card>
      </div>
    )
  }
}

export default Content

