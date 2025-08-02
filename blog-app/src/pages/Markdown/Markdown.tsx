import Markdown from 'react-markdown'
import runningPost from '../MdPosts/running-changed-me.md'


export default function MarkdownComponent(props?: {markdown: string}) {

    const markdown: string = props?.['markdown'] ?? '';

    console.log(markdown);



    // const markdown = '# Hi, *Pluto*!';
    return (
        <Markdown>
            {runningPost}
        </Markdown>
    );
    
}
