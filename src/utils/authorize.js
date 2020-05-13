import jwt from 'jsonwebtoken';
import API from "./API";

export const manualLogin = async (email, password) => {
    const formData = {
        email,
        password
    }
    let userData = await API.post('/login', formData);
    return userData;
}

export const isAuthenticated = () => {
    const bearerHeader = localStorage.getItem('smartassets');
    if (!bearerHeader){
      return false;
    }
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    jwt.verify(bearerToken, 'secretKey', (err, decoded) => {
        if (err) {
          return false;
        }
      });
    return true;
}

export const logout = () => {
    localStorage.removeItem('smartassets');
} 