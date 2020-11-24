import React, { useState, useEffect } from 'react'

import RestDBService from '../../services/RestDBService'
import { Link } from 'react-router-dom'
import {Row, Col, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import '../../style.css'

const ClientAdmin = () => {
  
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
      console.log(clients)
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
    
  
            <table className="test"> 
              <tr >
                <th ><input type="checkbox" /></th>
                <th>Client Name</th>
              </tr>
              <tr ><td >test</td></tr>
            </table>
              
           
          
    
  )
}

export default ClientAdmin
