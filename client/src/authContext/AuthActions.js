export const loginStart = () => ({
    type: "LOGIN_START"
});
export const loginSuccess = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    return {
    type: "LOGIN_SUCCESS",
    payload: user
}};
export const loginFailure = () => ({
    type: "LOGIN_FAILURE"
});

//logout
export const logout = () => ({
    type: "LOGOUT"
});
