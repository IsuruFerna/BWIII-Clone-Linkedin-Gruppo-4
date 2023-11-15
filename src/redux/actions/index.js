export const GET_USER = "GET_USER";
export const GET_USER_EXPERIENCE = "GET_USER_EXPERIENCE";
export const POST_USER_EXPERIENCE = "POST_USER_EXPERIENCE";
export const EDIT_MODEL = "EDIT_MODEL";

export const token =
   "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWRmOGM1NWU3ZTAwMThmODNjMGUiLCJpYXQiOjE2OTk4NjgxNTIsImV4cCI6MTcwMTA3Nzc1Mn0.CBfPd6xhFicg1S-nnU0aS7XGgCdv1KkMH68c4w4c2OY";

export const getUserAction = () => {
   return async (dispatch) => {
      try {
         let response = await fetch(
            `https://striveschool-api.herokuapp.com/api/profile/me`,
            {
               headers: {
                  Authorization: token,
               },
            }
         );
         if (response.ok) {
            let fetchedUser = await response.json();
            dispatch({
               type: GET_USER,
               payload: fetchedUser,
            });

            // if user and user ID is available, call getUserExperience with user._id
            if (fetchedUser && fetchedUser._id) {
               dispatch(getUserExperience(fetchedUser._id));
            }
         } else {
            throw new Error("Error getting user!");
         }
      } catch (error) {
         console.log(error);
      }
   };
};

export const getUserExperience = (userId) => {
   return async (dispatch) => {
      try {
         let response = await fetch(
            `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
            {
               headers: {
                  Authorization: token,
               },
            }
         );
         if (response.ok) {
            let fetchedExperience = await response.json();

            dispatch({
               type: GET_USER_EXPERIENCE,
               payload: fetchedExperience,
            });
         } else {
            throw new Error("Error getting user experience!");
         }
      } catch (error) {
         console.log(error);
      }
   };
};

export const postUserExperience = (userId, formData) => {
   return async (dispatch) => {
      try {
         let response = await fetch(
            `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
            {
               method: "POST",
               body: JSON.stringify(formData),
               headers: {
                  "Content-Type": "application/json",
                  Authorization: token,
               },
            }
         );
         if (response.ok) {
            let postedData = await response.json();

            dispatch({
               type: POST_USER_EXPERIENCE,
               payload: postedData,
            });
            console.log("user experience posted!");
         } else {
            throw new Error("Error posting experience!");
         }
      } catch (error) {
         console.log(error);
      }
   };
};

export const editModel = () => {
   return {
      type: EDIT_MODEL,
   };
};
