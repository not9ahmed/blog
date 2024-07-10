import React from 'react'
import { Params, useParams } from 'react-router-dom'

/**
 * React component that renders a single post
 * @returns 
 */
function Post() {

    
    // get post id
    // make api call for complete blog data

    // get params from url
    const params: Readonly<Params<string>> = useParams();

    const id: string | undefined = params.id;



    // make api call for complete post data
    interface Post  {
        id: number,
        title: string,
        description: string,
        content: string,
        images: string[] | string,
        createdDate: Date,

        // can add userid here then join data
        createdBy: number
    };




    console.log("id: ", id)
    console.log("params: ", params)

  return (
    <div className='posts'>
        Post {id}
    </div>
  )
}

export default Post