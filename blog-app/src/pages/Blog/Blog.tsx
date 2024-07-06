import React from 'react'

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

        <div className='blogs'>
            <div className='blog-card'>
                <img src='sample-tf-code' className='blog-img' alt='blog '/>
            </div>
        </div>
    </div>
  )
}

export default Blog