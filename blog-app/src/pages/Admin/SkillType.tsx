import React, { ChangeEvent, MouseEventHandler, useEffect, useState } from 'react'
import { findAllSkillTypes, findSkillTypeById, createSkillType } from '../../api/skillTypeService'
import { Box, Button, Section, Table, TextField } from '@radix-ui/themes'
import { ISkillType } from '../../types/skillType'



export default function SkillType() {
  
  const [newSkillType, setNewSkillType] = useState<ISkillType>();
  const [skillTypes, setSkillTypes] = useState<ISkillType[]>([]);


  useEffect(() => {


    const fetchData = async () => {
      const skillsTypesAPI = await findAllSkillTypes();
      setSkillTypes([...skillsTypesAPI]);

    }

    fetchData();

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
      id: 9999,
      name: value
    });

    console.log(newSkillType);


  }

  const addSkillType = async (e: MouseEventHandler<HTMLButtonElement>) => {
    console.log('add skill type called');

    if(newSkillType) {
      const data = await createSkillType(newSkillType);

      console.log(data);
    }

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
                  <Table.Cell>{el.name}</Table.Cell>
                  <Table.Cell>
                    <Box>
                      <Button variant='surface'>Edit</Button>
                      <Button variant='surface'>Edit</Button>
                    </Box>
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
