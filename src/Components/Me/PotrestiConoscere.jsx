import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SinglePerson from "./SinglePerson";
const PotrestiConoscere = () => {
  const [persons, setPersons] = useState([]);
  const getPersons = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile`, {
      headers: {
        Authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWQ0ZmM1NWU3ZTAwMThmODNjMGEiLCJpYXQiOjE2OTk4Njc5ODMsImV4cCI6MTcwMTA3NzU4M30.VgwY5-_3HqrYK9L5mB8w_n1YsAqrCrIk6q-aQXvo0wU",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error while getting the datas");
        }
      })
      .then((datas) => {
        console.log(datas);
        setPersons(datas);
      })
      .catch((err) => console.log("Error: ", err));
  };
  useEffect(() => {
    getPersons();
  }, []);
  return (
    <div className="d-none d-lg-flex flex-column mb-5">
      <Container
        fluid
        className="border rounded border-secondary mb-3 bg-white"
      ></Container>
      <Container
        fluid
        className="border rounded border-secondary mb-3 bg-white"
      >
        <div className="d-flex flex-column">
          <h5 className="fw-bold smaller my-2 fs-6">
            Altri profili consultati
          </h5>
        </div>
        <div>
          {persons
            .filter((allPersons, i) => i > 10 && i < 16)
            .map((singlePerson) => {
              return (
                <div key={singlePerson._id}>
                  <SinglePerson person={singlePerson} />
                </div>
              );
            })}
        </div>
      </Container>
      <Container fluid className="border rounded border-secondary bg-white">
        <div className="d-flex flex-column my-2">
          <h5 className="fw-bold smaller fs-6">
            Persone che potresti conoscere
          </h5>
          <span className="color-secondary extrasmall">
            Dalla tua scuola o università
          </span>
        </div>
        <div>
          {persons
            .filter((allPersons, i) => i < 8)
            .map((singlePerson) => {
              return (
                <div key={singlePerson._id}>
                  <SinglePerson person={singlePerson} />;
                </div>
              );
            })}
        </div>
      </Container>
    </div>
  );
};
export default PotrestiConoscere;
