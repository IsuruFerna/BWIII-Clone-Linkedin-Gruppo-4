import { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import {
   EDIT_MODEL,
   getUserAction,
   getUserExperience,
} from "../../redux/actions";
import AddExperience from "./AddExperience";
import EditExperience from "./EditExperience";
import { token } from "../../redux/actions";

const SingleExperience = () => {
   const dispatch = useDispatch();
   const userFormReduxStore = useSelector((state) => state.user);
   const reduxExpModel = useSelector((state) => state.user.modelExperience);
   const [formEditData, setEditFormData] = useState(null);
   console.log("getting stored data in experience page", reduxExpModel);
   //    fetch(
   //       `https://striveschool-api.herokuapp.com/api/profile/6551edf8c55e7e0018f83c0e/experiences`,
   //       {
   //          method: "POST",
   //          body: JSON.stringify({
   //             role: "Full Stack Web Developer",
   //             company: "FizzBuzz",
   //             startDate: "2022-06-16",
   //             endDate: "",
   //             description: "Implementing new features",
   //             area: "Milan",
   //          }),
   //          headers: {
   //             "Content-Type": "application/json",
   //             Authorization: token,
   //          },
   //       }
   //    )
   //       .then((response) => {
   //          if (!response.ok) {
   //             throw new Error("user experience did not GET");
   //          }
   //          return response.json();
   //       })
   //       .then((data) => {
   //          console.log("User experience retreaved!", data);
   //       })
   //       .catch((err) => console.log("ERROR", err));
   // };

   useEffect((element) => {
      // console.log("this is to edit", element);
      dispatch(getUserAction());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   console.log("this is user global: ", userFormReduxStore);

   const handleClick = (element) => {
      // console.log("eeedit this", element);

      // fetch data to fill the modal
      fetch(
         `https://striveschool-api.herokuapp.com/api/profile/${element.user}/experiences/${element._id}`,
         {
            headers: {
               Authorization: token,
            },
         }
      )
         .then((res) => {
            if (!res.ok) {
               throw new Error("Related experience did not retreaved!");
            }
            return res.json();
         })
         .then((data) => {
            console.log("related post data retreaved!", data);
            let endDate_ = new Date(data.endDate);
            let startDate_ = new Date(data.startDate);
            setEditFormData({
               area: data.area,
               company: data.company,
               description: data.description,
               endMonth: endDate_.getMonth() + 1,
               endYear: endDate_.getFullYear(),
               startMonth: startDate_.getMonth() + 1,
               startYear: startDate_.getFullYear(),
               role: data.role,
               startDate: data.startDate,
               user: data.user,
               id: data._id,
            });
         })
         .catch((err) => console.log("ERROR", err));

      // set modal form's visibility
      dispatch({
         type: EDIT_MODEL,
         payload: true,
      });
   };

   console.log("modified redux model", reduxExpModel);

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
                        <h4
                           onClick={() => {
                              handleClick(element);
                           }}
                           className="fs-5 mt-2 mb-0"
                        >
                           {element.role}
                        </h4>
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
               );
            })}
         {reduxExpModel && <EditExperience formEditData={formEditData} />}
      </>
   );
};

export default SingleExperience;
