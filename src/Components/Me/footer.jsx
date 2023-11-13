import { Col, Row } from "react-bootstrap"
import { Container } from "react-bootstrap/lib/Tab"

const Footer=()=>{

return(

<Container>
    <Row>
        <Col className="col-6">
            <Row>
       <Col sm={4} md={3}>
        <a href="#">Informazioni</a>
       </Col>
       <Col sm={4} md={2}></Col>
       <Col sm={4} md={2}></Col>
       <Col sm={12} md={5}></Col>



            </Row>
        </Col>
        <Col className="col-2">
        </Col>
    </Row>
</Container>

)

}

export default Footer