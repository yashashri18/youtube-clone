import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='border px-2 py-1 m-1 rounded-sm font-medium'>{name}</button>
    </div>
  )
}

export default Button
