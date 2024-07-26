     // blog can be of many type
// the type will a seperate entity
// to be fetched from api 

// the blog can be filtered on these
// Sofware Engineering
// Computer Engineering
// Data Science
// Music
// Movies
// Shows
// Anime etc
// Manga/Books
export interface Category {
    id: number,
    name: string,
    isEntertainment: boolean
}



// will have self reference
// will use this as the main
export interface CategoryInterface {
    id: number,
    name: string,
    parentCategory: number,
    createdDate: Date,
    createdBy: string,
}


export interface CategoryCreateInterface {
    id: number,
    name: string,
    parentCategory: number,
    createdDate: Date,
    createdBy: string,
}


export interface CategoryEditInterface {
    id: number,
    name: string,
    parentCategory: number,
    createdDate: Date,
    createdBy: string,
}