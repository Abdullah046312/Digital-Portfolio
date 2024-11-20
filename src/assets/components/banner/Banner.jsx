import React from 'react'
import "./banner.css"
import images1 from "../../../assets/images1.jpg"
import images2 from "../../../assets/images2.jpg"
import images3 from "../../../assets/images3.jpg"
import images4 from "../../../assets/images4.jpg"
import images5 from "../../../assets/images5.jpg"
import images6 from "../../../assets/images6.jpg"
import images7 from "../../../assets/images7.jpg"
import { Col, Container, Row } from 'react-bootstrap'

const Banner = () => {
  return (
    <div className="one">
      <section id='banner'>
        <Container>

        <Row>
          <Col lg={6}>
          <div className="two">
           
            <h2>Creative </h2>
          </div>
          </Col>
          <Col lg={6}>
          <div className="two">
          <h4> Create a Professional </h4>
          <h3> Website Today!</h3>
           
            
          </div>
          </Col>
          <Col lg={12}>
          <div className="two">
          <h2>Digital Portfolio</h2>
           
            
          </div>
          </Col>
          <Col lg={6}>
          <div className="three">
         <p>I assist individuals and brands in achieving their objectives by creating and developing user-focused digital products and interactive experiences.</p>
         <button>Download CV</button>
         <h4>+ 12 years with professional design software</h4>
         <div className="four">
          <img src={images2} alt="" />
          <img src={images3} alt="" />
          <img src={images4} alt="" />
          <img src={images5} alt="" />
          <img src={images6} alt="" />
          <img src={images7} alt="" />
         </div>
           
            
          </div>
          </Col>
        </Row>
        </Container>
      </section>
        
    </div>
  )
}

export default Banner
