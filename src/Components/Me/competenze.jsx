import { Row,Col, Card, Button } from "react-bootstrap"

const Competenze=()=>{

return(
    <Row>
    <Col sm={2}></Col>
    <Col sm={8}>
    
    <Card className="my-5">
        <Card.Header className="container-fluid bg-white mt-1">
        <Row className="d-flex justify-content-between ">
        <Col  sm={5} md={4} lg={5} xl={6} xxl={7}> <h5> Competenze</h5></Col>
        <Col  sm={8} md={8} lg={7} xl={6} xxl={5}>
        <Button className="" variant="outline-primary">Quiz valutazione competenze</Button>
         <Button variant="outline-secondary" className="butt border-0 rounded-circle"><i class="bi bi-plus-lg"></i></Button> 
         <Button variant="outline-secondary" className="butt border-0 rounded-circle"><i class="bi bi-pencil"></i></Button></Col>
          </Row></Card.Header>
          <Card.Body>
            <Row className="d-flex flex-column">
           <Col><Card.Title className="">JavaScript</Card.Title> </Col>
            <Col className="d-flex flex-row"> 
            
          <Col sm={2} md={1}> <Card.Img  src="https://tse4.mm.bing.net/th?id=OIP.Jh62oHE_WaBtTkyWxdSkbwHaHa&pid=Api&P=0&h=180" className="iconaCompetenze mt-2   rounded-circle"/>
            </Col> 
            <Col>
            
            <Card.Text className="text-black ms-3  mt-2">Advanced</Card.Text>
            </Col>
            </Col> 
            </Row>
          </Card.Body>
          <Card.Footer className="text-black bg-white d-flex justify-content-center">Mostra tutte le competenze (1)  <i class="bi bi-arrow-right ms-3 d-flex align-items-center"></i></Card.Footer>
        </Card>
    
    
    </Col>
    <Col sm={2}></Col>
    
        </Row>
)

}

export default Competenze