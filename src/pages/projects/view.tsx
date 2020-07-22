import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import { MarkdownWrapper } from '../../components/hoc/markdown/markdown';



const articleBody = `
# Test Project
Published 12-22-2020

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
`;

export const Post = () => {
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
            <div style={{ height: "75px" }} />
            <Row nogutter justify="center">
                <Col sm={12} lg={12} md={12} xl={12}>
                    <img className="cover-image" src={articleData.cover} />
                </Col>
            </Row>
            <Container fluid>
                <Row justify="center">
                    <Col sm={2.25} />
                    <Col sm={7.5}>
                        <h1>{articleData.title}</h1>
                        <p>{articleData.date}</p>
                        <hr />
                        <MarkdownWrapper>
                            {articleData.body}
                        </MarkdownWrapper>
                    </Col>
                    <Col sm={2.25} />
                </Row>
            </Container>
        </React.Fragment>
    )
}