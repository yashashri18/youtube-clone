import React from 'react'
import Button from './Button'
import {BTN_ITEMS} from '../utils/constants'

const ButtonList = () => {
  return (
    <div className='flex gap-4 px-10 py-2'>
        {
            BTN_ITEMS.map((btn, index)=>( <Button key={index} name={btn}/>))
        }

    </div>
  )
}

export default ButtonList
