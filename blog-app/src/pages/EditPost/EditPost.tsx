import React, { useEffect, useState } from 'react'
import './editPost.css'
import { PostEditInterface, PostInterface } from '../../types/post'
import Post from '../Post/Post';
import { Params, useNavigate, useParams } from 'react-router-dom';
import { findPostById, updatePostById, deletePostById } from '../../services/postService';

function EditPost() {



    // declare states


    // declare hooks


    // to navigate and redirect through pages
    const navigate = useNavigate();


    // first get id from url
    const params: Readonly<Params<string>> = useParams();


    const id: string | undefined = params.id;

    console.log("id ", id);

    // first fetch the exisiting data
    const post: PostInterface = {
        id: 1,
        title: 'Why should you use Next JS in 2024?',
        description: 'The following blog post will discuss briefly why you should skip React and start using Next JS for your project',
        content: 'Lorem ipsum ~image~ dolor sit amet, consectetur adipiscing elit. ~image~ Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.',
        images: ['https://res.cloudinary.com/practicaldev/image/fetch/s--usRTLj88--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jaln87lqpoyec77lnkbn.png'],
        createdDate: new Date(),
        createdBy: 'ahmed'
        };



    // state for the updated post
    const [updatedPost, setUpdatedPost] = useState<PostEditInterface>({
        title: '',
        description: '',
        content: '',
        images: [],
      } as PostEditInterface );

        


    // fetch data form blog using the id
    // useEffect
    useEffect(() => {
        console.log("Use effect called");

        if (id) {
            console.log("id: "+id)
            const fetchedPost = findPostById(id);


            console.log("fetchedPost", fetchedPost)

            // setPost(async () => await fetchedPost)



        }
        
    })






    const editChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

    }




      // call edit post api
      const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
          console.log(e.target);

          // handle in case id not available

          if (!id){
            throw new Error("Id not provided");
            
          }


 
        let postAfterUpdate: PostInterface|undefined = await updatePostById(id, updatedPost)

        console.log("postAfterUpdate", postAfterUpdate)


          
        }
        
        
    // call delete post api
    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>):void => {
        console.log(e.target);

        if (id) {
            
            deletePostById(id);
        }


        // show pop up delete message


        // after delete return to blog page
        navigate(`/blog`);

        
      }



  return (
      <div className='content'>

          <div className="edit-post">
              <div className='header'>
                  <h1>Edit Blog Post</h1>
              </div>
              <div className="edit-post-container">
                  Container

                  <div className='post-action'>
                    <button className='edit-btn' type="button" onClick={(e) => handleEdit(e)}>Edit</button>
                    <button className='delete-btn'  type="button" onClick={(e) => handleDelete(e)}>Delete</button>
                  </div>

                  




                    <div className='form-edit'>
                        

                    </div>



                    <div className="post">

                    <div className='post-heading'>
                        <h1>Preview</h1>
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

          </div>

      </div>
  )
}

export default EditPost