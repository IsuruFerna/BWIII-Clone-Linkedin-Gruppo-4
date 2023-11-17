import { HouseDoorFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <Link to="/home" className="nav-link">
      <div className="text-secondary d-flex align-items-center flex-column mx-2 pointer">
        <HouseDoorFill className="fs-5" />
        <h6>Home</h6>
      </div>
    </Link>
  );
};
export default HomeNav;
