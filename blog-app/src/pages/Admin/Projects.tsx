import { Button, Table, TextField } from '@radix-ui/themes'
import React from 'react'

// will be a table
export default function Projects() {
  return (
    <div>

      <h1>Projects</h1>

      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Button</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
            <Table.Cell>
              {/* danilo@example.com */}
                  <TextField.Root radius="none" placeholder="Search the docs…" value={"danilo@example.com"}/>
            </Table.Cell>
            <Table.Cell>Developer</Table.Cell>
            <Table.Cell>
              <Button>Let's go</Button>
            </Table.Cell>
          </Table.Row>



        </Table.Body>
      </Table.Root>

    </div>
  )
}
