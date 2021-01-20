import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import RestDBService from '../services/RestDBService'
import '../style.css'

const SiteDetail = (props) => {

  const {id} = useParams()
  const [site, setSite] = useState([])
  

  useEffect(() => {
      retrieveSite(id)
    }, []
  )

  const retrieveClient = (id) => {
    RestDBService.getClient(id)
    .then(res => {
      setSites(res.data.sites)
    })
    .catch(e => {
      
    })
  }
  
  console.log(site)

  return (
    <div>
      <h5>{site.client}</h5>
      Site Name: {site.site_name} <br/>
      Address: {site.site_add1} <br />
      {site.site_add2} <br />
      {site.site_city} {site.site_state} {site.site_zip}

      <p/>
        
        
            
    </div>
  )
}
export default SiteDetail