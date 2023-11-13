import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./Profile.css";
import { useEffect } from "react";

function Profile() {
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
         })
         .catch((err) => console.log("ERROR: ", err));
   }, []);

   return (
      <Container>
         <Row>
            <Col className="position-relative mx-2 px-0">
               <Image
                  className="profile-pic position-absolute start-0 top-0 mt-5 rounded-circle border border-white border-5 ms-3"
                  src="https://placekitten.com/100"
                  alt="profile picture"
               />
               <div className="profile-bg rounded-top">
                  <Image
                     className="profile-bg rounded-top"
                     src="https://placekitten.com/800"
                  />
               </div>
               <div className="color-2 profile-details rounded-bottom">ds</div>
            </Col>
         </Row>
      </Container>
   );
}

export default Profile;
