import http from "../http-ninox"

const getAllClients = () => {
  return http.get("/rest/clients")
}

const getClient = id => {
  return http.get(`/rest/clients/${id}`)
}

const getAsset = id => {
  return http.get(`/rest/assets/${id}`)
}

const getSite = id => {
  return http.get(`/rest/sites/${id}`)
}

const createClient = data => {
  return http.post("/rest/clients", data)
}

const createAsset = (id, data) => {
  return http.post(`/rest/clients/${id}/assets`, data)
}

const updateClient = (id, data) => {
  return http.put(`/rest/clients/${id}`, data)
}

const removeClient = id => {
  return http.delete(`/rest/clients/${id}`)
}

const searchClient = data => {
  return http.get(`/rest/clients?filter=${data}`)
}

export default {
  getAllClients,
  getClient,
  getSite,
  getAsset,
  createClient,
  createAsset,
  updateClient,
  removeClient,
  searchClient
}