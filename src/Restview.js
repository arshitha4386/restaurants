import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Operatingtime from './Operatingtime';
import Review from './Review';
import { useSelector } from 'react-redux';

function Restview() {
  // const [restList, setRest] = useState([])


  //api access data
  // const getData = async () => {
  //   const result = await fetch('/restaurants.json')
  //   result.json().then(data => setRest(data.restaurants))
  // }

  //object create for useParams
  const params = useParams()
  console.log(params.id);

  const {restList}=useSelector(state=>state.reducer1)

  //find single restaurant data
  const singleRest = restList.find(i => i.id == params.id)
  console.log(singleRest);

  useEffect(() => {
    // getData()
  }, [])




  return (
    <>
      {
        singleRest ? (<Row>
          <Col lg={6} md={6}>
            <img className='w-75 container p-5' style={{ height: '800px' }}
              src={singleRest.photograph} alt=''
            />
          </Col>
          <Col lg={5} md={5} className='mt-5 fs-5' >
            <ListGroup className='pe-5'>
              <ListGroup.Item><h1 className='text-primary' style={{ fontFamily: 'Times new roman' }}>{singleRest.name}</h1></ListGroup.Item>
              <ListGroup.Item>Address <strong style={{ fontFamily: 'monospace' }}>{singleRest.address}</strong></ListGroup.Item>
              <ListGroup.Item>Neighborhood <strong>{singleRest.neighborhood}</strong></ListGroup.Item>
              <ListGroup.Item>Cusine Type <strong>{singleRest.cuisine_type}</strong></ListGroup.Item>
              <ListGroup.Item>
                <Operatingtime workingTime={singleRest.operating_hours} />
                <Review reviewList={singleRest.reviews}/>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>) : ""
      }

    </>
  )

}

export default Restview