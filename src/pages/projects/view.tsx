import * as React from 'react';
import { MarkdownWrapper } from '../../components/hoc/markdown/markdown';



const articleBody = `
    Published 12-22-2020

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
`;

export const Post = () => {
    const projectData = {
        id: "f8a8f738-5f5a-43e6-bfd1-faaa93e11d47",
        type: "desktop",
        title: "Testing Project",
        description: "Testing lsaasd saasfsaf asfas asfasf asdsa orem impsuym dolor ipsut dolor imseeed ads aa",
        thumb: "https://picsum.photos/seed/picsum/200/300",
        cover: "https://images.unsplash.com/photo-1574701427671-519298cac091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
        date: "2020-03-18",
        tags: [
            "Python",
            "JavaScript",
        ],
        read_time: 12,
        body: articleBody,
    }
    return (
        <React.Fragment>
            <div style={{ height: "10vh" }} />
            <div>
                <img className="cover-image" src={projectData.cover} />
            </div>
            <div style={{display: "flex", flexWrap:"wrap", margin: "auto", width: "60%"}}>
                <h1>{projectData.title}</h1>
                <p>{projectData.date}</p>
                <hr />
                <MarkdownWrapper>
                    {projectData.body}
                </MarkdownWrapper>
            </div>
        </React.Fragment>
    )
}