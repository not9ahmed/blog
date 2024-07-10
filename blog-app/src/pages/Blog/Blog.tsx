import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Category } from '../../types/category';
import { PostDto } from '../../types/postDto';
import './blog.css'

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
        }
    ]




    const navigate = useNavigate();




    const handlePostClick = (e: any, postId: number) => {


        console.log('post id', postId)
        navigate(`/blog/${postId}`);
    }


  return (
    <div className='content'>
        <h1>Blog</h1>

        <div className='search-area'>

            <input type='search' className='search-field' id='post-search'/>
            <button id='post-search-btn' style={{ backgroundColor: 'var(--secondary-light-color)' }}>Search</button>

            <select name='post-type' id='post-type' className='category-filter' onInput={filterCategories}>

                {filteredCategories.map(category => (

                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}

            </select>

            <button id='reset-btn' onClick={resetFilter}>Reset</button>

        </div>

        <div className='posts'>

            {/* loop over this */}
            {posts.map(post => 
                
          

                    <div className='post-card' key={post.id} id={post.id.toString()} onClick={(e) => handlePostClick(e, post.id) }>
                        
                        
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
  )
}

export default Blog