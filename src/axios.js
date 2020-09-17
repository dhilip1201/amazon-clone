import axios from 'axios';
const instance = axios.create({
   
    baseURL: 'http://localhost:5001/dhilip-amazan-clone/us-central1/api'  
});
export default instance;
 // baseURL: 'http://localhost:5001/dhilip-amazan-clone/us-central1/api'  