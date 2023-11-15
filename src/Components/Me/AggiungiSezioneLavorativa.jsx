import { Form, Card, ListGroup, Modal} from "react-bootstrap"
import CloseButton from 'react-bootstrap/CloseButton';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import {Col, Row} from "react-bootstrap";




const AggiungiSezioneForm=()=>{
    const [open, setOpen] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);
    const [openThree, setOpenThree] = useState(false);
    const [isCardOpen, setCardOpen] = useState(true);



const closing=()=>{
    setCardOpen(false);
    
}


return(
    <Row>
        <Col sm={2}></Col>
        
 <Col sm={8}>

{isCardOpen && (
    
<Card  className="MakeAppearCard mb-5  z-3" >
      <Card.Header className="d-flex justify-content-between py-3">
        <h5 className="h5">Aggiungi al profilo</h5>
          <CloseButton  onClick={closing}/>
          
        </Card.Header>
    
    <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="butAggiungiSezione d-flex justify-content-between"
        
      >
       Sezioni principali
       <i class="bi bi-chevron-down"></i>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
       <p className="text-secondary mx-2"> Iniziamo dalle basi. Se compili queste sezioni, sarà più facile trovarti per i recruiter e le persone che potresti conoscere
        </p>
        <ListGroup>
      <ListGroup.Item className="listSezioneLavorativa">Aggiungi foto del profilo</ListGroup.Item>
      <ListGroup.Item className="listSezioneLavorativa">Aggiungi informazioni</ListGroup.Item>
      <ListGroup.Item className="listSezioneLavorativa">Aggiungi grado di formazione</ListGroup.Item>
      <ListGroup.Item className="listSezioneLavorativa">Aggiungi posizione lavorativa</ListGroup.Item>
      <ListGroup.Item className="listSezioneLavorativa">Aggiungi pausa lavorativa</ListGroup.Item>
      <ListGroup.Item className="listSezioneLavorativa">Aggiungi competenze</ListGroup.Item>
    </ListGroup>
        
        </div>

      </Collapse>


      <Button
        onClick={() => setOpenTwo(!openTwo)}
        aria-controls="example-collapse-text"
        aria-expanded={openTwo}
        className="butAggiungiSezione d-flex justify-content-between"
        
      >
     Sezioni consigliate  
     <i class="bi bi-chevron-down"></i>
      </Button>
      <Collapse in={openTwo}>
        <div id="example-collapse-text">
      <p className="text-secondary mx-2">  Completando queste sezioni aumenterai la tua credibilità e potrai accedere a più opportunità
        </p>
        <ListGroup>
      <ListGroup.Item className="listSezioneLavorativa">Aggiugni elementi in primo piano</ListGroup.Item>
      <ListGroup.Item className="listSezioneLavorativa">Aggiungi licenze e certificazioni</ListGroup.Item>
      <ListGroup.Item className="listSezioneLavorativa">Aggiungi progetti</ListGroup.Item>
      <ListGroup.Item className="listSezioneLavorativa">Aggiungi corsi</ListGroup.Item>
      <ListGroup.Item className="listSezioneLavorativa">Aggiungi referenze</ListGroup.Item>
    </ListGroup>
        
        </div>

      </Collapse>


      
      <Button
        onClick={() => setOpenThree(!openThree)}
        aria-controls="example-collapse-text"
        aria-expanded={openThree}
        className="butAggiungiSezione d-flex justify-content-between"
        
      >
       Altro
       <i class="bi bi-chevron-down"></i>
      </Button>
      <Collapse in={openThree}>
        <div id="example-collapse-text">
     <p className="text-secondary mx-2">   Conferisci ancora più personalità al tuo profilo. Queste sezioni ti aiuteranno a espandere la tua rete e a instaurare più relazioni lavorative.
       </p> 
        <ListGroup>
      <ListGroup.Item className="listSezioneLavorativa">Aggiungi esperienza di volontariato</ListGroup.Item>
      <ListGroup.Item className="listSezioneLavorativa">Aggiungi pubblicazioni</ListGroup.Item>
      <ListGroup.Item className="listSezioneLavorativa">Aggiungi brevetti</ListGroup.Item>
      <ListGroup.Item className="listSezioneLavorativa">Aggiungi riconoscimenti e premi</ListGroup.Item>
      <ListGroup.Item className="listSezioneLavorativa">Aggiungi votazioni esame</ListGroup.Item>
      <ListGroup.Item className="listSezioneLavorativa">Aggiungi lingue</ListGroup.Item>
      <ListGroup.Item className="listSezioneLavorativa">Aggiungi organizzazioni</ListGroup.Item>
      <ListGroup.Item className="listSezioneLavorativa">Aggiungi cause</ListGroup.Item>
      <ListGroup.Item className="listSezioneLavorativa">Aggiungi informazioni di contatto</ListGroup.Item>
    </ListGroup>
        
        </div>

      </Collapse>


    </Card>
    
    )}

 </Col>          
<Col sm={2}></Col>
</Row>
)

}

export default AggiungiSezioneForm