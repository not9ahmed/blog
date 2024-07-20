import React from 'react'
import { Params, useParams } from 'react-router-dom'
import { PostInterface } from '../../types/post';
import postImageCreator from './postUtil'
import './post.css'

/**
 * React component that renders a single post page
 * @returns 
 */
function Post() {

  // props will be a oject with the shape {num: number}


  // get post id
  // make api call for complete blog data

  // get params from url
  const params: Readonly<Params<string>> = useParams();

  // will get id from the url
  const id: string | undefined = params.id;

  

  console.log("id: ", id)
  console.log("params: ", params)


  // make api call for complete post data
  const post: PostInterface = {
    id: 1,
    title: 'Why should you use Next JS in 2024?',
    description: 'The following blog post will discuss briefly why you should skip React and start using Next JS for your project',
    content: 'Lorem ipsum ~image~ dolor sit amet, consectetur adipiscing elit. ~image~ Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.',
    images: ['https://res.cloudinary.com/practicaldev/image/fetch/s--usRTLj88--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jaln87lqpoyec77lnkbn.png'],
    createdDate: new Date(),
    createdBy: 'ahmed'
  }

  const updatedContent: string = postImageCreator(post.content)


  // console.log(updatedContent)

  // add logic for images in the blog
  // in content add image reference than fetch from api
  // add img src tag to the post
  // content should have wild card sympol for image "~{image}~"
  // the postUtil will convert it to image tag with the images from the list



  return (
    <div className='content'>

      <div className="post">

        <div className='post-heading'>
          <h1 className='post-title'>{post.title}</h1>
          <h2 className='post-detailed-description'>{post.description}</h2>
          <h3 className='post-timestamp'>@{post.createdBy} | {post.createdDate.toDateString()}</h3>
        </div>

        <div className='post-main-area'>
            <img
            className='post-main-image'
              src={post.images[0]}
              alt="image not found"
            />
            
          <div className='post-content'>
            <p>
              {post.content}
            </p>
          </div>
        </div>
        
      </div>



    </div>
  )
}

export default Post