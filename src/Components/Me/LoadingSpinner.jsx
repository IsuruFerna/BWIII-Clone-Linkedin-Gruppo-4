import Spinner from "react-bootstrap/Spinner";

function LoadingSpinner() {
   return (
      <div className="w-100 profile-loader d-flex align-items-center justify-content-center">
         <Spinner animation="border" variant="info" role="status">
            <span className="visually-hidden">Loading...</span>
         </Spinner>
      </div>
   );
}

export default LoadingSpinner;
