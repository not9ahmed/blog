import React, { useState } from 'react'
import './editPost.css'
import { PostEditInterface } from '../../types/post'

function EditPost() {



    // fetch data form blog online
    // useEffect

    const [post, setPost] = useState<PostEditInterface>({
        title: '',
        description: '',
        content: '',
        images: [],
      } as PostEditInterface );




  return (
    <div className='content'>

        <div className="edit-post">
            <div className='header'>
                <h1>Update Blog Post</h1>
            </div>
            <div className="edit-post-container">
                Container
            </div>

            


        </div>

    </div>
  )
}

export default EditPost