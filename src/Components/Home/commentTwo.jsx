import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Row, Form} from "react-bootstrap";
import './commentTwo.css'

const CommentTwo=()=>{


    
const [comments, setComments]= useState([]);
const [profile, setProfile]= useState()

useEffect(()=>{
    getFetchComment()
    getFetchForImage()
},[])

    



const getFetchComment=()=>{

fetch('https://striveschool-api.herokuapp.com/api/comments/',{



    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjQ4MWY2ZTNkZDAwMTQ5NWU0NTIiLCJpYXQiOjE3MDAxMjkxOTYsImV4cCI6MTcwMTMzODc5Nn0.-ho3c8OR1_bbWX-FSzHVzxKAayTNYGwq-SSw0XXHcoI"
        }
})

.then((res)=>{if(res.ok){return res.json()}else{throw new Error('erroreee')}})
.then((data)=>{
    console.log('data', data)
    setComments(data)
})
.catch((err)=>{console.log('errore', err)})

}


const getFetchForImage=()=>{

    fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
        headers: {
          Authorization:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWQ0ZmM1NWU3ZTAwMThmODNjMGEiLCJpYXQiOjE2OTk4Njc5ODMsImV4cCI6MTcwMTA3NzU4M30.VgwY5-_3HqrYK9L5mB8w_n1YsAqrCrIk6q-aQXvo0wU",
        }
    }
        )
    
    .then((res)=>{if(res.ok){return res.json()}else{throw new Error('erroreee')}})
    .then((info)=>{
        console.log('info', info)
        setProfile(info)
    })
    .catch((err)=>{console.log('errore', err)})
    
    }



return(
    <Container>
        <Row >   

<Card  className="d-flex flex-row ">

{profile && profile.map((singleProfile)=>{
        <Col sm={2}>
      <Card.Img variant="top" src="https://placedog.net/200/200" className="imgUtente rounded-circle mt-3"/>
     </Col>

})


}

    

{comments && comments.map((comment)=>{
     <Col sm={10}>
      <Card.Body key={comment._id}>
        <Row className="d-flex justify-content-between">
            <Col><Card.Title className="NameTitleComment"></Card.Title></Col>
            <Col><Card.Text className="TimeComment">{comment.updateAt}</Card.Text></Col>
 
 
        </Row>
       
        <Card.Text className="TextOfComment">
         {comment.comment}
        </Card.Text>
        <Card.Footer><Button className="buttForCom">Consiglia</Button>|<Button className="buttForCom">Rispondi</Button></Card.Footer>
        {/* in cosiglia volendo mettere animazioni emoticon */}
      </Card.Body>
</Col>
})}
    </Card>





</Row>    
</Container>
)


}

export default CommentTwo




