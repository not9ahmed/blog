import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './blog.css'

// the following page will be the main blog page
function Blog() {


    // blog can be of many type
    // the type will a seperate entity
    // to be fetched from api 

    // the blog can be filtered on these
    // Sofware Engineering
    // Computer Engineering
    // Data Science
    // Music
    // Movies
    // Shows
    // Anime etc
    // Manga/Books

    interface Category {
        id: number,
        name: string,
        isEntertainment: boolean
    }


    // will be subset of Post
    /*
    interface Post  {
        id: number,
        title: string,
        description: string,
        content: string,
        images: string[] | string,
        createdDate: Date,

        // can add userid here then join data
        createdBy: number
    };

    */

    interface PostDto {
        id: number,
        name: string,
        description: string,
        createdDate: Date,
        images: string[] | string,
    }


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
            id: 1,
            name: "Tensorflow and Their Newest Update",
            description: "Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. Facilisi tortor natoque euismod scelerisque. Mauris et adipiscing in non. Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. ",
            createdDate: new Date(),
            images: ["https://www.tensorflow.org/static/cloud/images/tf_cloud_code_sample.png"],
        }
    ]




    const navigate = useNavigate();
    navigate('/dashboard');

    const handlePostClick = (postId: number) => {
        const navigate = useNavigate();
        navigate(`/post/${postId}`);
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
                
          

                    <div className='post-card' key={post.id} id={post.id.toString()} onClick={handlePostClick(postId: number)}>
                        
                        
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