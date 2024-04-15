// Import Axios library
import axios from 'axios';

// Create an instance of Axios with default configurations
const Axiosconnect = axios.create({
  baseURL: 'http://localhost:8080/', // Set your default base URL here
  // You can also configure other options such as headers, timeout, etc.
});

// Now you can use axiosInstance for making requests
axiosInstance.get('/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// You can also export this instance for using it in other files
export default Axiosconnect;
