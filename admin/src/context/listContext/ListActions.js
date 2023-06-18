export const getListsStart = () => ({
    type: "GET_LISTS_START"
});

export const getListsSuccess = (lists) => ({
    type: "GET_LISTS_SUCCESS",
    payload: lists,
});

export const getListsFailure = () => ({
    type: "GET_LISTS_FAILURE"
});

export const deleteListStart = () => ({
    type: "DELETE_LIST_START"
});

export const deleteListSuccess = (id) => ({
    type: "DELETE_LIST_SUCCESS",
    payload: id,
});

export const deleteListFailure = () => ({
    type: "DELETE_LIST_FAILURE"
});

// export const creatListStart = () => ({
//     type: "CREATE_LIST_START"
// });

// export const creatListSuccess = (movie) => ({
//     type: "CREATE_LIST_SUCCESS",
//     payload: movie,
// });

// export const creatListFailure = () => ({
//     type: "CREATE_LIST_FAILURE"
// });
// export const updatListStart = () => ({
//     type: "UPDATE_LIST_START"
// });

// export const updatListSuccess = (movie) => ({
//     type: "UPDATE_LIST_SUCCESS",
//     payload: movie,
// });

// export const updatListFailure = () => ({
//     type: "UPDATE_LIST_FAILURE"
// });
