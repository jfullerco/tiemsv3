import axios from 'axios'

export default axios.create({
  baseURL: "https://api.ninoxdb.de/v1/teams/zWh7a4QbwYF5qwzQz/databases/OnCall TMS",
  headers: {
    "Content-type": "application/json",
    'Authorization': 'Bearer <1183ade0-d5da-11e9-a6e4-e9da9e2318ac>'
  }
})