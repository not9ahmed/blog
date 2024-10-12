import { Prisma } from '@prisma/client'
import prisma from '../utils/dbClient';
import { IProject, IProjectCreate, IProjectUpdate } from "../types/project";

interface BatchPayload extends Prisma.BatchPayload{}


interface IProjectService {
    findAll(): Promise<IProject[]>;
    findById(id: number): Promise<IProject>;
    create(project: IProject): Promise<IProject>;
    createMany(projects: IProject[]): Promise<BatchPayload>;
    update(id: number, project: IProjectUpdate): Promise<IProject>;
    delete(id: number): Promise<IProject>;
    deleteAll(): Promise<BatchPayload>;
}


export default class ProjectService implements IProjectService {
    
    constructor(){
        console.log("ProjectService Construct");
    }
    
    findAll = async(): Promise<IProject[]> => {
        
        try {

            const projects = await prisma.project.findMany();
            return projects;

        } catch (err) {

            console.log(err);
            throw err;

        };
    }


    findById = async(id: number): Promise<IProject> => {
        
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

    create = async (project: IProjectCreate): Promise<IProject> => {
        
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


    createMany = async(projects: IProjectCreate[]): Promise<BatchPayload> => {
        
        
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


    update =  async (id: number, project: IProjectUpdate): Promise<IProject> => {
        
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


    delete = async (id: number): Promise<IProject> => {
       
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
        }
    }
    
}