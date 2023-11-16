import { useEffect } from "react";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../../redux/actions";

const SingleExperience = () => {
   const dispatch = useDispatch();
   const userFormReduxStore = useSelector((state) => state.user);

   useEffect(() => {
      dispatch(getUserAction());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <>
         {userFormReduxStore.experience &&
            userFormReduxStore.experience.map((element) => {
               return (
                  <div key={element._id} className="d-flex">
                     <Image
                        className="logo-experience mt-2 me-2"
                        src="https://placekitten.com/100"
                        alt="logo-agenzi"
                     />
                     <div>
                        <h4 className="fs-5 mt-2 mb-0">{element.role}</h4>
                        <p className="mb-0">{element.company}</p>
                        <p className="mb-0 text-dark text-opacity-50 lh-sm">
                           {element.startDate ? (
                              <div>
                                 {element.startDate.slice(0, 10)} -
                                 {element.endDate
                                    ? element.endDate.slice(0, 10)
                                    : ""}
                              </div>
                           ) : (
                              ""
                           )}
                        </p>

                        <p>{element.description}</p>
                     </div>
                  </div>
               );
            })}
      </>
   );
};

export default SingleExperience;
