import React from 'react'
import './LogMessage.css'

function createMarkup(html) {
  return { __html: html };
}

function Log(props) {
  let title = props.title || "Message"
  return (
    <div className="log">      
      <p className="log-title">{title}</p>
      <div dangerouslySetInnerHTML={createMarkup(props.msg)} />      
    </div>
  )
}

export default Log