import React, { useState } from 'react'
import { PostCreateInterface } from '../../types/post'
import './createPost.css'
import { createPost, createPostImages } from '../../api/postService';
import * as Label from "@radix-ui/react-label";
import { Box, Container, Flex, Grid, Section, Text, TextArea, TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

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
    <div id='create-post-page'  className='content'>

            <Box className='header'>
              <h1>Create Blog Post</h1>
              <p>Might Use Lexical Here</p>
            </Box>

            <Section
              id='create-post-page'
              py="16"
              style={{
                backgroundColor: 'var(--gray-a2)',
                borderRadius: 'var(--radius-3)'
              }}
              minHeight="580px"
            >

              <Grid columns="2" gap="1" rows="repeat(2, 64px)" width="auto">
 
                <Label.Root className="LabelRoot" htmlFor="first-field">
                  First name
                </Label.Root>
                <TextArea placeholder='post content' id='first-field'></TextArea>

                <Label.Root className="LabelRoot" htmlFor="second-field">
                  First name
                </Label.Root>
                <TextField.Root placeholder="Search the docs…" id='second-field'>
                  <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                  </TextField.Slot>
                </TextField.Root>
              

                <Label.Root className="LabelRoot" htmlFor="firstName">
                  First name
                </Label.Root>
                <input
                  className="Input"
                  type="text"
                  id="firstName"
                  defaultValue="Pedro Duarte"
                />



              </Grid>

            </Section>


    </div>
  )
}

export default CreatePost