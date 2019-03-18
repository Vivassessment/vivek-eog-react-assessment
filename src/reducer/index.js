import { getData, putData, errorData } from "../constants";

const initialState = {
    data :[],
    error : '',
    location: {}
};

const GetWheather = (state = initialState, action) => {
  switch (action.type) {
    case getData:
        return {...state,location: action.payload}
    case putData:
    return {...state, data : [...action.payload]}

    case errorData:
        return {...state, error : action.payload}
    default:
      return {...state};
  }
};

export default GetWheather;
