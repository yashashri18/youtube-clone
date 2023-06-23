import React from 'react'

const Comment = ({data}) => {
    const {name,text} = data;
    return (
        <div className='flex items-center gap-3 bg-gray-100 rounded-md m-2 p-1'>
            <img
            alt="user_iocn"
            className='w-8 h-8'
            src="data:image/png;base64,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"
            />
            <div>
                <h1 className='font-bold'>{name}</h1>
                <h1>{text}</h1>
            </div>
        </div>
    )
}

export default Comment
