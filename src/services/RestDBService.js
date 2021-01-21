import http from "../http-common"

const getAllClients = () => {
  return http.get("/rest/clients")
}

const getClient = id => {
  return http.get(`/rest/clients/${id}`)
}

const getAsset = id => {
  return http.get(`/rest/assets/${id}`)
}

const getAllAssets = (id) => {
  return http.get(`/rest/clients/${id}/assets`)
}

const getSite = (id, sid) => {
  return http.get(`/rest/clients/${id}/sites/${sid}`)
}

const getAllSites = (id) => {
  return http.get(`/rest/clients/${id}/sites`)
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

const updateAsClient = (url, data) => {
  return http.put(`/rest/clients/${url}`, data)
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
  getAllSites,
  getAsset,
  getAllAssets,
  createClient,
  createAsset,
  updateClient,
  updateAsClient,
  removeClient,
  searchClient
}