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
    <div className="d-flex flex-column mb-5">
      <Container
        fluid
        className="border bg-white shadow rounded mb-3 mx-1 h-100 d-flex flex-column"
      >
        <div className="mt-4">
          <h5 className="fw-bold smaller mb-4 fs-6">
            Altri profili consultati
          </h5>
        </div>
        <div className="flex-grow-1">
          {persons
            .filter((allPersons, i) => i > 16 && i < 27)
            .map((singlePerson) => {
              return (
                <div key={singlePerson._id}>
                  <SinglePerson person={singlePerson} />
                </div>
              );
            })}
        </div>
      </Container>
      <Container fluid className="border bg-white mx-1 shadow rounded">
        <div className="d-flex flex-column mt-4">
          <h5 className="fw-bold smaller fs-6 mb-1">
            Persone che potresti conoscere
          </h5>
          <span className="color-secondary extrasmall mb-1">
            Dalla tua scuola o università
          </span>
        </div>
        <div>
          {persons
            .filter((allPersons, i) => i < 10)
            .map((singlePerson) => {
              return (
                <div key={singlePerson._id}>
                  <SinglePerson person={singlePerson} />
                </div>
              );
            })}
        </div>
      </Container>
    </div>
  );
};
export default PotrestiConoscere;
