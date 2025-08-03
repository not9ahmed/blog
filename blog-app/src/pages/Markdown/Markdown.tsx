import Markdown from 'react-markdown'
// import runningPost from '../MdPosts/running-changed-me.md'
import { PostInterface } from '../../types/post';
import { useEffect, useState } from 'react';


function generateHeading (post: PostInterface) {
const heading: string = `
# ${post?.title}
## ${post?.description}
##### @${post?.createdBy} | ${post?.createdDate? post?.createdDate.toString() : ""} 
`;
    console.log(heading);

    return  heading;
}



export default function MarkdownComponent(props?: {markdown: string, post: PostInterface}) {

    // const title: string = "Running Changed Me. (Dynamic)";
    const markdown: string = props?.['markdown'] ?? '';
    const post: PostInterface | undefined = props?.['post'];

    const [heading, setHeading] = useState<string>('');

    useEffect(() => {
        if(post){
            setHeading(generateHeading(post));
        }
    }, [post])

        return (
        <Markdown components={{
            // h1: () =>
            //     <h1>
            //         {title}
            //     </h1>

        }}>
            {`${heading} ${markdown}`}
        </Markdown>
    );
    
}
