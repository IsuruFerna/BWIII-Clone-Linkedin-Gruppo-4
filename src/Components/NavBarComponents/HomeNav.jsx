import { HouseDoorFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <div className="text-secondary justify-content-center align-items-center d-flex flex-column pointer mx-1">
      <HouseDoorFill className="fs-5" />
      <Link to="/home" className="nav-link">
        <h6>Home</h6>
      </Link>
    </div>
  );
};
export default HomeNav;
