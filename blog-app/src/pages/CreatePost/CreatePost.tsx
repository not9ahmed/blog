import React, { ReactEventHandler, useState } from 'react'
import { PostInterface } from '../../types/post'
import './createPost.css'

function CreatePost() {


  // declaring a state with PostInterface
  const [post, setPost] = useState<PostInterface>();



  let userPost: PostInterface = {
    id: 0,
    title: '',
    description: '',
    content: '',
    images: [""],
    createdDate: new Date(),
    createdBy: 'ahmed'
  };

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
    console.log(e.target.value)


    let newPost: PostInterface = {
      id: 0,
      title: e.target.value,
      description: '',
      content: '',
      images: '',
      createdDate: new Date(),
      createdBy: ''
    };



    // newPost.title = e.target.value

    console.log(newPost)

  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


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
                  <input type='text' id='post-title' onChange={changeHandler}/>
                </div>

                <div className='post-row'>
                  <label htmlFor='post-description'>Description</label>
                  <input type='text' id='post-description'/>
                </div>

                <div className='post-row'>
                  <label htmlFor='post-content'>content</label>
                  <input type='' id='post-content'/>
                </div>

                <div className='post-row'>
                  <label htmlFor='post-images'>images</label>
                  <input type='file' id='post-images'/>
                </div>







                <button type='submit'>Submit</button>
              </form>

            </div>
        </div>
    </div>
  )
}

export default CreatePost