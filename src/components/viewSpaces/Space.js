import React, {useState} from 'react';
import { Card, Col, Row, Badge, Carousel, Button } from 'react-bootstrap';
import "./Space.css"


const Space = ({ space, infoFunction,notifi }) => {
  let [ index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
      setIndex(index = selectedIndex)
  }
  const carouselImages = space.photos.map( element => 
    <Carousel.Item key={element}>
      <img
        className="d-block w-100"
        src={element} width={300} height={300}
        alt={space.key+" slide"}
      />
    </Carousel.Item>
  );
  const carouselBadges = space.spaceTags.map(element => 
    <Badge key={element.name} variant="info">{element.name}</Badge>
  );
  return (
    <Card className="mt-4 mb-5 space_card">
      <Row>
        <Col lg={4} md={4}>
          <Carousel 
          activeIndex={index}
          onSelect={handleSelect} >
                {carouselImages}
          </Carousel>
        </Col>
        <Col lg={8} md={8}>
          <Card.Body>
            <Card.Title>{`${space.title.toUpperCase()} ${space.area}mts2`}</Card.Title>
              <Card.Subtitle>Dimensions</Card.Subtitle>
              <Card.Text>Width: {space.width} Length:{space.length} Height:{space.height}</Card.Text>
              <Card.Subtitle>Location</Card.Subtitle>
              <Card.Text>  {space.city}{"  "}{space.address}</Card.Text>
            <Card.Footer>
              {carouselBadges}
            </Card.Footer>
            <Button variant="secondary" onClick={infoFunction(space._id)(notifi)}>{!notifi?"Info":"update Inventory"}</Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Space;
