import axios from "axios";

const instance =  axios.create({
  baseURL: "https://mysterious-forest-25251.herokuapp.com/api/v1/",
  responseType: "json"
});
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';

// const retrievedObject = localStorage.getItem('smartassets');
// const store = JSON.parse(retrievedObject)

instance.interceptors.request.use((config) => {
  config.headers['Authorization'] = localStorage.getItem('smartassets');
  return config;
});

export default instance;