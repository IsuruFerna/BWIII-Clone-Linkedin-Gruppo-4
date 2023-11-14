import { GET_USER, GET_USER_EXPERIENCE } from "../actions";

const initialState = {
   user: null,
   experience: [],
};

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_USER:
         return {
            ...state,
            user: action.payload,
         };

      case GET_USER_EXPERIENCE:
         return {
            ...state,
            experience: action.payload,
         };

      default:
         return state;
   }
};

export default userReducer;
