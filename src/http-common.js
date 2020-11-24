import axios from 'axios'

export default axios.create({
  baseURL: "https://tiems-d1ca.restdb.io/",
  headers: {
    "Content-type": "application/json",
    "x-apikey": "5f2c8c05013b1c34acef749b"
  }
})