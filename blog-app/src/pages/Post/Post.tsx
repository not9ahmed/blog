import React from 'react'
import { Params, useParams } from 'react-router-dom'

function Post() {

    // get post id
    // make api call for complete blog data

    // get params from url
    const params: Readonly<Params<string>> = useParams();

    const id: string | undefined = params.id;

    console.log("id: ", id)
    console.log("params: ", params)

  return (
    <div className='posts'>
        Post {id}
    </div>
  )
}

export default Post