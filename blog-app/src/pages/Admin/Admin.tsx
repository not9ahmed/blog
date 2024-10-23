import Category from './Category'
import Skills from './Skills'
import Projects from './Projects'
import SkillType from './SkillType'
import { Box, Tabs } from '@radix-ui/themes'

// Will manage all the admin related tasks like
// view, create, edit, delete categories
// view, create, edit, delete projects
// view, create, edit, delete skills
export default function Admin() {
  return (
    <div id='admin-page' className='content'>

        <h1>Hello NotAhmed</h1>
        <p>Main Page to manage all the main entities in the web app</p>

        {/* Add the main categories here and other related admin */}
        {/* each will have a table to easily modify existing list */}
        {/* <SkillType/>
        <Skills/>
        <Project/>
        <Category/> */}

        <Tabs.Root defaultValue="skills">
            <Tabs.List size={"2"}>
                <Tabs.Trigger value="skills">Skills</Tabs.Trigger>
                <Tabs.Trigger value="skilltype">Skill Type</Tabs.Trigger>
                <Tabs.Trigger value="category">Category</Tabs.Trigger>
            </Tabs.List>

            <Box pt="3">
                <Tabs.Content value="skills">
                    <Skills/>
                </Tabs.Content>
                <Tabs.Content value="skilltype">
                    <SkillType/>
                </Tabs.Content>
                <Tabs.Content value="category">
                    <Category/>
                </Tabs.Content>
            </Box>
        </Tabs.Root>

    </div>
  )
}