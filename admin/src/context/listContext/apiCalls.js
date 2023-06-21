import axios from "axios";
import { 
  createListFailure, 
  createListStart, 
  createListSuccess,
  deleteListFailure, 
  deleteListStart, 
  deleteListSuccess, 
  getListsFailure, 
  getListsStart, 
  getListsSuccess 
} from "./ListActions";
//getmovies
export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("/Lists",{
      headers: {
        // token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Njk5ZjIzOTliZDUwYjJhMWFmMmFmYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4Njk5MzE4NiwiZXhwIjoxNjg3NDI1MTg2fQ.IGlYCQNzbghpjkT8WwcnyUrsEemNPXqSFxVYh4OfUkE",
    },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure);
  }
};

//createList
export const createList = async (list,dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post("/lists/",list,{
      headers: {
        // token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Njk5ZjIzOTliZDUwYjJhMWFmMmFmYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4Njk5MzE4NiwiZXhwIjoxNjg3NDI1MTg2fQ.IGlYCQNzbghpjkT8WwcnyUrsEemNPXqSFxVYh4OfUkE",
    },
    });
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};

//delete
export const deleteList = async (id,dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete("/lists/"+id,{
      headers: {
        // token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Njk5ZjIzOTliZDUwYjJhMWFmMmFmYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4Njk5MzE4NiwiZXhwIjoxNjg3NDI1MTg2fQ.IGlYCQNzbghpjkT8WwcnyUrsEemNPXqSFxVYh4OfUkE",
    },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};
