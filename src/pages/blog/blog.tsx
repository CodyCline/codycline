import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Strip } from '../../components/strip/strip';

export const Blog = () => {
    return (
        <Container fluid>
            <Row align="center" style={{height: "200px"}}></Row>
            <Row justify="center">
                <Col sm={12}>
                    <Strip/>
                </Col>
                <Col sm={12}>
                    <Strip/>
                </Col>
                <Col sm={12}>
                </Col>
                <Col sm={12}>
                    <Strip/>
                </Col>
            </Row>
            <Row align="center" style={{height: "200px"}}></Row>
        </Container>
    )
}