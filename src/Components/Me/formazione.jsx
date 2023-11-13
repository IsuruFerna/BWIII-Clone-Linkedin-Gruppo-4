import { Col, Row } from "react-bootstrap"
import {Button, Card} from 'react-bootstrap';


const Formazione=()=>{

return(
    <Row>
<Col sm={2}></Col>
<Col sm={8}>

<Card className="my-5">
    <Card.Header className="container-fluid bg-white mt-1">
    <Row className="d-flex justify-content-between">
    <Col sm={8} md={9} lg={10}> <h5> Formazione</h5></Col>
    <Col sm={4} md={3} lg={2}><Button variant="outline-secondary" className="butt border-0 rounded-circle"><i class="bi bi-plus-lg"></i></Button> 
     <Button variant="outline-secondary" className="butt border-0 rounded-circle"><i class="bi bi-pencil"></i></Button></Col>
      </Row></Card.Header>
      <Card.Body>
        <Row>
       <Col sm={2} md={1}> <Card.Img  src="./epicode_logo.png" className="iconaFormazione mt-2 align-items-center rounded-circle"/></Col>
        <Col> 
        <Card.Title className="btn text-black fs-5 ps-0 pb-0">Epicode</Card.Title>
        <Card.Text className="text-secondary">
          2023-2024
        </Card.Text>
        </Col> 
        </Row>
      </Card.Body>
    </Card>


</Col>
<Col sm={2}></Col>

    </Row>
)

}

export default Formazione