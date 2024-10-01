import React, { useEffect, useState } from 'react'
import { findAllSkillTypes, findSkillTypeById, createSkillType } from '../../api/skillTypeService'
import { Box, Button, Section, Table, TextField } from '@radix-ui/themes'
import { ISkillType } from '../../types/skillType'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Form } from 'react-router-dom';


export default function SkillType() {
  
  const [skillTypeCreated, setSkillTypeCreated] = useState<ISkillType>();
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

  const handleRowChange = (event: React.FormEvent<HTMLFormElement>): void => {
   
    console.log(event);
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
              <Table.ColumnHeaderCell>Add</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {skillTypes.map(el =>  (
                <Table.Row key={el.id}>
                  <Table.Cell justify={'start'}>{el.id}</Table.Cell>
                  <Table.Cell>{el.name}</Table.Cell>
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
                  <TextField.Root id='skill' placeholder="Enter new skill type">
                  </TextField.Root>
                </Table.Cell>

                <Table.Cell>
                  <Button>Add</Button>
                </Table.Cell>

              </Table.Row>
          </Table.Body>
        </Table.Root>
    </Section>
  </Box>
  )
}
