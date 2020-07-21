import * as React from 'react';
import { SelectTag } from '../../components/ui/tags/tags';
import { Container, Row, Col } from 'react-grid-system';
import { Panel } from '../../components/panel/panel';
import { useHistory } from 'react-router-dom';

export const Blog = () => {
    const history = useHistory();
    function navigate(url: string) {
        history.push("/blog/" + url);
    }
    const [data, setData] = React.useState([
        {
            id: "f8a8f738-5f5a-43e6-bfd1-faaa93e11d47",
            title: "Testing Project",
            description: "Testing lsaasd saasfsaf asfas asfasf asdsa orem impsuym dolor ipsut dolor imseeed ads aa",
            banner: "https://picsum.photos/seed/picsum/200/300",
            date: "2020-03-18",
            tags: [
                "Python",
                "JavaScript",
            ],
            read_time: 12,
        },
        {
            id: "5d42dd7d-4b85-416e-92b5-6f83cb87fd4c",
            title: "Testing Project",
            description: "Testing lorem impsuym dolor ipsut dolor imseeed ads aa",
            banner: "https://picsum.photos/seed/picsum/200/300",
            date: "2020-03-18",
            read_time: 12,
        },
    ])
    return (
        <Container fluid>
            <div style={{height: "50px"}}/>
            <Row >
                <Col xs={0} sm={2} md={3} lg={3} />
                <Col style={{background: "#212223"}} xs={12} sm={8} md={6} lg={6}>
                    <h2 style={{ marginLeft: "10px" }}>Blog</h2>
                    <Row style={{ margin: "auto" }}>
                        <SelectTag isActive>Python</SelectTag>
                        <SelectTag >Python</SelectTag>
                    </Row>
                </Col>
                <Col xs={0} sm={2} md={3} lg={3} />
            </Row>
            <div style={{ height: "50px" }} />
            <Row justify="center">
                {data.map((article: any) => (
                    <Col key={article.id} sm={12} lg={12}>
                        <Panel
                            onClick={() => navigate(article.id)}
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
    );
}