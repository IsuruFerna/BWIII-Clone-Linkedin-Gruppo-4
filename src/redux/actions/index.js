export const GET_USER = "GET_USER";

export const getUserAction = () => {
   return async (dispatch) => {
      try {
         let response = await fetch(
            `https://striveschool-api.herokuapp.com/api/profile/me`,
            {
               headers: {
                  Authorization:
                     "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWRmOGM1NWU3ZTAwMThmODNjMGUiLCJpYXQiOjE2OTk4NjgxNTIsImV4cCI6MTcwMTA3Nzc1Mn0.CBfPd6xhFicg1S-nnU0aS7XGgCdv1KkMH68c4w4c2OY",
               },
            }
         );
         if (response.ok) {
            let fetchedUser = await response.json();
            dispatch({
               type: GET_USER,
               payload: fetchedUser,
            });
         } else {
            throw new Error("Error getting user!");
         }
      } catch (error) {
         console.log(error);
      }
   };
};
