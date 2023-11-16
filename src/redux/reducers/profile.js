import {
   EDIT_MODEL,
   GET_USER,
   GET_USER_EXPERIENCE,
   POST_USER_EXPERIENCE,
   MODIFY_EXPERIENCE_MODEL,
} from "../actions";

const initialState = {
   user: null,
   experience: [],
   postExperience: [],
   modelExperience: false,
   modelModifyExp: false,
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

      case POST_USER_EXPERIENCE:
         return {
            ...state,
            postExperience: action.payload,
         };

      case EDIT_MODEL:
         return {
            ...state,
            modelExperience: !state.modelExperience,
         };

      case MODIFY_EXPERIENCE_MODEL:
         return {
            ...state,
            modelModifyExp: !state.modelExperience,
         };

      default:
         return state;
   }
};

export default userReducer;
