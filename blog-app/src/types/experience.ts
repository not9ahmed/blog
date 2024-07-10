// tools can be seperate entity
// tasks is tightly coupled with experience
// org image is tightly coupled with experience
export interface Experience {
    id: number,
    position: string,
    organization: string,
    startDate: Date,
    endDate: Date,
    tasks: string[],
    projects: string[],
    tools: string[],
    orgImgs: string[]
}