import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Panel } from '../../components/panel/panel';

export const Blog = () => {
    const date : Date = new Date();
    const [data, setData] = React.useState([
        {
            id: "123",
            title: "Testing Project",
            description: "Testing lorem impsuym dolor ipsut dolor imseeed ads aa",
            banner: "https://picsum.photos/seed/picsum/200/300",
            date: date.getFullYear(),
            read_time: 12,
        },
        {
            id: "123",
            title: "Testing Project",
            description: "Testing lorem impsuym dolor ipsut dolor imseeed ads aa",
            banner: "https://picsum.photos/seed/picsum/200/300",
            date: (date.toISOString()).split(" "),
            read_time: 12,
        },
    ])
    return (
        <Container fluid>
            <Row>
                <Col xs={0} sm={0} md={2} lg={1} />
                <Col xs={12} sm={12} md={10} lg={10}>
                    <h2 style={{ marginLeft: "10px" }}>Blog</h2>
                    <Row>
                        <span style={{ margin: "10px", padding: "3px 6px 3px 6px", borderRadius: "10px", border: "1px solid #CCC" }}>Python</span>
                        <span style={{ margin: "10px", padding: "3px 6px 3px 6px", borderRadius: "10px", border: "1px solid #CCC" }}>Rust</span>
                        <span style={{ margin: "10px", padding: "3px 6px 3px 6px", borderRadius: "10px", border: "1px solid #CCC" }}>Docker</span>
                        <span style={{ margin: "10px", padding: "3px 6px 3px 6px", borderRadius: "10px", border: "1px solid #CCC" }}>AWS</span>
                    </Row>
                </Col>
                <Col xs={0} sm={0} md={2} lg={1} />
            </Row>
            <div style={{ height: "50px" }} />
            <Row justify="center">
                {data.map((article: any) => (
                    <Col sm={12} lg={12}>
                       <Panel
                           title={article.title}
                           description={article.description}
                           date={article.date}
                           readTime={article.read_time}
                           imageUrl={article.banner}
                       />
                       <div style={{ height: "50px" }} />
                    </Col> 
                ))}
            </Row>
            <div style={{ height: "200px" }} />
        </Container>
    )
}