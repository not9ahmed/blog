import { Project, Prisma } from '@prisma/client'
import prisma from '../utils/dbClient';

interface BatchPayload extends Prisma.BatchPayload{}


interface IProjectService {
    findAll(): Promise<Project[]>;
    findById(id: number): Promise<Project>;
    create(project: Project): Promise<Project>;
    createMany(projects: Project[]): Promise<BatchPayload>;
    update(id: number, project: Project): Promise<Project>;
    delete(id: number): Promise<Project>;
    deleteAll(): Promise<BatchPayload>;
}


export default class ProjectService implements IProjectService {
    
    constructor(){
        console.log("ProjectService Construct");
    }
    
    findAll = async(): Promise<Project[]> => {
        
        try {

            const projects = await prisma.project.findMany();
            return projects;

        } catch (err) {

            console.log(err);
            throw err;

        };
    }


    findById = async(id: number): Promise<Project> => {
        
        try {

            const project = await prisma.project.findFirstOrThrow({
                where: {
                    id: id
                }
            });

            return project;

        } catch (err) {

            console.log(err);
            throw err;
        };
    }

    create = async (project: Project): Promise<Project> => {
        
        try {

            const createdProject = await prisma.project.create({
                data: project
            });

            return createdProject;

        } catch (err) {

            console.log(err);
            throw err;
        };
    }


    createMany = async(projects: Project[]): Promise<BatchPayload> => {
        
        
        try {

            const resultCount = await prisma.project.createMany({
                data: projects
            });

            return resultCount;

        } catch (err) {

            console.log(err);
            throw err;
        };
    }


    update =  async (id: number, project: Project): Promise<Project> => {
        
        try {

            const updatedProject = await prisma.project.update({
                where: {
                    id: id
                },
                data: project
            });

            return updatedProject;

        } catch (err) {

            console.log(err);
            throw err;
        };
    }


    delete = async (id: number): Promise<Project> => {
       
        try {

            const project = await prisma.project.delete({
                where: {
                    id: id
                }
            });

            return project;

        } catch (err) {

            console.log(err);
            throw err;
        };
    }


    deleteAll = async(): Promise<BatchPayload> => {
        
        try {

            const resultCount = await prisma.project.deleteMany();
            return resultCount;

        } catch (err) {

            console.log(err);
            throw err;
        };
    }
    
}