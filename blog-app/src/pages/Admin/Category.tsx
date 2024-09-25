import './category.css'
import { useEffect, useState } from 'react'
import { createCategory, deleteCategoryById, findAllCategories, findCategoryById } from '../../api/categoryService';
import { ICategory } from '../../types/category';

// will be a table
export default function Category() {
  
  const [categories, setCategories] = useState<ICategory[]>([])
  const [category, setCategory] = useState<ICategory>()


  useEffect(() => {

    const fetchData = async () => {

        const categoriesDb = await findAllCategories();
        const singleCategory = await findCategoryById(1);


        // const singleCategory = await createCategory({
        //   // id: 999,
        //   name: 'test react 2',
        //   parentCategoryId: 1,
        //   // createdDate: new Date(),
        //   createdBy: 1
        // });

        // const singleCategory = await deleteCategoryById(16);

        setCategories([...categoriesDb])
        setCategory(singleCategory)


    }

    fetchData();
},[])


  
  return (
    <div id='category-page'>

      <h1>Category Page</h1>
      
      <div>
        <h2>view catgeory</h2>
          
          <div className='model-table'>
            <table className='categories-table'>
              <thead>
                <tr>
                  <th>Category ID</th>
                  <th>Category Name</th>
                  <th>Category Create Date</th>
                </tr>
              </thead>

            <tbody>
            {categories.map(el => 
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.createdDate.toDateString()}</td>
              </tr>
            )}
            </tbody>
            </table>
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
