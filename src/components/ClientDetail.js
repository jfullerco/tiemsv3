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
      <div className="row">

        <div className="three columns">
          <h5>Client Dashboard</h5>
        </div> 
      </div>
      <div className="row">  
        <div className="five columns">
          <Link to={`/addSite/${id}`} >Add Site</Link>
          <Link to={`/addAsset/${id}`} >Add Asset</Link>
          <Link to={`/admin/client/${id}`}>Update Client</Link>
        </div>
        
      </div>
    <div>
      
      <h5>{client.client_name}</h5><br />
        <SiteList sites={sites} />
        
      </div>

    </div>
)
}
export default ClientDetail