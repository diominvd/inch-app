import axios from 'axios';

const getUpgradesData = async (userId) => {
  const options = {
    method: 'GET',
    url: `http://localhost:3000/api/upgrades/${userId}`,
    headers: {'Content-Type': 'application/json'},
  };
  
  const response = await axios.request(options)
  return response.data
}

export default getUpgradesData;