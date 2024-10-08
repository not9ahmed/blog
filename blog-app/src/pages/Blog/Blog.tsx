import React, { useEffect, useState } from 'react'
import './blog.css'
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../types/category';
import { PostInterface } from '../../types/post';
// import SelectMenu from '../../components/SelectMenu/SelectMenu';
// import { SelectMenuInterface } from '../../components/SelectMenu/SelectMenuInterface';
import { findAllPosts, findPostByCategory, searchPostByKeyword } from '../../api/postService';
import { findAllCategories } from '../../api/categoryService';

// the following page will be the main blog page
function Blog() {


    // to navigate and redirect through pages
    const navigate = useNavigate();


    // variable and states here

    // in the first time it's exact copy of categories
    const [posts, setPosts] = useState<PostInterface[] | []>([])
    const [filteredPosts, setFilteredPosts] = useState<PostInterface[] | []>([...posts])

    // change interface
    const [categories, setCategories] = useState<ICategory[]>([])

    // Search Posts
    const [query, setQuery] = useState<string>("");


    // useEffect and services call here

    useEffect(() => {


        const fetchData = async () => {

            const posts = await findAllPosts() || [];
            const categoriesDb = await findAllCategories() || [];

            setPosts([...posts])
            setFilteredPosts([...posts])
            setCategories([...categoriesDb])

        }

        fetchData();

    },[])





    // this will be done on the actual posts from api
    const filterCategories = async (e: React.ChangeEvent<HTMLSelectElement>) => {


        console.log("filterCategories")
        console.log(e.target.value)

        const selectCategory: number = parseInt(e.target.value)



        if(selectCategory === -1) {
            setFilteredPosts([...posts]);
            return
        }

        
        try {

            const selectPostsCategory = await findPostByCategory(selectCategory) || [];
            setFilteredPosts([...selectPostsCategory])

        } catch(error) {
            console.log(error)
        }



    }


    // should fetch from api once again or take from cache
    const resetFilter = () => {

        console.log("reset filter")

        const query = "";

        setQuery(query);


        setFilteredPosts([...posts])

        console.log("posts ", posts)


        console.log("filteredPosts ", filteredPosts)
    }



    // will call api to search for blog
    // set time limit before calling backend to avoid api crash
    const searchBlog = async (e: React.ChangeEvent<HTMLInputElement>) => {

        const query = e.target.value


        console.log("query", query)

        
        
        setQuery(query);

        // const filteredPostsResult = posts.filter(post =>
        //         post.title.toLowerCase().match(query) || post.description.toLowerCase().match(query)
        //     )


        // console.log("filteredPostsResult", filteredPostsResult)

        // setFilteredPosts(filteredPostsResult)

        const filteredPostsResult: PostInterface[] | null = await searchPostByKeyword(query);


        // const posts: await searchPostByKeyword(query);

        setFilteredPosts(filteredPostsResult || []);

        console.log(filteredPostsResult);

    }











    const handlePostClick = (e: React.MouseEvent<HTMLDivElement>, postId: number) => {

        console.log(e);
        

        console.log('post id', postId)
        navigate(`/posts/${postId}`);
    }

    // const selectMenuProps: SelectMenuInterface =  {
    //     id: 1,
    //     name: 'Categories',
    //     labelName: 'Post Categories',
    //     classNameValue: 'something',
    //     value: 'categories',
    //     color: 'primary',
    //     options: [
    //         {
    //             id: 1,
    //             name: 'Software Engineering',
    //             value: 'Software Engineering',
    //         },
    //         {
    //             id: 2,
    //             name: 'Data Science',
    //             value: 'Data Science',
    
    //         },
    //         {
    //             id: 3,
    //             name: 'Computer Science',
    //             value: 'Computer Science',
    
    //         },
    //         {
    //             id: 4,
    //             name: 'Music',
    //             value: 'Music',
    //         },
    //         {
    //             id: 5,
    //             name: 'Books/Manga',
    //             value: 'Books/Manga',
    //         },
    //         {
    //             id: 6,
    //             name: 'Shows/Movies',
    //             value: 'Shows/Movies',
    //         },

    //     ],

    //     // will throw the logic for update categories
    //     // it should update the categories in this page dropdown
    //     inputHandler() {
    //         const updatedCategories = filteredCategories.filter(el => el.isEntertainment === true)
    //         setFilteredCategories(updatedCategories)
    
    //         console.log("filteredCategories inside cat componenet", filteredCategories)
    //     },
    // }


  return (
      <div className='content'>
          <h1>My Cool Blog</h1>

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

                  <option key={-1} value={-1}>{"All"}</option>
                      {categories.map(category => (

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
                                  <div className='post-date'>{post.createdDate? post.createdDate.toString() : ""}</div>
                              </div>
                              <div className='post-description'>
                                  {post.description}
                              </div>
                          </div>
                      </div>



                  )}

              </div>

          </div>

    </div>
  )
}

export default Blog