import React from 'react'
import './blog.css'

// the following page will be the main blog page
function Blog() {


    // blog can be of many type
    // the type will a seperate entity
    // the blog can be filtered on these
    // Sofware Engineering
    // Data Science
    // Music
    // Movies
    // Shows
    // Anime etc
    // Manga/Books



  return (
    <div className='content'>
        <h1>Blog</h1>

        <div className='search-area'>

            <input type='search' className='search-field' id='blog-search'/>
            <button id='blog-search-btn' style={{ backgroundColor: 'var(--secondary-light-color)' }}>Search</button>

        </div>

        <div className='blogs'>

            {/* loop over this */}
            <div className='blog-card'>
                <div className='blog-image'></div>
                <div className='blog-text'>
                    <div className='blog-title'>
                        <div className='blog-title-text'>Tensorflow and Their Newest Update</div>
                        <div className='blog-date'>12-12-2023</div>
                    </div>
                    <div className='blog-content'>
                        Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. Facilisi tortor natoque euismod scelerisque. Mauris et adipiscing in non. Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. 
                    </div>
                </div>
            </div>

            <div className='blog-card'>
                <div className='blog-image'></div>
                <div className='blog-text'>
                    <div className='blog-title'>
                        <div className='blog-title-text'>Tensorflow and Their Newest Update</div>
                        <div className='blog-date'>12-12-2023</div>
                    </div>
                    <div className='blog-content'>
                        Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. Facilisi tortor natoque euismod scelerisque. Mauris et adipiscing in non. Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog