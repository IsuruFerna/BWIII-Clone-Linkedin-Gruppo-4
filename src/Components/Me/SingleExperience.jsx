import { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction, getUserExperience } from "../../redux/actions";

const SingleExperience = () => {
  const dispatch = useDispatch();
  const userFormReduxStore = useSelector((state) => state.user);

  // const token =
  //    "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWRmOGM1NWU3ZTAwMThmODNjMGUiLCJpYXQiOjE2OTk4NjgxNTIsImV4cCI6MTcwMTA3Nzc1Mn0.CBfPd6xhFicg1S-nnU0aS7XGgCdv1KkMH68c4w4c2OY";

  // const fetchGet = (token, id) => {
  //    fetch(
  //       `https://striveschool-api.herokuapp.com/api/profile/6551edf8c55e7e0018f83c0e/experiences`,
  //       {
  //          headers: {
  //             Authorization:
  //                "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWRmOGM1NWU3ZTAwMThmODNjMGUiLCJpYXQiOjE2OTk4NjgxNTIsImV4cCI6MTcwMTA3Nzc1Mn0.CBfPd6xhFicg1S-nnU0aS7XGgCdv1KkMH68c4w4c2OY",
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
  //          setUserExperience(data);
  //       })
  //       .catch((err) => console.log("ERROR", err));
  // };

  // const post = (token) => {
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

  useEffect(() => {
    dispatch(getUserAction());
    // if (userFormReduxStore) {
    //    setUserID(userFormReduxStore._id);
    // }
    // fetchGet(token);

    // post(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("this is user global: ", userFormReduxStore);
  // console.log("user experi: ", userExperience);

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
                      {element.endDate ? element.endDate.slice(0, 10) : ""}
                    </div>
                  ) : (
                    ""
                  )}
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
    </>
  );
};

export default SingleExperience;
