import Carousel from 'react-bootstrap/Carousel';
import car1 from '../images/carimg1.png'
import car2 from '../images/carimg2.png'
import car3 from '../images/carimg3.png'

import {Button, Card} from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
import SocialFollow from "./SocialFollow"
import { useNavigate } from 'react-router-dom';


function DarkVariantExample() {
  return (
    <div className='carousel-container'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div>
      <hr></hr>
      <hr></hr>
    </div>

    <div className='image-main'>
      <div className='heading1'>
        <img className='Image' src={car1}/>
      </div>
      <div className="image-data">
       <p>
        <span className="animated-line">Drive Your Dream: Find the Perfect Car for Your Journey...</span>
       </p>
      </div>
    </div>
    <hr></hr>
    <div className='image-main'>

      <div className="image-data">
       <p>
        <span className="animated-line">Unlock Your Next Adventure: Explore Unbeatable Cars...</span>
       </p>
      </div>

      <div className='heading2'>
        <img className='Image' src={car2}/>
      </div>
      
    </div>

    <div>
    <CardCom />
    </div>

    <hr></hr>
    
    <div>
      <SocialFollow />
    </div>
    <div>
        <p style={{color:"white",textAlign:"center"}}>@Copy Rights 2024. Car Booking System</p>
    </div>
    </div>
    
  );
}


const CardCom = () =>{
  return(
    <div className="media">
      <BasicExample />
  <BasicExample />
  <BasicExample />
  <BasicExample />
    </div>
  );
  
}



const BasicExample = () =>{

  const navigate=useNavigate();

  const handleCardClick = () =>{
    navigate('/car-details');
  }

  return (
    <Card style={{ width: '18rem',cursor:'pointer' }} onClick={handleCardClick} >
      <Card.Img variant="top" src={car3} />
      <Card.Body>
        <Card.Title>Mercedes</Card.Title>
        <Card.Text>
          <div className='data'>
          Rating:****
          </div>
          <div className='data'>
          Car Model:Hyundai
          </div> 
          <div className='data'>Price:250000</div>
          
        </Card.Text>
        <div className="karthik">
        <Button variant="primary" style={{backgroundColor:'green',marginRight:'100px'}} >Buy</Button>
        <Button variant="primary"  style={{backgroundColor:'red'}}>Sell</Button>
        </div>
      </Card.Body>
    </Card>
  );
}



export default DarkVariantExample;