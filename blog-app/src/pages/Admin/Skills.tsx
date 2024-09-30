import { Button, Table, TextField, Box, Section, IconButton, Link, Select } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react'
import { findAllSkills, findSkillById } from '../../api/skillService';
import { ISkill } from '../../types/skill';
import { ISkillType } from '../../types/skillType';
import { findAllSkillTypes } from '../../api/skillTypeService';

// will be a table
export default function Skills() {



  const [skills, setSkills] = useState<ISkill[]>([]);
  const [skillTypes, setSkillTypes] = useState<ISkillType[]>([]);


  useEffect(() => {

    const fetchData = async () => {
      const skillsDb = await findAllSkills();
      setSkills([...skillsDb]);

      const skillsTypeDb = await findAllSkillTypes();
      setSkillTypes([...skillsTypeDb]);
    }

    fetchData();
  }, [])




  return (
    <Box
      id='skills-page'
      py="8"
      style={{
        backgroundColor: 'var(--gray-a2)',
        borderRadius: 'var(--radius-3)'
      }}
    >
      <Section size="1">

        <h1>Skills Page</h1>



        <Table.Root variant="ghost">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Icon</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Skill Type</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Link</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Edit</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Delete</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            
            {skills.map(skill =>  (
              <Table.Row>
                <Table.Cell justify={'start'}>
                  {skill.id}
                </Table.Cell>
                
                <Table.Cell>
                  {skill.name}
                </Table.Cell>
                
                <Table.Cell>
                  <img src={skill.icon} width={60}/>
                  
                </Table.Cell>
                
                <Table.Cell>

                  {skill.skillTypeId}
                  <Select.Root size="1" defaultValue="apple">
                  <Select.Trigger />
                  <Select.Content>
                    <Select.Item value="apple">Apple</Select.Item>
                    <Select.Item value="orange">Orange</Select.Item>
                  </Select.Content>
                </Select.Root>
                </Table.Cell>

                <Table.Cell>
                  <Link href="#">Sign up</Link>
                </Table.Cell>

                <Table.Cell>
                  <Button>Edit</Button>
                </Table.Cell>

                <Table.Cell>
                  <Button>Delete</Button>
                </Table.Cell>

              </Table.Row>
            ))
            }




          </Table.Body>
        </Table.Root>



      </Section>
    </Box>
  )
}
