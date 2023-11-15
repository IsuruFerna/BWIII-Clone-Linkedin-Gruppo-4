import { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction, getUserExperience } from "../../redux/actions";
import { Pencil, PlusLg } from "react-bootstrap-icons";

const ModifySingleExperience = () => {
   const dispatch = useDispatch();
   const userFormReduxStore = useSelector((state) => state.user);


   useEffect(() => {
      dispatch(getUserAction());

   }, []);

   console.log("this is user global: ", userFormReduxStore);
   // console.log("user experi: ", userExperience);

   return (
      <>
         {userFormReduxStore.experience &&
            userFormReduxStore.experience.map((element) => {
               return (
                  
               <div className="d-flex justify-content-between">

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
                           {element.startDate} &#8226; {element.endDate}
                        </p>
                        {/* <p className="mt-0 text-dark text-opacity-50 lh-sm">
                           Da Remoto
                        </p> */}
                        <p>{element.description}</p>
                        {/* <p className="fw-semibold">
                           Compatenze:{" "}
                           <small className="experience-tools fw-normal text-dark text-opacity-75">
                              Django &#8226; HTML &#8226; CSS
                           </small>
                        </p> */}
                     </div>

                     </div>
                     
                     <div className="btn-circle">
                              <Pencil className="fs-3" />
                           
                     </div>

                  



                  </div>
               );
            })}
      </>
   );
};

export default ModifySingleExperience;
