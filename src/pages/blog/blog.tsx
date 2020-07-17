import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Panel } from '../../components/panel/panel';

export const Blog = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={0} sm={0} md={2} lg={1}/>
                <Col xs={12} sm={12} md={10} lg={10}>
                    <h2 style={{marginLeft: "10px"}}>Blog</h2>
                    <span style={{margin: "10px", padding: "3px 6px 3px 6px", borderRadius: "10px", border: "1px solid #CCC"}}>Python</span>
                    <span style={{margin: "10px", padding: "3px 6px 3px 6px", borderRadius: "10px", border: "1px solid #CCC"}}>Rust</span>
                    <span style={{margin: "10px", padding: "3px 6px 3px 6px", borderRadius: "10px", border: "1px solid #CCC"}}>Docker</span>
                    <span style={{margin: "10px", padding: "3px 6px 3px 6px", borderRadius: "10px", border: "1px solid #CCC"}}>AWS</span>
                </Col>
                <Col xs={0} sm={0} md={2} lg={1}/>
            </Row>
            <div style={{height: "50px"}}/>
            <Row justify="center">
                <Col sm={12}>
                    <Panel 
                        title="Testing" 
                        date="12-22-2021" 
                        readTime={12} 
                        description="Testing lorem impsuym dolor ipsut do"
                        imageUrl="https://via.placeholder.com/200x200"
                    />
                    <div style={{height: "50px"}}/>
                </Col>
                <Col sm={12}>
                    <Panel
                        title="hello" 
                        date="12-22-2021" 
                        readTime={12} 
                        description="Lorem impsem dolor ipsut impsem dolor ipsut" 
                        imageUrl="https://via.placeholder.com/200x200"
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