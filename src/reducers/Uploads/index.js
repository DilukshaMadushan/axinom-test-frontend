import { GET_UPLOADS } from "../../actions/types";

const initialState = {
  uploadsList: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_UPLOADS:
      return {
        ...state,
        uploadsList: payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
