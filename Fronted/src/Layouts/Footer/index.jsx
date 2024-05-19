import React from 'react'
import'./index.scss'
import { Col, Row } from 'antd';

const Footer = () => {
  return (
    <footer>
        <div className="container">
        <Row justify="space-evenly">
      <Col span={4}><h1>About Us</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ratione consequatur provident fugit beatae, laudantium id laborum hic! Reprehenderit nemo cum dicta velit veniam voluptates omnis harum? Repudiandae, dolor expedita.</p></Col>
      <Col span={4}><h1>Newsletter</h1>
      <p>Stay update with our latest</p>
      <input type="text"placeholder='Enter' /></Col>
      <Col span={4}><h1>Instragram Feed</h1>
      <Row justify="space-evenly">
      <Col span={4}><img src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="" /></Col>
      <Col span={4}><img src="https://preview.colorlib.com/theme/shop/img/i2.jpg" alt="" /></Col>
      <Col span={4}><img src="https://preview.colorlib.com/theme/shop/img/i3.jpg" alt="" /></Col>
      <Col span={4}><img src="https://preview.colorlib.com/theme/shop/img/i4.jpg" alt="" /></Col>
      
    </Row>
    <Row justify="space-evenly">
      <Col span={4}><img src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="" /></Col>
      <Col span={4}><img src="https://preview.colorlib.com/theme/shop/img/i2.jpg" alt="" /></Col>
      <Col span={4}><img src="https://preview.colorlib.com/theme/shop/img/i3.jpg" alt="" /></Col>
      <Col span={4}><img src="https://preview.colorlib.com/theme/shop/img/i4.jpg" alt="" /></Col>
      
    </Row>
    
    
    
    </Col>
      <Col span={4}><h1>Follow Us</h1></Col>
    </Row>
        </div>
    </footer>
  )
}

export default Footer