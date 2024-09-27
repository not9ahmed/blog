import { Flex, Text, Button } from '@radix-ui/themes';
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



    </div>
  )
}
