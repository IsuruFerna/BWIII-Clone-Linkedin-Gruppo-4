import {
   ADD_EXP_BTN,
   EDIT_MODEL,
   GET_USER,
   GET_USER_EXPERIENCE,
   POST_USER_EXPERIENCE,
} from "../actions";

const initialState = {
   user: null,
   experience: [],
   postExperience: [],
   modelExperience: false,
   addBtnStatus: false,
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

      case ADD_EXP_BTN:
         return {
            ...state,
            modelExperience: !state.modelExperience,
         };

      default:
         return state;
   }
};

export default userReducer;
