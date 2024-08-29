import axios from 'axios';

const upgradeStorage = async (userId) => {
  const options = {
    method: 'GET',
    url: `http://localhost:3000/api/upgrades/storage/${userId}`,
    headers: {'Content-Type': 'application/json'},
  };
  
  const response = await axios.request(options)
  return response.data
}

export default upgradeStorage;