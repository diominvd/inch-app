import axios from 'axios';

const updateUser = async (userMetaData) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:3000/api/user/update_user',
    headers: {'Content-Type': 'application/json'},
    data: userMetaData
  };
  
  const response = await axios.request(options);
  return response.data;
}

export default updateUser;