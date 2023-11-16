import { useEffect, useState } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
// import ReactHtmlParser from "react-html-parser";

const JobsPage = ({ searchQuery }) => {
  const [jobsData, setJobsData] = useState([]);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [location, setLocation] = useState([]);
  const [isLocationReady, setIsLocationReady] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setIsLocationReady(true);
    });
  }, []);
  // console.log(latitude);
  // console.log(longitude);
  // console.log(location.address.country);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://strive-benchmark.herokuapp.com/api/jobs?search=${searchQuery}`,
          {}
        );

        if (!response.ok) {
          throw new Error("Data retrieving error!");
        }

        const data = await response.json();
        setJobsData(data);
        console.log(data);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    };

    fetchData();
  }, [searchQuery]);

  useEffect(() => {
    if (isLocationReady) {
      const fetchGeolocalization = async () => {
        try {
          const response = await fetch(
            `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`,
            {}
          );

          if (!response.ok) {
            throw new Error("Data retrieving error!");
          }

          const data = await response.json();
          setLocation(data);
        } catch (err) {
          console.log("ERROR: ", err);
        }
      };

      fetchGeolocalization();
    }
  }, [isLocationReady, latitude, longitude]);
  //   const div = document.getElementById("myDiv");
  return (
    <>
      <Container>
        <h4 className="my-3">Risultati della ricerca:</h4>
        {jobsData.data && (
          <Row>
            {jobsData.data
              .filter(
                (allTheJobs) =>
                  allTheJobs.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  allTheJobs.company_name
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  allTheJobs.category
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  allTheJobs.candidate_required_location
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  allTheJobs.job_type
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
              )
              .map((singleJob) => (
                <Col key={singleJob._id} className="col col-12 mb-3">
                  {" "}
                  <Card>
                    {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                    <Card.Body>
                      <Card.Title>
                        <b>{singleJob.title}</b>
                      </Card.Title>
                      <Card.Text>
                        {/* <div id="myDiv"></div> */}
                        {/* {singleJob.description} */}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <b>{singleJob.company_name}</b>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-between ">
                        {" "}
                        <div>Job type: {singleJob.job_type}</div>
                        <div>
                          Required location:{" "}
                          {singleJob.candidate_required_location}
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Publication date:{" "}
                        {new Date(singleJob.publication_date).toLocaleString(
                          "it-IT"
                        )}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default JobsPage;
