import * as React from 'react';
import { useParams } from 'react-router-dom';
import { MarkdownWrapper } from '../../components/hoc/markdown/markdown';
import { PanelTag } from '../../components/panel/panel';


const articleBody = `

Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

### Step 1 


\`code\`

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 



| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |


`;

export const Article = () => {
    const { id } = useParams();
    const articleData = {
        id: "f8a8f738-5f5a-43e6-bfd1-faaa93e11d47",
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
            <img className="cover-image" src={articleData.cover} />
            <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", alignItems: "flex-start", margin: "auto", width: "65%" }}>
                <h1 style={{ fontSize: "50px" }}>{articleData.title}</h1>
                <p>{articleData.date}</p>
                <hr style={{ border: 0, borderRadius: "1rem", width: "100%", height: "0.25rem", background: "linear-gradient(to right, rgba(108,16,209,1), rgba(0,212,255,1))" }} />
                <MarkdownWrapper>
                    {articleData.body}
                </MarkdownWrapper>
                <div style={{ height: "4rem" }} />
                <div style={{display:"flex", flexWrap:"wrap",}} className="bottom-tags" >
                    {articleData.tags.map((tag: any) => {
                        return (<PanelTag>{tag}</PanelTag>);
                    })}
                </div>
            </div>
            <div style={{ height: "30vh" }} />
        </React.Fragment>
    )
}