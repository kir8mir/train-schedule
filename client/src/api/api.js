import axios from 'axios';

export async function getTrains() {
  let trains = await axios.get('https://train-server.onrender.com/trains');

  return await trains;
}

export async function addTrain(name, from, to, departure, arrival) {
  await axios.post('https://train-server.onrender.com/trains', {
    name,
    from,
    to,
    departure,
    arrival
  });
}

export async function removeTrain(id) {
  await axios.delete(`https://train-server.onrender.com/trains/${id}`);
}

export async function updateTrain(id, name, from, to, departure, arrival) {
  await axios.patch(`https://train-server.onrender.com/trains/${id}`, {
    name,
    from,
    to,
    departure,
    arrival
  });
}