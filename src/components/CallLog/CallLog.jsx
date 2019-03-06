import React from 'react';

const log = props => {
  return (
    <div className='call-log'>
      <i className="fas fa-phone"></i>
      <p>{props.direction}</p>
      <p>{props.from}</p>
      <p>{props.to}</p>
      <p>{props.created}</p>
    </div>
  )
}

export default log;