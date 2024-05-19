import React from 'react'
import './index.scss'
import { Card } from 'antd';
const { Meta } = Card;
import { Col, Row } from 'antd';


const HomePage = () => {
  return (
   <div className="Home-Page">
    <div className="Home1">
      <section className='banner'>
    <div className="Text">
    <img src="https://preview.colorlib.com/theme/shop/img/header-img.png" alt="Logo" />
   <div className="text1">
   <span>Flat  <h1>75%Off</h1></span>
  
  <h1>IT’S HAPPENING
THIS SEASON!</h1>

<button className='btn'><h3>PURCHASE NOW</h3></button>

   </div>
  
    </div>
      </section>
      <section className='sec4'>
        <div className="text4">
        <h1>New realeased Products for Women</h1>
        <p>Who are in extremely love with eco friendly system.</p>
        <div className="card">
   
    <Row justify="space-evenly">
      <Col span={4}> <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/shop/img/l5.jpg" />}
  >
    <Meta title="Long Sleeve shirt" description="$150.00" />
  </Card></Col>
      <Col span={4}><Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/shop/img/l6.jpg" />}
  >
    <Meta title="Europe Street beat" description="$150.00" />
  </Card></Col>
      <Col span={4}><Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/shop/img/l7.jpg" />}
  >
    <Meta title="Long Sleeve shirt" description="$150.00"/>
    
  </Card></Col>
      <Col span={4}><Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/shop/img/l8.jpg" />}
  >
    <Meta title="Long Sleeve shirt" description="$150.00"/>

  </Card></Col>
    </Row>
        </div>
        </div>
      </section>
    </div>
   </div>
  )
}

export default HomePage