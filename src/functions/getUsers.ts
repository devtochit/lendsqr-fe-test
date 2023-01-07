import axios from 'axios';

const USERS_API_ENDPOINT_URL = process.env.USERS_API_URL;


const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const getAllUsers = async () => {
  try {
    const response = await axios.get(`${USERS_API_ENDPOINT_URL}/users`, config);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getUserById = async (id: any) => {
  try {
    const response = await axios.get(`${USERS_API_ENDPOINT_URL}/users/${id}`, config);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getUsers = {
  getAllUsers,
  getUserById
};

export default getUsers;