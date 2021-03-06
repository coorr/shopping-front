import React, {memo, useCallback, useState} from 'react'
import { Card } from "react-bootstrap";
import Link from 'next/link'
import { location } from '../../config/location';

const ItemPost = ({item}) => {
  const [over, setOver] = useState(false);
  console.log(item);

  return (
    <div>
        <Card >
        <Link href={`/item/${item.itemId}`}>
        <a>
          <Card.Img 
          variant="top" 
          src={item.images.length > 0 ? location+`${item.images[0].location}` : undefined  }
          onMouseOver={e => setOver(true)}
          onMouseOut={e => setOver(false)}
          height={430}
          />
        </a>
        </Link>
          <Card.Body>
          <Link href={`/item/${item.itemId}`}>
            <a>
              <Card.Title style={{ fontSize: '10px' }}>
                {item.title}
              </Card.Title>
            </a>
          </Link>
              <Card.Title style={{ fontSize: '10px', textDecoration : 'line-through' }}>
                {item.price.toLocaleString('ko-KR')}원
              </Card.Title>
              <Card.Text style={{ fontSize: '10px' }}>
                {item.discount_price.toLocaleString('ko-KR')}원
              </Card.Text>
              <br />
          </Card.Body>
        </Card>
    </div>
  )
}

export default memo(ItemPost)