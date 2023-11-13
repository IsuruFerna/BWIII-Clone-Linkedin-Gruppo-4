import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./Profile.css";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

function Profile() {
   const [userData, setUserData] = useState(null);

   useEffect(() => {
      fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
         headers: {
            Authorization:
               "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWRmOGM1NWU3ZTAwMThmODNjMGUiLCJpYXQiOjE2OTk4NjgxNTIsImV4cCI6MTcwMTA3Nzc1Mn0.CBfPd6xhFicg1S-nnU0aS7XGgCdv1KkMH68c4w4c2OY",
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

   return (
      <Container>
         <Row>
            <Col className="position-relative mx-2 px-0">
               {!userData && <LoadingSpinner />}
               {userData && (
                  <>
                     <Image
                        className="profile-pic position-absolute start-0 top-0 mt-5 rounded-circle border border-white border-5 ms-3"
                        src={userData.image}
                        alt="profile picture"
                     />
                     <div className="profile-cover rounded-top">
                        <Image
                           className="profile-cover rounded-top"
                           src="https://placekitten.com/800"
                           alt="profile-cover"
                        />
                     </div>
                     <div className="color-2 profile-details rounded-bottom">
                        <div className="ps-3 pt-5">
                           <h5 className="mb-0">
                              {userData.name} {userData.surname}
                           </h5>
                           <p className="mb-0 text-secondary">
                              {userData.title}
                           </p>

                           <p className="mt-0 fs-7">
                              {userData.area} &#x2022;{" "}
                              <a
                                 className="fw-bold link-underline link-underline-opacity-0"
                                 href="#"
                              >
                                 Informazioni di contatto
                              </a>
                           </p>
                           <p className="fs-7 fw-bold  ">
                              <a
                                 className="link-underline link-underline-opacity-0"
                                 href="#"
                              >
                                 30 collegamenti
                              </a>
                           </p>
                        </div>
                     </div>
                  </>
               )}
            </Col>
         </Row>
      </Container>
   );
}

export default Profile;
