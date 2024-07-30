import React, { useEffect, useState } from 'react'
import './blog.css'
import { useNavigate } from 'react-router-dom';
import { Category, CategoryInterface } from '../../types/category';
import { PostInterface } from '../../types/post';
import SelectMenu from '../../components/SelectMenu/SelectMenu';
import { SelectMenuInterface } from '../../components/SelectMenu/SelectMenuInterface';
import Paginator from '../../components/Paginator/Paginator';
import { findAllPosts, searchPostByKeyword } from '../../services/postService';
import { findAllCategories } from '../../services/categoryService';

// the following page will be the main blog page
function Blog() {


    // variable and states here

    // in the first time it's exact copy of categories
    const [posts, setPosts] = useState<PostInterface[] | []>([])
    const [filteredPosts, setFilteredPosts] = useState<PostInterface[] | []>([...posts])

    // change interface
    const [categories, setCategories] = useState<Category[]>([])

    // Check what is this used for
    const [filteredCategories, setFilteredCategories] = useState<Category[]>([...categories])


    // useEffect and services call here

    useEffect(() => {


        const fetchData = async () => {

            const posts = await findAllPosts();
            const categoriesDb = findAllCategories()
    
    
            setFilteredPosts([...posts])
            setCategories([...categoriesDb])
            setFilteredCategories([...categoriesDb])

        }

        fetchData();

    },[])


    // fetch from api category of posts

    // const categories: Array<Category> = [
    //     {
    //         id: 1,
    //         name: 'Software Engineering',
    //         isEntertainment: false
    //     },
    //     {
    //         id: 2,
    //         name: 'Data Science',
    //         isEntertainment: false

    //     },
    //     {
    //         id: 3,
    //         name: 'Computer Science',
    //         isEntertainment: false

    //     },
    //     {
    //         id: 4,
    //         name: 'Music',
    //         isEntertainment: true
    //     },
    //     {
    //         id: 5,
    //         name: 'Books/Manga',
    //         isEntertainment: true
    //     },
    //     {
    //         id: 6,
    //         name: 'Shows/Movies',
    //         isEntertainment: true
    //     },

    // ];











    // this will be done on the actual posts from api
    const filterCategories = (e: React.ChangeEvent<HTMLSelectElement>) => {


        console.log("filterCategories")
        console.log(e.target.value)

        const selectCategory: number = parseInt(e.target.value)


        // should call api maybe
        const selectPostsCategory = posts.filter(post => post.category === selectCategory)

        setFilteredPosts([...selectPostsCategory])

        // console.log("filteredCategories ", filteredCategories)




    }


    // should fetch from api once again or take from cache
    const resetFilter = () => {

        console.log("reset filter")
        setFilteredPosts([...posts])

        console.log(filteredPosts)
    }






   



    const [query, setQuery] = useState();

    // will call api to search for blog
    // set time limit before calling backend to avoid api crash
    const searchBlog = async (e: React.ChangeEvent<HTMLInputElement>) => {

        const query = e.target.value


        console.log("query", query)

        
        

        // const filteredPostsResult = posts.filter(post =>
        //         post.title.toLowerCase().match(query) || post.description.toLowerCase().match(query)
        //     )


        // console.log("filteredPostsResult", filteredPostsResult)

        // setFilteredPosts(filteredPostsResult)

        const filteredPostsResult: PostInterface[] | undefined = await searchPostByKeyword(query);


        setFilteredPosts(filteredPostsResult || []);

        console.log(filteredPostsResult);

    }






    // to navigate and redirect through pages
    const navigate = useNavigate();




    const handlePostClick = (e: React.MouseEvent<HTMLDivElement>, postId: number) => {

        console.log(e);
        

        console.log('post id', postId)
        navigate(`/posts/${postId}`);
    }

    const selectMenuProps: SelectMenuInterface =  {
        id: 1,
        name: 'Categories',
        labelName: 'Post Categories',
        classNameValue: 'something',
        value: 'categories',
        color: 'primary',
        options: [
            {
                id: 1,
                name: 'Software Engineering',
                value: 'Software Engineering',
            },
            {
                id: 2,
                name: 'Data Science',
                value: 'Data Science',
    
            },
            {
                id: 3,
                name: 'Computer Science',
                value: 'Computer Science',
    
            },
            {
                id: 4,
                name: 'Music',
                value: 'Music',
            },
            {
                id: 5,
                name: 'Books/Manga',
                value: 'Books/Manga',
            },
            {
                id: 6,
                name: 'Shows/Movies',
                value: 'Shows/Movies',
            },

        ],

        // will throw the logic for update categories
        // it should update the categories in this page dropdown
        inputHandler() {
            const updatedCategories = filteredCategories.filter(el => el.isEntertainment === true)
            setFilteredCategories(updatedCategories)
    
            console.log("filteredCategories inside cat componenet", filteredCategories)
        },
    }


  return (
      <div className='content'>
          <h1>Blog</h1>

          <div className='blog'>

              <div className='search-area' >

                  <input
                        type='search'
                        className='search-field'
                        id='post-search'
                        onInput={searchBlog}
                        value={query}/>

                  <button id='post-search-btn' style={{ backgroundColor: 'var(--secondary-light-color)' }}>Search</button>

                  <select name='post-type' id='post-type' className='category-filter' onInput={filterCategories}> 

                      {filteredCategories.map(category => (

                          <option key={category.id} value={category.id}>{category.name}</option>
                      ))}

                  </select>

                {/* How can i get the selected option from here */}
                  {/* <SelectMenu {...selectMenuProps}/> */}

                  <button id='reset-btn' onClick={resetFilter}>Reset</button>

              </div>

              <div className='posts'>

                  {/* loop over this */}
                  {filteredPosts.map(post =>



                      <div className='post-card' key={post.id} id={post.id.toString()} onClick={(e) => handlePostClick(e, post.id)}>


                          {/* <div className='post-image' style={{ background: 'url('+post.images[0]+')'}}></div> */}
                          <div className='post-image-container'>

                              <img className='post-image' src={post.images[0]} />
                          </div>



                          <div className='post-text'>
                              <div className='post-title'>
                                  <div className='post-title-text'>{post.title}</div>
                                  {/* handle date later */}
                                  <div className='post-date'>{post.createdDate}</div>
                              </div>
                              <div className='post-description'>
                                  {post.description}
                              </div>
                          </div>
                      </div>



                  )}

              </div>

            <Paginator />
          </div>

    </div>
  )
}

export default Blog