import React, { useState } from 'react'
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

    type Category = {
        id: number,
        name: string,
        isEntertainment: boolean
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





    const filterCategories = () => {

        const updatedCategories = filteredCategories.filter(el => el.isEntertainment === true)
        setFilteredCategories(updatedCategories)

        console.log(filteredCategories)
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


        </div>

        <div className='posts'>

            {/* loop over this */}
            <div className='post-card'>
                <div className='post-image'></div>
                <div className='post-text'>
                    <div className='post-title'>
                        <div className='post-title-text'>Tensorflow and Their Newest Update</div>
                        <div className='post-date'>12-12-2023</div>
                    </div>
                    <div className='post-content'>
                        Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. Facilisi tortor natoque euismod scelerisque. Mauris et adipiscing in non. Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. 
                    </div>
                </div>
            </div>

            <div className='post-card'>
                <div className='post-image'></div>
                <div className='post-text'>
                    <div className='post-title'>
                        <div className='post-title-text'>Tensorflow and Their Newest Update</div>
                        <div className='post-date'>12-12-2023</div>
                    </div>
                    <div className='post-content'>
                        Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. Facilisi tortor natoque euismod scelerisque. Mauris et adipiscing in non. Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog