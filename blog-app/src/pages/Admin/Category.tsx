import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { findAllCategories } from '../../api/categoryService';
import { CategoryInterface } from '../../types/category';

// will be a table
export default function Category() {
  
  const [categories, setCategories] = useState<CategoryInterface[]>([])


  useEffect(() => {

    const fetchData = async () => {

        const categoriesDb = await findAllCategories() || [];

        setCategories([...categoriesDb])

    }

    fetchData();

},[])


  
  return (
    <div id='category-page'>

      <h1>Category Page</h1>
      
      <div>
        <h2>view catgeory</h2>
          
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
          {categories.map(el => 
            <div key={el.id}>
              {el.name}
            </div>
          )}
          </div>
      </div>



      <div>
        <h2>create catgeory</h2>
      </div>

      <div>
        <h2>update catgeory</h2>
      </div>

      <div>
        <h2>delete catgeory</h2>
      </div>

    </div>
  )
}
