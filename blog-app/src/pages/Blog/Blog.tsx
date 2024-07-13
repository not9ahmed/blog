import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Category } from '../../types/category';
import { PostDto } from '../../types/postDto';
import './blog.css'
import SelectMenu from '../../components/SelectMenu/SelectMenu';
import { SelectMenuInterface } from '../../components/SelectMenu/SelectMenuInterface';

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

    const [filteredCategories, setFilteredCategories] = useState([...categories])







    // this will be done on the actual posts
    const filterCategories = () => {

        const updatedCategories = filteredCategories.filter(el => el.isEntertainment === true)
        setFilteredCategories(updatedCategories)

        console.log(filteredCategories)
    }


    const resetFilter = () => {

        setFilteredCategories(categories)

        console.log(filteredCategories)
    }






    
    const posts: Array<PostDto> = [
        {
            id: 1,
            name: "Tensorflow and Their Newest Update",
            description: "Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. Facilisi tortor natoque euismod scelerisque. Mauris et adipiscing in non. Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. ",
            createdDate: new Date(),
            images: ["https://www.tensorflow.org/static/cloud/images/tf_cloud_code_sample.png"],
        },
        {
            id: 2,
            name: "Tensorflow and Their Newest Update",
            description: "Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. Facilisi tortor natoque euismod scelerisque. Mauris et adipiscing in non. Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. ",
            createdDate: new Date(),
            images: ["https://www.tensorflow.org/static/cloud/images/tf_cloud_code_sample.png"],
        },
        {
            id: 3,
            name: "React is so cool, but the SSR is needed",
            description: "React rant",
            createdDate: new Date(),
            images: ["https://www.tensorflow.org/static/cloud/images/tf_cloud_code_sample.png"],
        },
        {
            id: 4,
            name: "Cloud Computing",
            description: "AWS or Azure which one to use",
            createdDate: new Date(),
            images: ["https://www.tensorflow.org/static/cloud/images/tf_cloud_code_sample.png"],
        },
        {
            id: 5,
            name: "Jazz is nice",
            description: "have been listening to a lot of jazz lately",
            createdDate: new Date(),
            images: ["https://www.tensorflow.org/static/cloud/images/tf_cloud_code_sample.png"],
        }
    ]


    const [filteredPosts, setFilteredPosts] = useState([...posts])



    const [query, setQuery] = useState();

    // will call api to search for blog
    // useEffect
    // set time limit before calling backend to avoid api crash
    const searchBlog = (e: React.ChangeEvent<HTMLInputElement>) => {

        const query = e.target.value

        console.log("query", query)

        

        const filteredPostsResult = posts.filter(post =>
                post.name.toLowerCase().match(query) || post.description.toLowerCase().match(query)
            )


        console.log("filteredPostsResult", filteredPostsResult)

        setFilteredPosts(filteredPostsResult)

    }




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
    
            console.log(filteredCategories)
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

                  {/* <select name='post-type' id='post-type' className='category-filter' onInput={filterCategories}>

                      {filteredCategories.map(category => (

                          <option key={category.id} value={category.id}>{category.name}</option>
                      ))}

                  </select> */}

                {/* How can i get the selected option from here */}
                  <SelectMenu {...selectMenuProps}/>

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
                                  <div className='post-title-text'>{post.name}</div>
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

          </div>

    </div>
  )
}

export default Blog