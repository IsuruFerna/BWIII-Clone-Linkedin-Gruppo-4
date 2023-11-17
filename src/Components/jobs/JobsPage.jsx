import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import {
  ArrowRight,
  Bookmark,
  BookmarkFill,
  Clipboard2Check,
  FilePlayFill,
  GearFill,
  List,
  ListTask,
} from "react-bootstrap-icons";

const JobsPage = ({ searchQuery }) => {
  const [jobsData, setJobsData] = useState([]);
  const geolocalization = navigator.geolocation.getCurrentPosition;
  console.log(geolocalization);
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
      } catch (err) {
        console.log("ERROR: ", err);
      }
    };

    fetchData();
  }, [searchQuery]);
  console.log(jobsData.data);
  //   const div = document.getElementById("myDiv");
  return (
    <>
      <Container>
        <h4 className="my-3">Risultati della ricerca:</h4>
        {jobsData.data && (
          <Row>
            <Col className="col col-3">
              <Card className="shadow">
                <CardBody>
                  <div className="d-flex align-items-center mb-3 pointer">
                    <div className="me-2">
                      <BookmarkFill className="fs-4"></BookmarkFill>
                    </div>
                    <p className="mb-0 fw-semibold ">
                      Le mie offerte di lavoro
                    </p>
                  </div>
                  <div className="d-flex align-items-center mb-3 pointer">
                    <div className="me-2">
                      <ListTask className="fs-4"></ListTask>
                    </div>
                    <p className="mb-0 fw-semibold ">Preferenze</p>
                  </div>
                  <div className="d-flex align-items-center mb-3 pointer">
                    <div className="me-2">
                      <Clipboard2Check className="fs-4"></Clipboard2Check>
                    </div>
                    <p className="mb-0 fw-semibold ">
                      Valutazioni delle competenze
                    </p>
                  </div>
                  <div className="d-flex align-items-center mb-3 pointer">
                    <div className="me-2">
                      <FilePlayFill className="fs-4"></FilePlayFill>
                    </div>
                    <p className="mb-0 fw-semibold ">
                      Indicazioni per chi cerca lavoro
                    </p>
                  </div>
                  <div className="d-flex align-items-center pointer">
                    <div className="me-2">
                      <GearFill className="fs-4"></GearFill>
                    </div>
                    <p className="mb-0 fw-semibold ">
                      Impostazioni di candidatura
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col>
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
                  <Card key={singleJob._id} className="col col-12 mb-3 shadow">
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
                ))}
            </Col>
            <Col className="col col-3 md-block">
              <Card className="shadow">
                <CardBody>
                  <div className="d-flex flex-column  justify-content-center mb-3">
                    <h6 className="mb-0">Disponibile a lavorare</h6>
                    <p className="mb-0">
                      Consigliato in base alle tue attività
                    </p>
                  </div>
                  <div className="d-flex flex-column  justify-content-center mb-3 pointer">
                    <h6 className="mb-0 pointer text-decoration-underline ">
                      Mostra ai recruiter che sei disponibile per nuove
                      opportunità di lavoro
                    </h6>
                  </div>
                  <div className="d-flex flex-column  justify-content-center">
                    <p>
                      Aumenta le probabilità di trovare presto un lavoro con la
                      cornice #OpenToWork: controlli tu chi la vede.
                    </p>
                  </div>
                  <div className="d-flex  pointer fw-semibold grigetto underline-hover">
                    <div>
                      <p>Inizia</p>
                    </div>
                    <div>
                      <ArrowRight className="ms-2"></ArrowRight>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default JobsPage;
