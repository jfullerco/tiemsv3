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
  <div>  
      <div className="sub-nav"> 
        <div className="sub-nav-item 1"><Link to={`/addSite/${id}`} >Add Site</Link></div>
        <div className="sub-nav-item 2"><Link to={`/addAsset/${id}`} >Add Asset</Link></div>
        <div className="sub-nav-item 3"><Link to={`/admin/client/${id}`} >Update Client</Link></div>
      </div>
    <div className="content">
      <h2>Client Dashboard</h2><br />
      <h5>{client.client_name}</h5><br />
        <SiteList sites={sites} />
        
      </div>

    </div>
)
}
export default ClientDetail