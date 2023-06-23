import React from 'react'
import CommentsList from './CommentsList';
import { commentsData } from '../utils/constants';

const CommentsContainer = () => {
  return (
    <div className='p-6'>
      <h1 className='font-bold text-xl'>Comments </h1>
      <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer
