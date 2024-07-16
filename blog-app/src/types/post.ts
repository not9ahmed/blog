export interface PostInterface  {
    id: number,
    title: string,
    description: string,
    content: string,
    images: string[] | string,
    createdDate: Date,

    // can add userid here then join data
    createdBy: string,

};

export interface PostCreateInterface  {
    title: string,
    description: string,
    content: string,
    images:  File[] | [] ,

    // can add userid here then join data
    createdBy: string,
};