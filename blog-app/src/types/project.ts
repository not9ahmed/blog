// will contain the project interfaces

export interface ProjectInterface {
    id: number,
    name: string,
    description: string,
    tools: string[],
    link: string
}

export interface ProjectCreateInterface {
    id: number,
    name: string,
    description: string,
    tools: string[],
    link: string
}

export interface ProjectEditInterface {
    id: number,
    name: string,
    description: string,
    tools: string[],
    link: string
}