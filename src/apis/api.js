import axios from 'axios';
require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY;

export const searchIPAddress = async (searchTerm) => {
  return await axios.get(
    `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddres=${searchTerm}`,
  );
};

export const searchDomain = async (searchTerm) => {
  return await axios.get(
    `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&domain=${searchTerm}`,
  );
};
