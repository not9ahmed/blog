import './category.css'
import { useEffect, useState } from 'react'
import { createCategory, deleteCategoryById, findAllCategories, findCategoryById, updateCategoryById } from '../../api/categoryService';
import { ICategory } from '../../types/category';

// will be a table
export default function Category() {
  
  const [categories, setCategories] = useState<ICategory[]>([])
  const [updatedCategories, setUpdatedCategories] = useState<ICategory[]>([])

  useEffect(() => {

    const fetchData = async () => {

        const categoriesDb = await findAllCategories();
        setCategories([...categoriesDb])

    }

    fetchData();
  },[])



  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    
    console.log("value", e.target.value);
    console.log("id", e.target.id);

    const id: number = parseInt(e.target.id);

    // get the item from the list
   const categoryToBeUpdated =  categories.find(el => el.id == id);
    

   const updatedCategories = categories.filter(el => el.id != id);

   setCategories([...updatedCategories, categoryToBeUpdated]);



  }

  const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>, category: ICategory) => {

    console.log(e.target);
    console.log(category);
    console.log(category.createdDate.toJSON());

    category.name = category.name + " updated";
    category.createdDate = new Date(category.createdDate.toJSON());


    const updatedCategory = await updateCategoryById(category.id, category);

    console.log(updatedCategory);
    // display updated list
    const categories = await findAllCategories();

    setCategories(categories);
    
  }

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>, id: number) => {

    console.log(e.target)
    console.log(id)


    const deletedCategory = await deleteCategoryById(id);


    console.log(deletedCategory);


    // display updated list
    const categories = await findAllCategories();

    setCategories(categories);

  }




  
  return (
    <div id='category-page'>

      <h1>Category Page</h1>

      
      <div className='model-table'>
        <table className='categories-table'>
          <thead>
            <tr>
              <th>Category ID</th>
              <th>Category Name</th>
              <th>Category Create Date</th>
              <th>Edit Category</th>
              <th>Delete Category</th>
            </tr>
          </thead>

        <tbody>
        {categories.map(el => 
          <tr key={el.id}>
            <td>{el.id}</td>
            <td>
              <input type='text'
                className='cat-name'
                id={el.id.toString()}
                onChange={handleInputChange}
                value={el.name}
              />
            </td>
            <td>{el.createdDate.toDateString()}</td>
            <td><button className="edit-cat" onClick={(e) => handleEdit(e, el)}>Edit</button></td>
            <td><button className="del-cat" onClick={(e) => handleDelete(e, el.id)}>Delete</button></td>
          </tr>
        )}
        </tbody>
        </table>
      </div>


    </div>
  )
}
