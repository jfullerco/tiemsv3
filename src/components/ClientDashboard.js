import React, { useState, useEffect } from 'react'
import RestDBService from '../services/RestDBService'
import { Link } from 'react-router-dom'
import {Row, Col, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

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
      <Row>
        <Col xs={4} md={{ span: 4, offset: 1 }}>
          <Link to="/addClient">Add</Link>
          <input 
            type="text"
            className="form-control"
            placeholder="client name"
            value={searchClient}
            onChange={onChangeSearchClient}
          /> 
          <button
            type="button"
            onClick={findClient}>
            Search
          </button>
          <p/>
          
        </Col>
      </Row>
      <Row>  
        <Col xs={4} md={{ span: 4, offset: 1 }}>
          <p/>
          <ul>
            <div className="client-list">
              {clients && clients.map((client, index) => (
                  <Link to={`/clients/${client._id}`} key={client._id}>
                    {client.client_name}
                    <br />
                  </Link>
                ))}
            </div>
          </ul>
        </Col>
      </Row>
    </div>
  )
}

export default ClientDashboard



