import React, { useEffect, useState } from 'react'
import './editPost.css'
import { PostEditInterface, PostInterface } from '../../types/post'
import Post from '../Post/Post';
import { Params, useNavigate, useParams } from 'react-router-dom';
import { findPostById, updatePostById, deletePostById } from '../../api/postService';

function EditPost() {


    // first get id from url
    const params: Readonly<Params<string>> = useParams();

    const idStr: string = params.id || 'nan';

    const id: number = parseInt(idStr);



    // declare states
    const [updatedFiles, setUpdatedFiles] = useState<File[]>([]);



    // state for the post
    const [post, setPost] = useState<PostInterface>();


    // state for the updated post
    const [updatedPost, setUpdatedPost] = useState<PostEditInterface>({
      title: '',
      description: '',
      content: '',
      images: [],
    } as PostEditInterface );

    // declare hooks


    // to navigate and redirect through pages
    const navigate = useNavigate();






    // first fetch the exisiting data
    // const post: PostInterface = {
    //     id: 1,
    //     title: 'Why should you use Next JS in 2024?',
    //     description: 'The following blog post will discuss briefly why you should skip React and start using Next JS for your project',
    //     content: 'Lorem ipsum ~image~ dolor sit amet, consectetur adipiscing elit. ~image~ Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.',
    //     images: [
    //         'https://res.cloudinary.com/practicaldev/image/fetch/s--usRTLj88--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jaln87lqpoyec77lnkbn.png',
    //         'https://res.cloudinary.com/practicaldev/image/fetch/s--usRTLj88--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jaln87lqpoyec77lnkbn.png',
    //         ],
    //     createdDate: new Date(),
    //     createdBy: 'ahmed'
    //     };





        


    // fetch data form blog using the id
    // useEffect
    useEffect(() => {
        console.log("Use effect called");





      const fetchData = async () => {

        // handling missing id
        if (id === null || id === undefined) {
          navigate("/nomatch")
        } 
        console.log("id: " + id)


        const fetchedPost: PostInterface = await findPostById(id);



        setPost(fetchedPost);

        setUpdatedPost({
          title: fetchedPost.title,
          description: fetchedPost.description,
          content: fetchedPost.content,
          images: [...fetchedPost.images]
        });

        // console.log("updatedPost ", updatedPost)


      };


        // will check if avilable then fetch it to this page

        fetchData();
        
    }, [])






    const editChangeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {

        let { name, value } = e.target
        console.log("name", name)
        console.log("value", value)
    
        
        setUpdatedPost({
          ...updatedPost,
          [name]: value
        });
    
      
    
        console.log(updatedPost)
    }




    const contentEditableHandler = (e: React.FormEvent<HTMLInputElement>) => {

      console.log("contentEditableHandler")

      console.log("innerText", e.currentTarget)
      console.log("innerText", e.currentTarget.innerText)


      const elInner = e.currentTarget.innerText;

      setUpdatedPost({
        ...updatedPost,
        title: elInner
      })



      // update state
  
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
            navigate(`/blog`);
        }


        // show pop up delete message


        // after delete return to blog page
        navigate(`/blog`);

        
      }


      // submitting edit post request to api
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        console.log(updatedPost)


        // make api call to edit
        // add the files also
        if(id){

            updatePostById(id, updatedPost)
        }

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

                  




            <div className='edit-post-container'>
                <h1>Current Blog Data</h1>
              <form id='edit-post-form' onSubmit={handleSubmit}>

                <div className='post-row'>
                  <label htmlFor='post-title'>Title</label>
                  <input type='text' id='post-title' name='title' onChange={editChangeHandler} value={updatedPost.title}/>
                </div>

                <div className='post-row'>
                  <label htmlFor='post-description'>Description</label>
                  <input type='text' id='post-description' name='description' onChange={editChangeHandler} value={updatedPost.description}/>
                </div>

                <div className='post-row'>
                  <label htmlFor='post-content'>content</label>
                  <textarea id='post-content' name='content' rows={4} cols={40} onChange={editChangeHandler} value={updatedPost.content}/>
                </div>

                <div className='post-row'>
                  <label htmlFor='post-images'>images</label>
                  <input type='file' multiple accept='image/*,.pdf' id='post-images' name='images' onChange={editChangeHandler} />
                </div>







                <button type='submit'>Submit</button>
              </form>


              <div className="post-preview">

                <h2>Post Preview</h2>

                <div>
                  preview here
                </div>
              </div>


            </div>



            <div className="post">

            <div className='post-heading'>
                <h1>Preview</h1>
                <h1 className='post-title' contentEditable={true} suppressContentEditableWarning={true}
                onInput={contentEditableHandler}>
                  {post?.title}
                </h1>
                <h2 className='post-detailed-description'>{post?.description}</h2>
                <h3 className='post-timestamp'>@{post?.createdBy} | {post?.createdDate? post?.createdDate.toString() : ""}</h3>
            </div>

            <div className='post-main-area'>
                <img
                    className='post-main-image'
                    src={post?.images[0]}
                    alt="image not found"
                />

                <div className='post-content'>
                    <p>
                        {post?.content}
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