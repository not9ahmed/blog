import Markdown from 'react-markdown'
// import runningPost from '../MdPosts/running-changed-me.md'
import { PostInterface } from '../../types/post';
import { useEffect, useState } from 'react';
import '../Post/post.css'



function generateHeading (post: PostInterface) {
const heading: string = `
# ${post?.title}  
## ${post?.description}  
### @${post?.createdBy} | ${post?.createdDate? post?.createdDate.toString() : ""} 
`;
    return heading;
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
            // h1: () => {
            //     return <h1 style={{backgroundColor: 'red'}}>
            //         {post?.title}
            //     </h1>
            // },
            img: () => {
                // applies styling to image tag
                return <img
                    className='post-main-image'
                    style={{border: '2px solid blue'}}
                    src={post?.images[0]}
                    alt="image not found" />;
            },
            // p: () => {     
            //     return <div className='post-content'>
            //     <p>
            //         {post?.content}
            //     </p>
            //     </div>
            // }

        }}>
            {/* // TODO: how can i handle heading substitution */}
            {`${heading} ${markdown}`}
        </Markdown>
    );
    
}
