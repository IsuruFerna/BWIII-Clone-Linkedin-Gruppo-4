import { BriefcaseFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <Link to="/jobs" className="nav-link">
      <div className="text-secondary d-flex align-items-center flex-column mx-2 pointer">
        <BriefcaseFill className="fs-5" />
        <h6>Lavoro</h6>
      </div>
    </Link>
  );
};
export default Jobs;
