import React from 'react'

const ButtonListShimmer = () => {
  return (
      <div>
      <div className="flex flex-wrap">
            {Array(6).fill("").map((e,index)=>(
                <div key={index} className="w-52 h-9 bg-gray-100 m-5"></div>
            ))}
        </div>
    </div>
 
  )
}

export default ButtonListShimmer
