import React, { ReactEventHandler, useState } from 'react'
import { PostCreateInterface } from '../../types/post'
import './createPost.css'
import Post from '../Post/Post';
import axios from 'axios'
import { createPost, createPostImages } from '../../api/postService';

function CreatePost() {

  const API_BASE_URL : string = import.meta.env.VITE_API_BASE_URL

  console.log("url", API_BASE_URL)


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
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {

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
    // not needed
    const newFiles: FileList | [] = e.target.files || []

    console.log("newFile ", newFiles)

    
    if(e.target.files != null) {

      const newFiles: File[] = []

      for(let i = 0; i < e.target.files.length; i++){
        newFiles.push(e.target.files[i])
      }

      console.log("fileArrExample ", newFiles)
      setFiles([...newFiles])


      // setPost({
      //   ...post,
      //   images: [...newFiles]
      // })
    }




  }



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(e)

    console.log("form submit");


    console.log("post state now", post)
    console.log("files state now", files)
    // TODO Validation
    // i have to check the post before submitting to backend
    // if empty then don't submit to backend
    // to not overload backend




    // to make api post call

    const data  = await createPost(post)

    console.log("after request", data)

    // console.log(data.files['images[]'].keys)


    // calling service here
    const serviceData =  await createPost(post)


    // upload image here
    const postImagesUploaded =  await createPostImages(1, files);



    console.log("serviceData", serviceData);

    console.log("postImagesUploaded", postImagesUploaded)


  }




  // make api call to create the post
  // useEffect


  return (
    <div className='content'>
        <div className='create-post'>
            <div className='header'>
              <h1>Create Blog Post Page /Might Use Lexical Here</h1>
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
                  <textarea id='post-content' name='content' rows={4} cols={40} onChange={changeHandler}/>
                </div>

                <div className='post-row'>
                  <label htmlFor='post-images'>images</label>
                  <input type='file' multiple accept='image/*,.pdf' id='post-images' name='images' onChange={fileChangeHandler}/>
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
        </div>
    </div>
  )
}

export default CreatePost