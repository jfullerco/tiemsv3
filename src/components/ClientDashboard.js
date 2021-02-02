import React, { useState, useEffect } from 'react'
import RestDBService from '../services/RestDBService'

import { Link } from 'react-router-dom'

const ClientDashboard = () => {
  
  
  const [clients, setClients] = useState([])
  const [currentClient, setCurrentClient] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [searchClient, setSearchClient] = useState("")

  useEffect(() => {
    retrieveClients()
  }, [])

  const onChangeSearchClient = e => {
    const searchClient = e.target.value
    setSearchClient(searchClient)
  }

  const retrieveClients = () => {
    RestDBService.getAllClients()
    .then(res => {
      setClients(res.data)
      console.log(res.data)
    })
    .catch(e => {
      console.log(e)
    })
  }

  const refreshClientList = () => {
    retrieveClients()
    setCurrentClient(null)
    setCurrentIndex(-1)
  }
  
  const setActiveClient = (client, index) => {
    setCurrentClient(client)
    setCurrentIndex(index)
  }

  const findClient = () => {
    RestDBService.getClient(searchClient)
    .then(res => {
      setClients(res.data)
      console.log(res.data)
    })
    .catch(e => {
      console.log(e)
    })
  }
  
  return (
    <div>  
          <div className="sub-nav">
            <div className="sub-nav-item">
              <Link to="/addClient">Add</Link>
            </div>
            <div className="sub-nav-item"> 
              <input 
                  type="text"
                  placeholder="client name"
                  value={searchClient}
                  onChange={onChangeSearchClient}
                /> 
            </div>
            <div className="sub-nav-item">
              <button
                type="button"
                onClick={findClient}
                >
                Search
              </button>
            </div>
          </div><div>
          <h2>Clients</h2> <p />
          <p />
            
              {clients && clients.map((client, index) => (
                  <div className="client-list" key={client._id}>
                  <Link to={`/clients/${client._id}`}>
                    {client.client_name}
                    <br />
                  </Link>
                  </div>
                ))}
              </div>
           <div className="container"></div>
    </div>
  )
}

export default ClientDashboard



