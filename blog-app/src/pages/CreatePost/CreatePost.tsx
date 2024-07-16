import React, { ReactEventHandler, useState } from 'react'
import { PostCreateInterface } from '../../types/post'
import './createPost.css'

function CreatePost() {


  // declaring a state with PostInterface
  // and declaring intial state
  const [post, setPost] = useState<PostCreateInterface>({
    title: '',
    description: '',
    content: '',
    images: [],
    createdBy: 'ahmed'
  } as PostCreateInterface );


  const [files, setFiles] = useState<File[]>([]);


  // form Data
  // let userPost: PostInterface = {
  //   id: 0,
  //   title: '',
  //   description: '',
  //   content: '',
  //   images: [""],
  //   createdDate: new Date(),
  //   createdBy: 'ahmed'
  // };



  // will applied for every field
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {

    console.log(e)



    let newPost = {...post}


    let { name, value } = e.target
    console.log("name", name)
    console.log("value", value)

    
    setPost({
      ...post,
      [name]: value
    });

  

    console.log(post)

  }



  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {




    // because it can be null
    const newFiles = e.target.files || []


    console.log("newFile ", newFiles)




    const filesArr = Array.from(newFiles)


    console.log("filesArr", filesArr)





    console.log(files)

    setFiles([...files, ...filesArr])

    console.log(files)


    console.log("end of FileChangeHandler")

  }



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(e)

    console.log("form submitted");

  }




  // make api call to create the post
  // useEffect


  return (
    <div className='content'>
        <div className='create-post'>
            <div className='header'>
              <h1>Create Blog Post Page</h1>
            </div>

            <div className='create-post-container'>
              <form id='create-post-form' onSubmit={handleSubmit}>

                <div className='post-row'>
                  <label htmlFor='post-title'>Title</label>
                  <input type='text' id='post-title' name='title' onChange={changeHandler}/>
                </div>

                <div className='post-row'>
                  <label htmlFor='post-description'>Description</label>
                  <input type='text' id='post-description' name='description' onChange={changeHandler}/>
                </div>

                <div className='post-row'>
                  <label htmlFor='post-content'>content</label>
                  <input type='' id='post-content' name='content' onChange={changeHandler}/>
                </div>

                <div className='post-row'>
                  <label htmlFor='post-images'>images</label>
                  <input type='file' multiple accept='image/*,.pdf' id='post-images' name='images' onChange={fileChangeHandler}/>
                </div>







                <button type='submit'>Submit</button>
              </form>

            </div>
        </div>
    </div>
  )
}

export default CreatePost