import axios from "axios";
import { GET_UPLOADS } from "../types";

const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;

// @desc        Get all uploads
// @api         /api/v1/zip-content
// @access      public
export const getAllUploads = () => async (dispatch) => {
  try {
    console.log("url ", BACKEND_BASE_URL);
    const response = await axios.get(`${BACKEND_BASE_URL}/api/v1/zip-content`);

    if (response.data.success) {
      dispatch({
        type: GET_UPLOADS,
        payload: response.data.data,
      });
    }
  } catch (err) {
    alert("Error occured, ", err);
  }
};
