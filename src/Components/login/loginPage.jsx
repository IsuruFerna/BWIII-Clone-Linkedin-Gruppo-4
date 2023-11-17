import { Button, Col, Container, Form, InputGroup, Navbar, Row } from 'react-bootstrap'
import './loginPage.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Login=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Navigate= useNavigate()
  
    const handleLogin = (event) => {
      event.preventDefault();
  
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

      if(email=== 'marco@outlook.it' && password=== 'isuruilrapinatore'){Navigate('/')}
  
    };

return(
<Container className="containerLogin ">
    <Row>
        <Col sm={2}></Col>
        <Col sm={8}></Col>
    <Navbar className="">
    <Container>
      <Navbar.Brand href="#home"><Button className='buttLogo'><img className="logoLogin" src="https://tse3.mm.bing.net/th?id=OIP.7y88DqLREW8ApbxWuMBmzgHaEo&pid=Api&P=0&h=180" alt="logo" /></Button></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
        <Button className='rounded-pill me-2' variant="light">Iscriviti ora</Button>
        </Navbar.Text>
        <Navbar.Text>
          <Button className='rounded-pill me-5 pt-2 pb-2' variant="outline-primary" >accedi</Button>
        </Navbar.Text>  
      </Navbar.Collapse>
    </Container>
  </Navbar>

<Row className='my-5'>
    <Col sm={2}></Col>
<Col sm={4}>
<h1 className='titoloLogin'>Ti diamo il benvenuto nella tua community professionale</h1>

<Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email o telefono</Form.Label>
        <Form.Control className='formInput' type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Label>Password</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control
        className='formInput border-end-0'
          aria-describedby="basic-addon2"
          value={password} onChange={(e) => setPassword(e.target.value)}
          type='password'
        />
        <Button className='buttInput text-primary' variant="outline-secondary" id="button-addon2">
          Mostra
        </Button>
      </InputGroup>
      <Form.Text>
        <a href="#" className='fw-bold mb-5'>Hai dimenticato la password?</a>
      </Form.Text>
      <Row className='mt-5'><Button variant="primary" className='rounded-pill pt-2 pb-2 fw-bold bg-primary' type="submit">Accedi</Button></Row>

    </Form>
   <Row><p className='d-flex justify-content-center mt-3'>oppure</p></Row> 
   <Row><p className='paragLogin'>Cliccando su “Continua”, accetti  <a className='ancoraLogin' href=" #">il Contratto di licenza</a> , <a className='ancoraLogin'  href="#">l’Informativa sulla privacy</a>  e <a className='ancoraLogin' href="#">l’Informativa sui cookie</a>  di LinkedIn.</p></Row> 
   <Row><Button className='col-lg-6 col-md-9 col-sm-7 my-3 rounded-pill border-secondary text-secondary'><img className='logoGoogle' src='https://tse4.mm.bing.net/th?id=OIP.CgKRXkxzJnLtDG-qapK4owHaHa&pid=Api&P=0&h=180'></img>Continue with Google</Button></Row>
   <Row><Button  className='rounded-pill pt-2 pb-2  border-black bg-white text-black'>Non hai un account LinkedIn? Iscriviti ora</Button></Row>

</Col>
</Row>


  <Col sm={6}></Col>
  </Row>
</Container>

)


}

export default Login