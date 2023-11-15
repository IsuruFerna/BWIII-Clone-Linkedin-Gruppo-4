import { useEffect, useState } from "react";
import { Button, Card, Col, ListGroup, Accordion } from "react-bootstrap";
import "./sideBarLeft.css";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import {
   getUserAction,
   getUserExperience,
   postUserExperience,
} from "../../redux/actions";

const SideBarLeftHome = () => {
  const [getProfile, setGetProfile] = useState(null);
  const userFormReduxStore = useSelector((state) => state.user);

  const dispatch = useDispatch();



  useEffect(()=> {
     dispatch(getUserAction());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  // useEffect(() => {
  //   getFetch();
  // }, []);

  console.log("profile: ", userFormReduxStore);

  // const getFetch = () => {
  //   fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
  //     headers: {
  //       Authorization:
  //         "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZGI4NWM1NWU3ZTAwMThmODNiZWMiLCJpYXQiOjE2OTk4NjM0MjksImV4cCI6MTcwMTA3MzAyOX0.AeGut2RX1oz62ERdBCMBJM1Piacgla1-NhTGgCVSkJI",
  //     },
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       } else {
  //         throw new Error("erroreeeeee");
  //       }
  //     })
  //     .then((data) => {
  //       console.log("data", data);
  //       setGetProfile(data);
  //     })
  //     .catch((err) => {
  //       console.log("errore", err);
  //     });
  // };

  return (
    <>
      <Card className="cardSideBar mt-3 p-0">
        <Card.Header className="p-0">
          <Card.Img
            variant="top"
            src="https://placedog.net/900/200"
            className="cover"
          />
          <Card.Img
            variant="top"
            src={userFormReduxStore.user.image}
            className="imgProfile"
          />
        </Card.Header>
        <Card.Body>
          <Card.Title className="title">
            Ti diamo il benvenuto {userFormReduxStore.user.name} !
          </Card.Title>
          <a href="#" className="ancora text-primary">
            Aggiungi una foto
          </a>





          <div className="d-none d-md-block">
            <Card.Text className="d-flex justify-content-md-between mt-3 ">
              <div className="mt-2">
                <p className="text-secondary">Collegamenti</p>
                <p className="fw-bold">Espandi la tua rete</p>
              </div>
              <div className="mt-2">
                <i className="bi bi-person-plus-fill "></i>
              </div>
            </Card.Text>
            <Card.Text>
              <p className="text-secondary mt-2">
                Accedi a strumenti e informazioni in esclusiva
              </p>
              <a href="#" className="ancorDue text-black">
                <i class="bi bi-square-fill me-1"></i>
                Prova Premium gratis
              </a>
            </Card.Text>
            <Card.Text>
              <p>
                <i class="bi bi-bookmark-fill"></i> I miei elementi{" "}
              </p>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>

      <div className="d-none d-md-block">
      <ListGroup className="my-3">
        <ListGroup.Item className="border-0"> 
          <a className="ancoraTre">Gruppi</a>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between border-0">
          <a className="ancoraTre mt-2">Eventi</a>
          <Button
            variant="outline-secondary"
            className=" border-0 rounded-circle"
          >
            <i className="bi bi-plus-lg"></i>
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <a className="ancoraTre">Hashtag seguiti</a>
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex justify-content-center">
          <Button variant="outline-secondary" className="border-0 ">Scopri di più</Button>
        </ListGroup.Item>
      </ListGroup>

      </div>


<div className="d-md-none d-block">
          <Accordion className="mb-3" defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0" className=" mt-2 ">
        <Accordion.Header className="d-flex justify-content-center">Vedi altro</Accordion.Header>
        <Accordion.Body className="bg-white">
  
        
            <Card.Text className="d-flex justify-content-md-between mt-3 ">
              <div className="mt-2">
                <p className="text-secondary">Collegamenti</p>
                <p className="fw-bold">Espandi la tua rete</p>
              </div>
              <div className="mt-2">
                <i className="bi bi-person-plus-fill "></i>
              </div>
            </Card.Text>
            <Card.Text>
              <p className="text-secondary mt-2">
                Accedi a strumenti e informazioni in esclusiva
              </p>
              <a href="#" className="ancorDue text-black">
                <i class="bi bi-square-fill me-1"></i>
                Prova Premium gratis
              </a>
            </Card.Text>
            <Card.Text>
              <p>
                <i class="bi bi-bookmark-fill"></i> I miei elementi{" "}
              </p>
            </Card.Text>
        

      
      <ListGroup className="my-3">
        <ListGroup.Item className="border-0"> 
          <a className="ancoraTre">Gruppi</a>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between border-0">
          <a className="ancoraTre mt-2">Eventi</a>
          <Button
            variant="outline-secondary"
            className=" border-0 rounded-circle"
          >
            <i className="bi bi-plus-lg"></i>
          </Button>
        </ListGroup.Item>
        <ListGroup.Item className="border-start-0 border-end-0">
          <a className="ancoraTre">Hashtag seguiti</a>
        </ListGroup.Item>
        <ListGroup.Item className=" d-flex justify-content-center">
          <Button variant="outline-secondary" className="border-0 ">Scopri di più</Button>
        </ListGroup.Item>
      </ListGroup>

   




        </Accordion.Body>
      </Accordion.Item>

    </Accordion>


   </div>






    </>
  );
};

export default SideBarLeftHome;
