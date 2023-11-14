import { Row,Col, Card, Button } from "react-bootstrap"

const Competenze=()=>{

return(



    
    <Card className="my-5">
        <Card.Header className="container-fluid bg-white mt-1">
        <Row className="d-flex justify-content-between ">
        <Col  sm={7} md={5} lg={4} xl={4} xxl={5}> <h5> Competenze</h5></Col>
        <Col  sm={12} md={10} lg={7} xl={8} xxl={7}>
        <Button className="" variant="outline-primary">Quiz valutazione competenze</Button>
         <Button variant="outline-secondary" className="butt border-0 rounded-circle"><i class="bi bi-plus-lg"></i></Button> 
         <Button variant="outline-secondary" className="butt border-0 rounded-circle"><i class="bi bi-pencil"></i></Button></Col>
          </Row></Card.Header>
          <Card.Body>
            <Row className="d-flex flex-column">
           <Col><Card.Title className="">JavaScript</Card.Title> </Col>
            <Col className="d-flex flex-row"> 
            
          <Col sm={3} md={2}> <Card.Img  src="https://tse4.mm.bing.net/th?id=OIP.Jh62oHE_WaBtTkyWxdSkbwHaHa&pid=Api&P=0&h=180" className="iconaCompetenze mt-2   rounded-circle"/>
            </Col> 
            <Col>
            
            <Card.Text className="text-black ms-3  mt-2">Advanced</Card.Text>
            </Col>
            </Col> 
            </Row>
          </Card.Body>
          <Card.Footer className="text-black bg-white d-flex justify-content-center">Mostra tutte le competenze (1)  <i class="bi bi-arrow-right ms-3 d-flex align-items-center"></i></Card.Footer>
        </Card>


)

}

export default Competenze