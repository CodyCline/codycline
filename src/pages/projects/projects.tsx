import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Card } from '../../components/ui/card/card';

export const Projects = () => {
    return (
        <Container fluid>
            <Row align="center" style={{height: "100px"}}></Row>
            <Row justify="center">
                <Col sm={6} md={4} lg={2.5} xl={2.5}>
                    <Card />
                </Col>
                <Col sm={6} md={4} lg={2.5} xl={2.5}>
                    <Card />
                </Col>
                <Col sm={6} md={4} lg={2.5} xl={2.5}>
                    <Card />
                </Col>
                <Col sm={6} md={4} lg={2.5} xl={2.5}>
                    <Card />
                </Col>
            </Row>
        </Container>
        
    );
}