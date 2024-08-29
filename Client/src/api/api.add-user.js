import axios from 'axios';

const addUser = async (userData) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:3000/api/user/add_user',
    headers: {'Content-Type': 'application/json'},
    data: userData
  };
  
  const response = await axios.request(options);
  return response.data;
}

export default addUser;