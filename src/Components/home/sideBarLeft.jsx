import { useEffect, useState } from "react"
import {Button, Card, Col} from 'react-bootstrap';
import './sideBarLeft.css';







const SideBarLeftHome=()=>{

const [getProfile, setGetProfile]= useState(null)

useEffect(()=>{ getFetch()},[])


const getFetch=()=>{

fetch('https://striveschool-api.herokuapp.com/api/profile/me', {

headers: {
    Authorization:'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZGI4NWM1NWU3ZTAwMThmODNiZWMiLCJpYXQiOjE2OTk4NjM0MjksImV4cCI6MTcwMTA3MzAyOX0.AeGut2RX1oz62ERdBCMBJM1Piacgla1-NhTGgCVSkJI'
   
}

})
.then((res)=>{if(res.ok){return res.json()} else {throw new Error('erroreeeeee')}})
.then((data)=>{
console.log('data', data)
setGetProfile(data)

})
.catch((err)=>{console.log('errore', err)})

}


return(

     

   

    <Card  className="mt-3 p-0">
       <Card.Header >
      <Card.Img variant="top" src='https://placedog.net/900/200' />
      <Card.Img variant="top" src={getProfile.image} className="imgProfile"/>
      </Card.Header> 
      <Card.Body>
        <Card.Title>Ti diamo il benvenuto {getProfile.name}!</Card.Title>
        <a href="#">Aggiungi una foto</a>
        <Card.Text>
          <p>Collegamenti</p>
          <p>Espandi la tua rete</p>
          <i className="bi bi-person-plus-fill"></i>
        </Card.Text>
        <Card.Text>
       <p>Accedi a strumenti e informazioni in esclusiva</p>
       <a href="#">
       <i class="bi bi-square-fill"></i>
       Prova Premium gratis
       </a>
        </Card.Text>
        <Card.Text>
            <p><i class="bi bi-bookmark-fill"></i> I miei elementi </p>
            </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>




)




}

export default SideBarLeftHome