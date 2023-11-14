import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SinglePerson from "./SinglePerson";
import PublicProfile from "./PublicProfile";

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
    <>
      <Container fluid>
        <PublicProfile />
      </Container>
      <Container fluid className="border rounded">
        <div className="d-flex flex-column">
          <h5 className="fw-bold smaller">Persone che potresti conoscere</h5>
          <span className="color-secondary extrasmall">
            Dalla tua scuola o università
          </span>
        </div>
        <div>
          {persons
            .filter((allPersons, i) => i < 10)
            .map((singlePerson) => {
              return <SinglePerson person={singlePerson} />;
            })}
        </div>
      </Container>
    </>
  );
};
export default PotrestiConoscere;
