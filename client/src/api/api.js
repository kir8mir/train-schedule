import axios from 'axios';

export async function getTrains() {
  let trains = await axios.get('https://train-server.onrender.com/trains');

  return await trains;
}