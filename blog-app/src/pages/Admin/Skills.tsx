import React, { useEffect } from 'react'

// will be a table
export default function Skills() {



  // const [categories, setCategories] = useState<ICategory[]>([])
  // const [category, setCategory] = useState<ICategory>()


  useEffect(() => {

    const fetchData = async () => {

        // const skillsDb = await findAllSkills();

        // const singleCategory = await deleteCategoryById(16);

        // setCategories([...categoriesDb])
        // setCategory(singleCategory)


    }

    fetchData();
  },[])




  return (
    <div id='skills-page'>

      <h1>Skills Page</h1>


      <div className='model-table'>
        <table className='categories-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category Create Date</th>
              <th>Edit Category</th>
              <th>Delete Category</th>
            </tr>
          </thead>

          <tbody>
            {/* {categories.map(el =>
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.createdDate.toDateString()}</td>
                <td><button id="edit-cat" onClick={(e) => handleEdit(e, el)}>Edit</button></td>
                <td><button id="del-cat" onClick={(e) => handleDelete(e, el.id)}>Delete</button></td>
              </tr>
            )} */}
          </tbody>
        </table>
      </div>






    </div>
  )
}
