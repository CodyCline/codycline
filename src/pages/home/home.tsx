import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';

export const Home = () => {
    return (
        <Container fluid style={{
            backgroundImage: "linear-gradient(#2c2c30 0.75px,transparent 0), linear-gradient(90deg,#2c2c30 0.75px,transparent 0), linear-gradient(transparent 0.75px,#171819 0,#171819 0.75px,transparent 0)",
            backgroundSize: "100px 100px"
        }}>
            <div style={{height: "200px"}}/>
            <Row>
                <Col xs={3} sm={3} lg={3} md={3} xl={3} />
                <Col xs={6} style={{ background: "#212223" }} sm={6} lg={6}>
                    <h1>Hello, I'm Cody Cline.</h1>
                    <p>Software Developer based in greater Seattle, WA.  I spend most of the time here blogging about random code stuff.</p>
                </Col>
                <Col xs={3} sm={3} lg={3} md={3} xl={3} />
            </Row>
            <div style={{height: "200px"}}/>
        </Container>
    );
}