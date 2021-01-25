import React, {useState, useEffect} from 'react'
import {Link, Route, useParams} from 'react-router-dom'
import {useClient} from '../hooks/useClient'
import SiteCount from '../modules/SiteCount'

function ClientDetail() {

const {id} = useParams()
const {client, sites, assets} = useClient()
useEffect(() => {
  
}), []

console.log(client.client_name)
return (
  <div>
      
      <div className="sub-nav"> 
        <Link to={`/addSite/${id}`}>Add Site</Link>
        <Link to={`/addAsset/${id}`}>Add Asset</Link>
        <Link to={`/admin/client/${id}`}>Update Client</Link>
      </div>

      <h5>{client.client_name}</h5>

      <div className="details">
        <SiteCount sites={sites} />
        
      </div>

      <p />
       
            
    </div>
)
}
export default ClientDetail