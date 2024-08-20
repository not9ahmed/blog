// will contain the project interfaces

export interface ProjectInterface {
    id: number,
    name: string,
    startDate: Date,
    completeDate: Date | null,
    status: "Complete" | "In Progress" | "Just Started" | "In Plan"
    description: string,
    tools: string[],
    images: string[], 
    link: string,
    github: string
}

export interface ProjectCreateInterface {
    id: number,
    name: string,
    startDate: Date,
    completeDate: Date | null,
    status: "Complete" | "In Progress" | "Just Started" | "In Plan"
    description: string,
    tools: string[],
    images: File[], 
    link: string,
    github: string
}

export interface ProjectEditInterface {
    id: number,
    name: string,
    startDate: Date,
    completeDate: Date | null,
    status: "Complete" | "In Progress" | "Just Started" | "In Plan"
    description: string,
    tools: string[],
    images: File[], 
    link: string,
    github: string
}