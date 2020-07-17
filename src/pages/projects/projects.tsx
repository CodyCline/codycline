import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Card } from '../../components/ui/card/card';
import { useHistory } from 'react-router-dom';

export const Projects = () => {
    const history = useHistory();

    function navigate(url: string) {
        history.push("/projects/" + url);
    }

    return (
        <Container fluid>
            <Row>
                <Col xs={0} sm={0} md={2} lg={1}/>
                <Col xs={12} sm={12} md={10} lg={10}>
                    <h2 style={{marginLeft: "10px"}}>Portfolio</h2>
                    <span style={{margin: "10px", padding: "3px 6px 3px 6px", borderRadius: "10px", border: "1px solid #CCC"}}>All</span>
                    <span style={{margin: "10px", padding: "3px 6px 3px 6px", borderRadius: "10px", border: "1px solid #CCC"}}>Open Source</span>
                    <span style={{margin: "10px", padding: "3px 6px 3px 6px", borderRadius: "10px", border: "1px solid #CCC"}}>Web</span>
                    <span style={{margin: "10px", padding: "3px 6px 3px 6px", borderRadius: "10px", border: "1px solid #CCC"}}>Mobile</span>
                </Col>
                <Col xs={0} sm={0} md={2} lg={1}/>
            </Row>
            <Row justify="center">
                <Col style={{padding: "50px 0 50px 0"}} sm={6} md={4} lg={2.5} xl={2.5}>
                    <Card onClick={()=>navigate("id")} description="Cards are used to apply a container..." />
                </Col>
                <Col style={{padding: "50px 0 50px 0"}}  sm={6} md={4} lg={2.5} xl={2.5}>
                    <Card description="Cards are used to apply a containe" />
                </Col>
                <Col style={{padding: "50px 0 50px 0"}}  sm={6} md={4} lg={2.5} xl={2.5}>
                    <Card />
                </Col>
                <Col style={{padding: "50px 0 50px 0"}}  sm={6} md={4} lg={2.5} xl={2.5}>
                    <Card />
                </Col>
            </Row>
        </Container>
        
    );
}