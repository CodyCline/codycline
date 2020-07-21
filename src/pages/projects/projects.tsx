import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import { Card } from '../../components/ui/card/card';
import { SelectTag } from '../../components/ui/tags/tags';

export const Projects = () => {
    const history = useHistory();
    const [data, setData] = React.useState<any>([
        {
            id: "id",
            title: "Test Project",
            description: "Lorem ipsum dolor ipsut lorem ipsem"
        },
        {
            id: "id",
            title: "Test Project",
            description: "Lorem ipsum dolor ipsut lorem ipsem"
        },
        {
            id: "id",
            title: "Test Project",
            description: "Lorem ipsum dolor ipsut lorem ipsem"
        },
    ]);

    function navigate(url: string) {
        history.push("/projects/" + url);
    }

    return (
        <Container fluid>
            <div style={{height: "50px"}}/>
            <Row>
                <Col xs={0} sm={0} md={3} lg={3} />
                <Col style={{background: "#212223"}} xs={12} sm={12} md={6} lg={6}>
                    <h2 style={{ marginLeft: "10px" }}>Projects</h2>
                    <Row style={{ margin: "auto" }}>
                        <SelectTag isActive>All</SelectTag>
                        <SelectTag>Web</SelectTag>
                        <SelectTag>Mobile</SelectTag>
                        <SelectTag>Desktop</SelectTag>
                    </Row>
                </Col>
                <Col xs={0} sm={0} md={3} lg={3} />
            </Row>
            <Row justify="center">
                {data.map((project: any) => (
                    <Col key={project.id} style={{ padding: "50px 0 50px 0" }} sm={6} md={4} lg={2.5} xl={2.5}>
                        <Card
                            onClick={() => navigate(project.id)}
                            description={project.description}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}