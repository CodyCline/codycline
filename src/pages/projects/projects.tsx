import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Card } from '../../components/ui/card/card';

export const Projects = () => {
    return (
        <Container fluid>
            <Row justify="center">
                <Col style={{padding: "50px 0 50px 0"}} sm={6} md={4} lg={2.5} xl={2.5}>
                    <Card description="Cards are used to apply a container around a related groupinsdsdddasdasdasdasdsad..." />
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