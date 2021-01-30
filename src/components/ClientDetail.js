import React, {useState, useEffect} from 'react'
import {Link, Route, useParams} from 'react-router-dom'
import {useClient} from '../hooks/useClient'
import SiteList from '../modules/SiteList'

function ClientDetail() {

const {id} = useParams()
const {client, sites, assets} = useClient()
useEffect(() => {
  
}), []

console.log(client.client_name)
return (
  <div className="main-container">
      <h2>Client Dashboard</h2><br />
      <h5>{client.client_name}</h5><br />
      <div className="container"> 
        <Link to={`/addSite/${id}`}>Add Site</Link><br />
        <Link to={`/addAsset/${id}`}>Add Asset</Link><br />
        <Link to={`/admin/client/${id}`}>Update Client</Link>
      <br />
        <SiteList sites={sites} />
        
      </div>

    </div>
)
}
export default ClientDetail