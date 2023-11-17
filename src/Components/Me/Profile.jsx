import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./Profile.css";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import Button from "react-bootstrap/Button";
// import Carousel from "react-bootstrap/Carousel";
// import Card from "react-bootstrap/Card";
import ContactInfo from "./ContactInfo";
import DetailsCard from "./DetailsCard";
import { Dropdown, DropdownToggle } from "react-bootstrap";
import {
  Arrow90degRight,
  Download,
  InfoSquareFill,
} from "react-bootstrap-icons";
import "./Profilestyle.css";
// import AggiungiEsperienza from "./AggiungiEsperienza";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserAction,
  //   getUserExperience,
  postUserExperience,
} from "../../redux/actions";
// import AggiungiSezioneForm from "./AggiungiSezioneLavorativa";
// import { CloseButton } from "react-bootstrap";
import AggiungiSezioneDelProfilo from "./AggiungiSezioneDelProfilo";
import AddExperience from "./AddExperience";

function Profile() {
  const [showVisibleAddExperience, setShowVisibleAddExperience] =
    useState(false);

  const [addExperienceShow, setAddExperienceShow] = useState(false);
  const [userData, setUserData] = useState(null);
  //  const [showInfomations, setShowInfomations] = useState(false);
  // const [modalShow, setModalShow] = useState(false);
  const [showCard, setShowCard] = useState(false);
  // const [addProfileShow, setAddProfileShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [showContactInfo, setShowContactInfo] = useState(false);
  const [showAddProfileModal, setShowAddProfileModal] = useState(false);
  const [showAddExperience, setShowAddExperience] = useState(false);
  const [showAddSection, setShowAddSection] = useState(false);

  //  const showMoreInfo = () => {
  //     setShowInfomations(!showInfomations);
  //  };

  const handleAddExperienceClick = () => {
    setAddExperienceShow(true);
    // onHide();
  };

  const handleButtonClick = () => {
    setShowCard(true);
  };

  const closeCard = () => {
    setShowCard(false);
  };

  useEffect(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
      headers: {
        Authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWQ0ZmM1NWU3ZTAwMThmODNjMGEiLCJpYXQiOjE2OTk4Njc5ODMsImV4cCI6MTcwMTA3NzU4M30.VgwY5-_3HqrYK9L5mB8w_n1YsAqrCrIk6q-aQXvo0wU",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Data retreaving error!");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data retreaved fine!", data);
        setUserData(data);
      })
      .catch((err) => console.log("ERROR: ", err));
  }, []);

  // get user data from the redux store
  const userFormReduxStore = useSelector((state) => state.user);

  const dispatch = useDispatch();

  // handle user experience post
  const postTest = () => {
    console.log("clicked on post");
    const sampleObj = {
      role: "Full Stack Web Developer",
      company: "FizzBuzz",
      startDate: "2022-06-16",
      endDate: "2023-06-16", // può essere null
      description: "Implementing new features",
      area: "Milan",
    };

    // check wheather the data is loaded to the store
    // post user experience
    // retreve updated user experience
    if (userFormReduxStore.user) {
      const userId = userFormReduxStore.user._id;
      dispatch(postUserExperience(userId, sampleObj));
      dispatch(getUserAction());
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col className="position-relative mx-2 px-0">
          {!userData && <LoadingSpinner />}
          {userData && (
            <div className="border rounded shadow">
              {show && (
                <ContactInfo
                  show={show}
                  handleClose={handleClose}
                  mail={userData.email}
                  user={"placeholder"}
                  name={userData.name}
                  surname={userData.surname}
                />
              )}
              <Image
                className="profile-pic position-absolute start-0 top-0 mt-5 rounded-circle border border-white border-5 ms-3"
                src={userData.image}
                alt="profile picture"
              />
              <div className="profile-cover rounded-top">
                <Image
                  className="profile-cover rounded-top w-100"
                  src="https://placedog.net/1000/200"
                  alt="profile-cover"
                />
              </div>

              <div className="profile-details rounded-bottom bg-white ">
                <div className="ps-3 pt-5">
                  <h5 className="mb-0">
                    {userData.name} {userData.surname}
                  </h5>
                  <p className="mb-0 text-secondary">{userData.title}</p>

                  <p className="mt-0 fs-7">
                    {userData.area} &#x2022;{" "}
                    <span
                      onClick={handleShow}
                      className="fw-bold link-small me-2"
                    >
                      Informazioni di contatto
                    </span>
                  </p>
                  <p className="fs-7 fw-bold mb-2 link-small">
                    30 collegamenti
                  </p>
                </div>
                <div className="d-flex flex-wrap  px-3">
                  <Button
                    onClick={postTest}
                    className="rounded-pill me-2 my-hover mb-2 "
                    variant="primary"
                    size="sm"
                  >
                    <b>Disponobile per</b>
                  </Button>
                  {/* <Button
                    className="rounded-5 me-2"
                    variant="outline-primary"
                    onClick={() => setShowAddProfileModal(true)}
                  >
                    Aggiungi sezione del profilo
                  </Button> */}
                  <Button
                    size="sm"
                    className="post"
                    variant="rounded-pill me-2 mb-2"
                    onClick={() => setShowAddProfileModal(true)}
                  >
                    <b> Aggiungi sezione del profilo</b>
                  </Button>
                  {/* <AggiungiEsperienza
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  ></AggiungiEsperienza> */}

                  <div>
                    <Dropdown className="d-flex justify-content-center">
                      <DropdownToggle
                        // variant="outline-secondary"
                        id="dropdown-basic"
                        className="rounded-pill border-2px grigetto personal-button"
                        size="sm"
                      >
                        <b> Altro</b>
                      </DropdownToggle>
                      <Dropdown.Menu>
                        <div className="d-flex flex-column ">
                          <Dropdown.Item href="#/action-1">
                            <Arrow90degRight className="me-2" />
                            Invia il profilo in un messaggio
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            <Download className="me-2" />
                            Salva come PDF
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            <InfoSquareFill className="me-2" />
                            Informazioni su questo profilo
                          </Dropdown.Item>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  {/* <Button onClick={handleButtonClick}>
                    {showCard && (
                      <div className="overlay">
                        <AggiungiSezioneForm />
                      </div>
                    )}
                    <div
                      className={showCard ? "content blurred" : "content"}
                    ></div>
                    Aggiungi sezione del profilo
                  </Button> */}
                </div>
                <div className="py-3 px-3">
                  {/* substitute carosel with models */}
                  {/* make full customized */}
                  <DetailsCard handleShow={handleShow} />
                </div>
              </div>
            </div>
          )}
          <AggiungiSezioneDelProfilo
            show={showAddProfileModal}
            onHide={() => setShowAddProfileModal(false)}
            // handleAddExperienceClick={handleAddExperienceClick}
            // setAddExperienceShow={setAddExperienceShow}
            setShowAddProfileModal={setShowAddProfileModal}
            setShowVisibleAddExperience={setShowVisibleAddExperience}
          ></AggiungiSezioneDelProfilo>
          {showVisibleAddExperience && (
            <AddExperience
              setShowVisibleAddExperience={setShowVisibleAddExperience}
            ></AddExperience>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
