import React, { useEffect, useState } from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'
import axios from "axios"
import Footer from './Footer'
const Projects = () => {
    const[projects,setprojects]=useState([])
    useEffect(() => {
        axios.get("data.json")
        .then((res) => {
            setprojects(res.data.projects)
        })
    },[]) 
    return (
        <>
            <section className="allprojectsec">
                <h3 className="wow fadeIn" data-wow-duration="2s" data-wow-delay="1s">All Projects</h3>
                <Container>
                    <Row>
                    {
                        projects.map((project) => (
                            <Col md="4" sm="12" key={project.id} className="coll wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">
                                <Card>  
                                <Card.Img variant="top" src={project.photo} />  
                                <Card.Body>  
                                <Card.Title><h5>{project.title}</h5></Card.Title>  
                                <Card.Text><p>{project.description}</p></Card.Text> 
                                <a href={project.link} target='_blank'>View</a>
                                </Card.Body>  
                                </Card>
                            </Col>
                        ))
                    }
                    </Row>
                </Container>
            </section> 
            
            <Footer />
        </>
    )
}


export default Projects
