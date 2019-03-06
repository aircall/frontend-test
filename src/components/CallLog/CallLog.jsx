import React from 'react';

const log = props => {
  return (
    <div className='log'>
      <div className='log__direction'>
        <i className='fas fa-phone' />
        <p>{props.direction}</p>
      </div>
      <div className='log__call'>
        <p onClick={(e) => props.clicked(e)} data-id={props.id}>{props.to}</p>
        <p>{props.from}</p>
      </div>
      <p className='log__time'>{props.created}</p>
    </div>
  );
};

export default log;
