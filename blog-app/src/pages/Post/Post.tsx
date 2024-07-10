import React from 'react'
import { Params, useParams } from 'react-router-dom'
import { PostInterface } from '../../types/post';

/**
 * React component that renders a single post page
 * @returns 
 */
function Post(props: {num: number}) {

    // props will be a oject with the shape {num: number}
    console.log(props)
    
    // get post id
    // make api call for complete blog data

    // get params from url
    const params: Readonly<Params<string>> = useParams();

    // will get id from the url
    const id: string | undefined = params.id;



    // make api call for complete post data




    console.log("id: ", id)
    console.log("params: ", params)

  return (
    <div className='content'>
        <h1>Post {id}</h1>
        <h2></h2>


    </div>
  )
}

export default Post