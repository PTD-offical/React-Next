import React from 'react'

const Cards = ({name ="User", desc ="Empty", date= "0/0/0", children}) => {
  return (
    <div className='card'>
      <h1>{name}</h1>
      <hr />
      <p>{desc}</p>

      <span>
        {date}
      </span>

      {children}
    </div>
  )
}

export default Cards;
