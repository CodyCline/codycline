import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Strip } from '../../components/strip/strip';

export const Blog = () => {
    return (
        <Container fluid>
            <Row align="center" style={{height: "200px"}}>
                <Col sm={12} md={12} lg={12}>
                    <h5>Posts</h5>
                </Col>
            </Row>
            <Row justify="center">
                <Col sm={12}>
                    <Strip 
                        title="Testing" 
                        date="12-22-2021" 
                        readTime={12} 
                        description="Testing lorem impsuym dolor ipsut do"
                        imageUrl="https://via.placeholder.com/150x150"
                    />
                    <div style={{height: "50px"}}/>
                </Col>
                <Col sm={12}>
                    <Strip 
                        title="hello" 
                        date="12-22-2021" 
                        readTime={12} 
                        description="Lorem impsem dolor ipsut impsem dolor ipsut" 
                        imageUrl="https://via.placeholder.com/150x150"
                    />
                    <div style={{height: "50px"}}/>
                </Col>
                <Col sm={12}>
                </Col>
                <Col sm={12}>
                </Col>
            </Row>
            <Row align="center" style={{height: "200px"}}></Row>
        </Container>
    )
}