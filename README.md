# Blog
Blog webapp using React, Vite and Typescript.

## Set Up

The following system consists current

### Install Deps & Run Blog-App Frontend

1. `cd blog-app`  
2. `touch .env && echo "VITE_API_BASE_URL=http://localhost:4000/api/v0\nKEY_2=abc" > .env`   
3. `npm i`  
4. `npm run dev`

### Install Deps & Run Blog-API Backend

1. `cd blog-api`  
2. `touch .env && echo "DB_USER_API=1233\nKEY_2=abc" > .env`  
3. `npm i`  
4. `npm run dev`

### Run Blog Database

1. Create docker-compose.yml file
2. Create Env file with DB credentials
3. Check if docker image created `docker ps`
4. Run docker `docker-compose --env-file .env up`

### Prisma ORM

1. Run `npx prisma init` to initalize prisma db
2. Run `npx prisma migrate dev --name init` to move schema changes to db
3. Run Seed File `npx ts-node blog-api/db_scripts/seed.ts`

#### To Fix Prisma ID Issue

`SELECT setval(pg_get_serial_sequence('"MyTable"', 'id'), coalesce(max(id)+1, 1), false) FROM "MyTable";`

## User Stories

### Overall System

- The users should easily navigate through the system
- System should contain home page with general description of the creator (Ahmed)
- System should be mobile responsive


### About

- System should allow the users to view the creator details and reach to the social contact details
- The creator should be able to update his profile easily

### Experiences

- Creator should be able to to create experience in the system
- System should allow user to update the experience in the system
- System should allow user to delete the experience in the system
- The system should allow the users to view the creator experiences in an organized matter

### Projects
- Creator should be able to to create project post in the system
- System should allow user to update project in the system
- System should allow user to delete project in the system
- The system should allow the users to view the creator projects in general and details

### Blog
- Creator should be able to create blog post in the system
- Blog posts can be of many types (Sofware Engineering, Data Science, Music, Movies, Shows/Anime, Manga/Books)
- Creator should be able to update blog post in the system
- Creator should be able to delete blog post in the system
- Creator should be able to upload images to blog posts to the system
- System will take raw images and upload them to storage service
- System should store images as url links to take less memory
- Users should be able to view the blog posts and filter based on types
- User should also be able to search through the blog based on title and description

## Tools to be Used

- Figma for Wireframing
- Radix UI
- GSAP for CSS Animation [Link](https://gsap.com/docs/v3/GSAP/CorePlugins/CSS/)
- TypeScript Exploration
- Express JS