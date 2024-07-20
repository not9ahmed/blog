import React, { useState } from 'react'
import './blog.css'
import { useNavigate } from 'react-router-dom';
import { Category } from '../../types/category';
import { PostInterface } from '../../types/post';
import SelectMenu from '../../components/SelectMenu/SelectMenu';
import { SelectMenuInterface } from '../../components/SelectMenu/SelectMenuInterface';
import Paginator from '../../components/Paginator/Paginator';

// the following page will be the main blog page
function Blog() {





    // fetch from api category of posts

    const categories: Array<Category> = [
        {
            id: 1,
            name: 'Software Engineering',
            isEntertainment: false
        },
        {
            id: 2,
            name: 'Data Science',
            isEntertainment: false

        },
        {
            id: 3,
            name: 'Computer Science',
            isEntertainment: false

        },
        {
            id: 4,
            name: 'Music',
            isEntertainment: true
        },
        {
            id: 5,
            name: 'Books/Manga',
            isEntertainment: true
        },
        {
            id: 6,
            name: 'Shows/Movies',
            isEntertainment: true
        },

    ];

 
    const posts: Array<PostInterface> = [
        {
            id: 1,
            title: "Tensorflow and Their Newest Update",
            description: "Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. Facilisi tortor natoque euismod scelerisque. Mauris et adipiscing in non. Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. ",
            content: "Very long title",
            images: ["https://www.tensorflow.org/static/cloud/images/tf_cloud_code_sample.png"],
            category: 2,
            createdDate: new Date(),
            createdBy: 'notahmed'
        },
        {
            id: 2,
            title: "Tensorflow and Their Newest Update",
            description: "Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. Facilisi tortor natoque euismod scelerisque. Mauris et adipiscing in non. Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. ",
            content: "Very long title",
            images: ["https://www.tensorflow.org/static/cloud/images/tf_cloud_code_sample.png"],
            category: 2,
            createdDate: new Date(),
            createdBy: 'notahmed'
        },
        {
            id: 3,
            title: "React is so cool, but the SSR is needed",
            description: "React rant",
            content: "Very long title",
            images: ["https://www.tensorflow.org/static/cloud/images/tf_cloud_code_sample.png"],
            category: 1,
            createdDate: new Date(),
            createdBy: 'notahmed'
        },
        {
            id: 4,
            title: "Cloud Computing",
            description: "AWS or Azure which one to use",
            content: "Very long title",
            images: ["https://www.tensorflow.org/static/cloud/images/tf_cloud_code_sample.png"],
            category: 1,
            createdDate: new Date(),
            createdBy: 'notahmed'
        },
        {
            id: 5,
            title: "Jazz is nice",
            description: "have been listening to a lot of jazz lately",
            content: "Very long title",
            images: ["https://www.tensorflow.org/static/cloud/images/tf_cloud_code_sample.png"],
            category: 4,
            createdDate: new Date(),
            createdBy: 'notahmed'
        }
    ]




    // in the first time it's exact copy of categories
    const [filteredCategories, setFilteredCategories] = useState([...categories])



    const [filteredPosts, setFilteredPosts] = useState([...posts])






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
    // useEffect
    // set time limit before calling backend to avoid api crash
    const searchBlog = (e: React.ChangeEvent<HTMLInputElement>) => {

        const query = e.target.value


        console.log("query", query)

        

        const filteredPostsResult = posts.filter(post =>
                post.title.toLowerCase().match(query) || post.description.toLowerCase().match(query)
            )


        console.log("filteredPostsResult", filteredPostsResult)

        setFilteredPosts(filteredPostsResult)

    }






    // to navigate and redirect through pages
    const navigate = useNavigate();




    const handlePostClick = (e: any, postId: number) => {


        console.log('post id', postId)
        navigate(`/blog/${postId}`);
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
                                  <div className='post-date'>{post.createdDate.toDateString()}</div>
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