import { Button, Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap"
import './NotFound.css'


const NotFoundPage=()=>{

return(

    <Container className="containerNotFound ">

<Row className="">
    
<Col sm={6} className="w-50">
<img className="logo" src="https://tse3.mm.bing.net/th?id=OIP.7y88DqLREW8ApbxWuMBmzgHaEo&pid=Api&P=0&h=180" alt="logo" />
</Col>
<Col sm={6} className="w-50 d-flex justify-content-end">
<Dropdown data-bs-theme="white" className="d-flex justify-content-end col-3">
                  <Dropdown.Toggle className="buttLanguage  me-4 rounded-0 bg-white text-secondary border border-black ">
                     Italiano (Italiano)
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1">français</Dropdown.Item>
                     <Dropdown.Item href="#/action-2">English</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Deutsch</Dropdown.Item>

                     <Dropdown.Item href="#/action-4">Sardo</Dropdown.Item>
                     <Dropdown.Item href="#/action-5">Español</Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
</Col>

</Row>

<Row>
<Col sm={2}></Col>
<Col sm={8}>
<h1 className="firstWrite me-5 mt-5 d-flex justify-content-center">Page not found</h1>

<h3 className="secondWrite mt-4  d-flex justify-content-center">
Uh oh, we can’t seem to find the page you’re looking for. Try going back to the previous page or see our Help Center for more information
</h3>



</Col>
<Col sm={2}></Col>
</Row>
<Row>
<Col sm={5}  xl={5}></Col>
<Col sm={3} xl={2}><Button className="buttTwoNotFound rounded-0" variant="outline-primary">Go to your feed</Button></Col>
<Col sm={4}  xl={5}></Col>

</Row>



<Row className=" mt-5 d-flex align-items-end">

   <Col sm={2} ><img className="logoFooter" src="https://tse3.mm.bing.net/th?id=OIP.7y88DqLREW8ApbxWuMBmzgHaEo&pid=Api&P=0&h=180" alt="logo"/> <a href="#" className="ancorNotFound">© 2023</a></Col> 
   <Col sm={2} ><a href="#" className="ancorNotFound">User Agreement</a></Col> 
   <Col sm={2}><a href="#" className="ancorNotFound">Privacy Policy</a></Col> 
   <Col sm={2}><a href="#" className="ancorNotFound">Community Guidelines</a></Col> 
   <Col sm={2}><a href="#" className="ancorNotFound">Cookie Policy</a></Col> 
   <Col sm={2}><a href="#" className="ancorNotFound">Copyright Policy</a></Col> 
  
</Row>




    </Container>
)

}

export default NotFoundPage