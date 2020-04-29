import API from "./API";

export const manualLogin = async (email, password) => {
    const formData = {
        email,
        password
    }
    let userData = await API.post('/login', formData);
    return userData;
}