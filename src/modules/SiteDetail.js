import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import RestDBService from '../services/RestDBService'


const SiteDetail = (props) => {

  const {id} = useParams()
  const [site, setSite] = useState([])
  

  useEffect(() => {
      retrieveSite(id)
    }, []
  )

  const retrieveSite = (id) => {
    RestDBService.getSite(id)
    .then(res => {
      setSite(res.data)
      setClient(res.data.client)
      setAssets(res.data.assets)
      setTickets(res.data.tickets)
    })
    .catch(e => {
      console.log(e)
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