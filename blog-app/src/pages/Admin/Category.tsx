import './category.css'
import { useEffect, useState } from 'react'
import { findAllCategories, createCategory, deleteCategory, findCategoryById, updateCategory } from '../../api/categoryService';
import { ICategory, ICategoryCreate, ICategoryUpdate } from '../../types/category';
import { Box, Button, Container, Flex, IconButton, Section, Select, Table, TextField } from '@radix-ui/themes';
import { CheckIcon } from '@radix-ui/react-icons';

// will be a table
export default function Category() {


  interface IEditableCategories extends ICategory {
    isEditable: boolean
  }


  const [categories, setCategories] = useState<ICategory[]>([]);
  const [editableCategories, setEditableCategories] = useState<IEditableCategories[]>([]);
  const [newCategory, setNewCategory] = useState<ICategoryCreate>({
    name: '',
    parentCategoryId: null,
    createdBy: 1
  });


  // can be extracted to custom hook
  const fetchCategories = async (): Promise<void> => {

    const categoriesAPI = await findAllCategories();
    setCategories(categoriesAPI);

    // add editable flag
    const editableRows: IEditableCategories[] = categoriesAPI.map(
      el => ({
        id: el.id,
        name: el.name,
        parentCategoryId: el.parentCategoryId,
        createdDate: new Date(),
        createdBy: el.createdBy,
        isEditable: false
      })
    )

    setEditableCategories(editableRows);
  }



  useEffect(() => {
    const fetchData = async () => {
      fetchCategories();
    }
    fetchData();
  }, [])



  const deleteHandler = async (id: number) => {
    // delete category
    const deletedCategory = await deleteCategory(id);
    console.log("deletedCategory", deletedCategory);

    // refresh deleted category
    await fetchCategories();

  }



  const addHandler = async (category: ICategoryCreate) => {
    // add category

    console.log("new category", newCategory)

    const addedCategory = await createCategory(category);
    console.log("addedCategory", addedCategory);

    // reset category
    // should be extracted to reset function
    setNewCategory({
        name: '',
        parentCategoryId: null,
        createdBy: 1
    });

    // refresh deleted category
    await fetchCategories();
  }





  return (
    <Section
      id='category-page'
      py={"16"}
      style={{
        backgroundColor: 'var(--gray-a2)',
        borderRadius: 'var(--radius-3)'
      }}
      minHeight={"500px"}
    >


      <Box py="4">
        <h1>Category</h1>
      </Box>

      <Container size="3">
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Parent Category ID</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {editableCategories.map(el => (
            <Table.Row key={el.id}>
              <Table.RowHeaderCell>{el.id}</Table.RowHeaderCell>
              <Table.Cell>{el.name}</Table.Cell>
              <Table.Cell>{el.parentCategoryId}</Table.Cell>
              
              {/* Actions */}
              <Table.Cell>
                <Flex gap="2">

                  {/* Edit Button */}
                  {el.isEditable ? 
                    <IconButton>
                      <CheckIcon width={18} height={16} onClick={() => console.log("confirm edit clicked")}/>
                    </IconButton>

                    : <Button variant='surface' onClick={() => console.log("edit clicked")}>
                      Edit
                    </Button>
                  }


                  {/* Delete */}
                  <Button color='red' variant='surface'  onClick={(e: any, ) => deleteHandler(el.id)}>
                    Delete
                  </Button>

                </Flex>
              </Table.Cell>

            </Table.Row>
          ))}

            {/* New Category */}
            <Table.Row>
              <Table.RowHeaderCell>
                9999
              </Table.RowHeaderCell>

              <Table.Cell>
                <TextField.Root id='category'
                name='category_name'
                value={newCategory.name}
                placeholder="Enter new skill type"
                onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}>
                </TextField.Root>
              </Table.Cell>

              <Table.Cell>
                <Select.Root
                    size="3"
                    defaultValue={"-"}
                    onValueChange={(value: string) => setNewCategory({...newCategory, parentCategoryId: (value === '-' ? null : parseInt(value))})}
                >
                  <Select.Trigger variant="soft"/>
                  <Select.Content variant='soft'>
                    <Select.Item value="-">None</Select.Item>
                    {categories.map(el => 
                      <Select.Item
                        key={el.id}
                        value={el.id.toString()}>
                        {el.name}
                      </Select.Item>
                    )}
                  </Select.Content>
                </Select.Root>
              </Table.Cell>

              <Table.Cell>
              <Button type='submit' onClick={() => addHandler(newCategory)}>
                Add
              </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>

        </Table.Root>


      </Container>





    </Section>
  )
}
