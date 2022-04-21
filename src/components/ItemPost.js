import React, {useState} from 'react'
import Image from 'next/image'
import ss from '../images/ee.png'
import { Card, Button } from "react-bootstrap";

const ItemPost = ({item}) => {
  const [over, setOver] = useState(false);
  
  return (
    <div>
        <Card >
        {/* `http://localhost:8080/static/${this.props.dbImage}` */}
          <Card.Img 
          variant="top" 
          // src={over &&item.Image[1] !== undefined ? item.Image[1].src : item.Image[0].src}
          src={item.images.length > 0 && `http://localhost:8080/static/${item.images[0].src}`}
          onMouseOver={e => setOver(true)}
          onMouseOut={e => setOver(false)}
          height={430}
          />
          
          <Card.Body>
            <Card.Title style={{ fontSize: '10px' }}>{item.title}</Card.Title>
              <Card.Title style={{ fontSize: '10px', textDecoration : 'line-through' }}>
                {item.price}원<br />
              </Card.Title>
              <Card.Text style={{ fontSize: '10px' }}>
                {item.discountPrice}원
              </Card.Text>
              <br />
          </Card.Body>
        </Card>
    </div>
  )
}

export default ItemPost