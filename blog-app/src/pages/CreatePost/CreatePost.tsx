import React, { useState } from 'react'
import { PostInterface } from '../../types/post'
import './createPost.css'

function CreatePost() {


  const [post, setPost] = useState();

  let userPost: PostInterface = {
    id: 0,
    title: '',
    description: '',
    content: '',
    images: [""],
    createdDate: new Date(),
    createdBy: 'ahmed'
  }


  // make api call to create the post
  // useEffect


  return (
    <div className='content'>
        <div className='create-post'>
            <h1>Create Blog Post Page</h1>
        </div>
    </div>
  )
}

export default CreatePost