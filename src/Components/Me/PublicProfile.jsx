import { Container } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import "./PublicProfile.css";
import { Link } from "react-router-dom";

const PublicProfile = () => {
  return (
    <Container
      fluid
      className="mb-3 p-3 d-flex mx-1 flex-column border shadow rounded bg-white"
    >
      <div>
        <div className="fw-bold d-flex align-items-center  justify-content-between">
          <div>Lingua del profilo</div>
          <div>
            <Link to="#" className="btn-circle">
              <Pencil className="fs-3 text-secondary" />
            </Link>
          </div>
        </div>
        <div>
          <div className="text-secondary">Italiano</div>
        </div>
        <hr />
        <div className="fw-bold d-flex justify-content-between mt-2">
          <div>Public profile & Url</div>
          <Link to="#" className="btn-circle">
            <Pencil className="fs-3 text-secondary" />
          </Link>
        </div>
        <div
          className="text-secondary smaller"
          style={{ "word-break": "break-all" }}
        >
          fetchper avere email di me
        </div>
      </div>
    </Container>
  );
};

export default PublicProfile;
