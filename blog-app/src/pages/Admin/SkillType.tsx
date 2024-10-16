import React, { ChangeEvent, MouseEventHandler, useEffect, useState } from 'react'
import { findAllSkillTypes, findSkillTypeById, createSkillType, deleteSkillType, editSkillType } from '../../api/skillTypeService'
import { Box, Button, Container, Flex, IconButton, Section, Table, TextField } from '@radix-ui/themes'
import { ISkillType, ISkillTypeCreate, ISkillTypeEdit } from '../../types/skillType'
import { CheckIcon } from '@radix-ui/react-icons';



export default function SkillType() {
  

  // on change modify the existing field
  interface IEditableSkillType extends ISkillType {
    isEditable: boolean
  }

  const [skillTypes, setSkillTypes] = useState<ISkillType[]>([]);
  const [editableSkillTypes, setEditableSkillTypes] = useState<IEditableSkillType[]>([]);
  const [newSkillType, setNewSkillType] = useState<ISkillTypeCreate>({
    name: ''
  });


  const fetchSkillTypes = async (): Promise<void> => {
    
    const skillTypesAPI = await findAllSkillTypes();
    setSkillTypes([...skillTypesAPI]);


    // adding editable flag for each row
    const editableRows: IEditableSkillType[] = skillTypesAPI.map(
      el => ({
        id: el.id,
        name: el.name,
        isEditable: false
      }));
    
    // console.log("newEditableRows", newEditableRows);
    setEditableSkillTypes(editableRows);
  }
  

  useEffect(() => {

    const fetchData = async () => {
      fetchSkillTypes();
    // console.log("editableSkillTypes", editableSkillTypes);
    }

    fetchData();
  },[]);





  const addSkillTypeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);

    const key = e.target.name;
    const value = e.target.value;

    console.log(key);
    console.log(value);




    setNewSkillType({
      name: value
    });

    console.log(newSkillType);


  }

  const addSkillType = async (e: React.MouseEvent<HTMLInputElement>): Promise<void> => {
    console.log('add skill type called');


    // if noting added then stop
    if(newSkillType.name === '') {
      console.log('cannot create');
      return;
    }


    // if there new skill type then create 
    if(newSkillType) {
      const data = await createSkillType(newSkillType);

      console.log(data);


      // reset the newSkillType
      setNewSkillType({name: ''});

      // refresh the page
      await fetchSkillTypes();
    }


  }


  const editHandler = async (id: number, confirm: boolean) => {
    console.log("edit called and id is "+ id);
    // setIsEditable(true)

    // make that row editable
    const newEditableRows = editableSkillTypes.map(el => {
      if (el.id === id) {
        el.isEditable = confirm;
      }
      return el;
    })

    console.log("newEditableRows", newEditableRows)

    setEditableSkillTypes(newEditableRows);
  }


  const editFieldHandler = async (e: ChangeEvent<HTMLInputElement>) => {

    const currentEditId = parseInt(e.target.id);
    const currentEdit = e.target.value;

    
    const newSkillTypes = editableSkillTypes.map(el => {
      if (el.id === currentEditId){
        el.name = currentEdit
        return el;
      }
      return el;
    })

    setEditableSkillTypes([...newSkillTypes]);

    console.log(editableSkillTypes);

  }


  const confirmEdit = async (e: React.MouseEvent<HTMLInputElement>) => {

    // first find the edited skilltype
    const editedSkillType = editableSkillTypes.find(el => el.isEditable === true);

    // check if not empty / validate
    // TODO: add toaster
    if(editedSkillType?.name === '') {
      console.log('cannot be empty');
      return;
    }

    if(editedSkillType) {

      const data  = await editSkillType(editedSkillType.id,
        {
          name: editedSkillType.name
        });
      console.log(data);
    }


    // refresh skill types
    await fetchSkillTypes();
  }



  const deleteHandler = async (id: number) => {
    // delete skill type from api
    const deletedSkillType = await deleteSkillType(id);
    console.log("deletedSkillType", deletedSkillType);

    // refresh skill types
    await fetchSkillTypes();
  }


  return (
  <Section
    id='skill-types-page'
    py={"16"}
    style={{
      backgroundColor: 'var(--gray-a2)',
      borderRadius: 'var(--radius-3)'
    }}
    minHeight={"580px"}
  >
    <Box py={"4"}>
      <h1>Skill Type</h1>
    </Box>
    
    <Container size="3">


      <Table.Root variant="ghost">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>

            {editableSkillTypes.map(el =>  (
                <Table.Row key={el.id}>
                  <Table.RowHeaderCell>{el.id}</Table.RowHeaderCell>
                  
                  {/* to make it editable only if it's true in editableSkillTypes */}
                  {editableSkillTypes.find(editable => editable.id === el.id)?.isEditable ? 
                  <Table.Cell key={el.id} >
                    <TextField.Root value={el.name} id={el.id.toString()} onChange={editFieldHandler}>
                    </TextField.Root>
                  </Table.Cell>
                  : <Table.Cell>{el.name}</Table.Cell>
                  }

                  {/* Cell for actions */}
                  <Table.Cell>
                    <Flex gap="2">

                      {/* Edit Button */}
                      {el.isEditable ?
                      <IconButton  onClick={(e: any) => confirmEdit(e)}>
                        <CheckIcon width="18" height="16"/>
                      </IconButton>
                      
                      : <Button variant='surface' onClick={() => editHandler(el.id, true)}>
                        Edit
                      </Button>
                      }

                      {/* Delete Button */}
                      <Button color='red' variant='surface' onClick={() => deleteHandler(el.id)}>
                        Delete
                      </Button>
                    </Flex>
                  </Table.Cell>

                </Table.Row>
              ))
            }

            {/* To insert new field */}
            {/* form */}
            <Table.Row key={-1}>

              <Table.RowHeaderCell>
                {(skillTypes.reduce(
                  (prev, curr) =>
                    (prev.id > curr.id)? prev : curr
                  
                  , {id: -1, name: ""}).id + 1).toString()}
              </Table.RowHeaderCell>

              <Table.Cell>
                <TextField.Root id='skilltype' name='skilltype_name' value={newSkillType.name} onChange={addSkillTypeHandler} placeholder="Enter new skill type">
                </TextField.Root>
              </Table.Cell>

              <Table.Cell>
                <Button type='submit' onClick={(e: any) => addSkillType(e)}>Add</Button>
              </Table.Cell>
            </Table.Row>

          </Table.Body>
        </Table.Root>
    </Container>
  </Section>
  )
}
