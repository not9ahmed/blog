// will be subset of Post
/*
interface Post  {
    id: number,
    title: string,
    description: string,
    content: string,
    images: string[] | string,
    createdDate: Date,

    // can add userid here then join data
    createdBy: number
};

*/

export interface PostDto {
        id: number,
        name: string,
        description: string,
        createdDate: Date,
        images: string[] | string,
    }