import Markdown from 'react-markdown'


export default function MarkdownComponent(props: {markdown: string}) {

    const markdown: string = props['markdown'];
    // const markdown = '# Hi, *Pluto*!';
    return (
        <Markdown>
            {markdown}
        </Markdown>
    );
    
}
