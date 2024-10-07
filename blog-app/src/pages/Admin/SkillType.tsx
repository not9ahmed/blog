import React, { ChangeEvent, MouseEventHandler, useEffect, useState } from 'react'
import { findAllSkillTypes, findSkillTypeById, createSkillType, deleteSkillType } from '../../api/skillTypeService'
import { Box, Button, Flex, IconButton, Section, Table, TextField } from '@radix-ui/themes'
import { ISkillType } from '../../types/skillType'
import { CheckIcon, Pencil1Icon } from '@radix-ui/react-icons';



export default function SkillType() {
  

  type IEditableRow = {
    id: number,
    isEditable: boolean
  };

  const [newId, setNewId] = useState(0);
  const [newSkillType, setNewSkillType] = useState<ISkillType>({
    id: 0,
    name: ''
  });
  const [skillTypes, setSkillTypes] = useState<ISkillType[]>([]);
  const [editableSkillTypes, setEditableSkillTypes] = useState<IEditableRow[]>([]);


  useEffect(() => {


    const fetchData = async () => {
      const skillTypesAPI = await findAllSkillTypes();
      setSkillTypes([...skillTypesAPI]);

      const newId = skillTypesAPI.reduce(
        (prev, curr) =>
          (prev.id > curr.id) 
        ? prev : curr ,{id: -1, name: ""}
      ).id + 1;


      const newEditableRows: IEditableRow[] = skillTypesAPI.map(el => ({id: el.id, isEditable: false}))
      
      console.log("newEditableRows", newEditableRows);

      setEditableSkillTypes(newEditableRows);

      setNewId(newId);


    }


    fetchData();


    console.log("newId", newId);
    console.log("editableSkillTypes", editableSkillTypes);

  },[]);



  


  const skillTypeCreateHandler = async () => {
    
    console.log("Button");
    await findSkillTypeById(1);
  }


  const addSkillTypeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);

    const key = e.target.name;
    const value = e.target.value;

    console.log(key);
    console.log(value);




    setNewSkillType({
      id: newId,
      name: value
    });

    console.log(newSkillType);


  }

  const addSkillType = async (e: MouseEventHandler<HTMLButtonElement>) => {
    console.log('add skill type called');

    if(newSkillType) {
      const data = await createSkillType(newSkillType);

      console.log(data);
      const updatedSkillTypes = [...skillTypes, newSkillType]
  
      setSkillTypes([...updatedSkillTypes])



      const newId = updatedSkillTypes.reduce(
        (prev, curr) =>
          (prev.id > curr.id)? prev : curr
        ,{id: -1, name: ""}).id + 1

      

      setNewId(newId);
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
      return el
    })

    console.log("newEditableRows", newEditableRows)

    setEditableSkillTypes(newEditableRows);
  }


  const deleteHandler = async (id: number) => {
    console.log("delete called");
    
    const deletedSkillType = await deleteSkillType(id);

    console.log("deletedSkillType", deletedSkillType);

    // refresh skilltype
    // const skillTypesAPI = await findAllSkillTypes();
    // setSkillTypes([...skillTypesAPI]);


    // or pop it
    const skillTypesAPI =  skillTypes.filter(el => el.id !== id);
    setSkillTypes([...skillTypesAPI]);


  }


  return (
  <Box
    id='skills-page'
    py="16"
    style={{
      backgroundColor: 'var(--gray-a2)',
      borderRadius: 'var(--radius-3)'
    }}
  >
    <h1>Skill Type Page</h1>
    
    <Section size="2">


      {/* <Button onClick={skillTypeCreateHandler}>Create New</Button> */}



      <Table.Root variant="ghost">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>

            
            {skillTypes.map(el =>  (
                <Table.Row key={el.id}>
                  <Table.Cell justify={'start'}>{el.id}</Table.Cell>
                  
                  {/* to make it editable only if it's true in editableSkillTypes */}
                  {editableSkillTypes.find(editable => editable.id === el.id)?.isEditable ? 
                  <Table.Cell key={el.id}>
                    <TextField.Root value={el.name}>
                    </TextField.Root>
                  </Table.Cell>
                  : <Table.Cell>{el.name}</Table.Cell>
                  }

                  <Table.Cell>
                    <Flex gap="1" >
                      <Button variant='surface' onClick={() => editHandler(el.id, true)}>
                        Edit
                      </Button>
                      <Button color='red' variant='surface' onClick={() => deleteHandler(el.id)}>
                        Delete
                      </Button>

                      {/* confirm edit */}
                      <IconButton  onClick={() => editHandler(el.id, false)}>
                        <CheckIcon width="18" height="18"/>
                      </IconButton>
                    </Flex>

                  </Table.Cell>
                </Table.Row>
              ))
            }

            {/* To insert new field */}
            {/* form */}
            <Table.Row key={-1}>

              <Table.Cell>
                {(skillTypes.reduce(
                  (prev, curr) =>
                    (prev.id > curr.id)? prev : curr
                  
                  , {id: -1, name: ""}).id + 1).toString()}
              </Table.Cell>

              <Table.Cell>
                <TextField.Root id='skilltype' name='skilltype_name' onChange={addSkillTypeHandler} placeholder="Enter new skill type">
                </TextField.Root>
              </Table.Cell>

              <Table.Cell>
                <Button type='submit' onClick={addSkillType}>Add</Button>
              </Table.Cell>
            </Table.Row>

          </Table.Body>
        </Table.Root>
    </Section>
  </Box>
  )
}
