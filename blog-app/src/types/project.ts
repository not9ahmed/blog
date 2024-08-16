// will contain the project interfaces

export interface ProjectInterface {
    id: number,
    name: string,
    startDate: Date,
    completeDate: Date | null,
    status: "Complete" | "In Progress" | "Just Started" | "In Plan"
    description: string,
    tools: string[],
    link: string
}

export interface ProjectCreateInterface {
    id: number,
    name: string,
    startDate: Date,
    completeDate: Date | null,
    status: "Complete" | "In Progress" | "Just Started" | "In Plan"
    description: string,
    tools: string[],
    link: string
}

export interface ProjectEditInterface {
    id: number,
    name: string,
    startDate: Date,
    completeDate: Date | null,
    status: "Complete" | "In Progress" | "Just Started" | "In Plan"
    description: string,
    tools: string[],
    link: string
}