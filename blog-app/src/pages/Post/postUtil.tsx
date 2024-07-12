const postImageCreator = (content: string): string =>  {

    // g flag will apply to all
    content = content.replace(/~image~/g, "<image src=''>");
    return content;
}

/**
 * 
 * @param content Method to replace the content images place holder with img html tag
 * @param images 
 * @returns 
 */
const postImageAppender = (content: string, images: string[]): string => {

    // content = content.replace(/~image~/g, "<image src=''>");


    return content;
}

export default postImageCreator
