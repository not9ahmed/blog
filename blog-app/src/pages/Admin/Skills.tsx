import { Button, Table, TextField, Box, Section, IconButton, Link, Select, Flex, Container } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react'
import { findAllSkills, findSkillById } from '../../api/skillService';
import { ISkill } from '../../types/skill';
import { ISkillType } from '../../types/skillType';
import { findAllSkillTypes } from '../../api/skillTypeService';

// will be a table
export default function Skills() {



  const [skills, setSkills] = useState<ISkill[]>([]);
  const [skillTypes, setSkillTypes] = useState<ISkillType[]>([]);

  const [createdSkillType, setCreatedSkillType] = useState<ISkillType>();


  useEffect(() => {

    const fetchData = async () => {
      const skillsDb = await findAllSkills();
      setSkills([...skillsDb]);

      const skillsTypeDb = await findAllSkillTypes();
      setSkillTypes([...skillsTypeDb]);
    }

    fetchData();
  }, [])


  const dropdownHandler = (value: string) => {
    console.log(value);
  }




  return (
    <Section
      id='skills-page'
      py="16"
      style={{
        backgroundColor: 'var(--gray-a2)',
        borderRadius: 'var(--radius-3)'
      }}
      minHeight="580px"
    >
      <Box py="4">
        <h1>Skills</h1>
      </Box>
          
        <Container size="2">

          <Table.Root variant="surface">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Icon</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Skill Type</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              
              {skills.map(el =>  (
                <Table.Row key={el.id}>
                  <Table.Cell justify={'start'}>
                    {el.id}
                  </Table.Cell>
                  
                  <Table.Cell>
                    {el.name}
                  </Table.Cell>
                  
                  <Table.Cell>
                    {el.icon?
                    <img src={el.icon} alt='image-notfound' width={60}/>
                    : <img alt='not-found'></img>
                    }
                  </Table.Cell>
                  
                  <Table.Cell>
                    {el.skillTypeId}                  
                  </Table.Cell>


                  {/* action cell */}
                  <Table.Cell>
                    <Flex gap="2">
                    
                      {/* Edit button */}
                      <Button variant='surface' onClick={() => console.log("edit clicked")}>
                        Edit
                      </Button>


                      {/* Delete Button */}
                      <Button color='red' variant='surface' onClick={() => console.log("delete clicked")}>
                        Delete
                      </Button>

                    </Flex>
                  </Table.Cell>

                </Table.Row>
              ))
              }


              {/* Add new skill */}
              <Table.Row>

                <Table.RowHeaderCell>
                  99999999999
                </Table.RowHeaderCell>
   
                <Table.Cell>
                    <TextField.Root
                      id='skill-name'
                      name='skill_name'
                      // value={newSkill.name}
                      // onChange={addSkillHandler}
                      placeholder="Enter new skill"
                    />
                  </Table.Cell>

                <Table.Cell>
                  Image
                </Table.Cell>

                <Table.Cell>
                  None
                </Table.Cell>

                <Table.Cell>
                  <Button type='submit' onClick={(e: any) => console.log("add new skill clicked")}>
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
