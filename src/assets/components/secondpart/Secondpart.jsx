import React from 'react'
import "./secondpart.css"
import { Col, Row, Container } from 'react-bootstrap'
import images8 from "../../../assets/images8.jpg"
import images9 from "../../../assets/images9.jpg"
import images10 from "../../../assets/images10.jpg"
import images11 from "../../../assets/images11.jpg"

const Secondpart = () => {
  return (
    <section id='second'>
        <Container>
            <Row>
                <Col lg={6}>
                <div className="seven">
                    <h2>My Latest Works</h2>
                    <p>I believe that working hard and trying to learn every day will
                    make me improve in satisfying my customers.</p>
                </div>
                </Col>
                <Col lg={6}>
                <div className="seven">
                    <button>View All Projects</button>
                </div>
                </Col>
                <Col lg={6}>
                <div className="eight">
                   <li><a href="#">home</a></li>
                   <li><a href="#">home</a></li>
                   <li><a href="#">home</a></li>
                   <li><a href="#">home</a></li>
                   <li><a href="#">home</a></li>
                   
                </div>
                </Col>
              
            </Row>

            <Row>
            <Col lg={6}>
                <div className="nine">
                  <img src={images8} alt="" />
                   
                </div>
                </Col>
                <Col lg={6}>
                <div className="nine">
                  <img src={images9} alt="" />
                   
                </div>
                </Col>
                <Col lg={6}>
                <div className="nine">
                  <img src={images10} alt="" />
                   
                </div>
                </Col>
                <Col lg={6}>
                <div className="nine">
                  <img src={images11} alt="" />
                   
                </div>
                </Col>
               
            </Row>
            <div className="ten">
                <h3>View All</h3>
            </div>

            
        </Container>
    </section>
  )
}

export default Secondpart
