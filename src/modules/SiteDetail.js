import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import RestDBService from '../services/RestDBService'
import '../style.css'

const SiteDetail = (props) => {
  
  const {id, sid} = useParams()
  const [sites, setSites] = useState([])
  const [site, setSite] = useState([])

  useEffect(() => {
      retrieveSite(sid)
    }, []
  )

  const retrieveSite = (id, sid) => {
    RestDBService.getSite(id, sid)
    .then(res => {
      setSite(res.data)
    })
    .catch(e => {
      
    })
  }
  
  console.log(site)
  console.log(id)

  return (
    <div>
      <h5></h5>
      Site Name: {site.site_name} <br/>
      Address: {site.site_add1} <br />
      {site.site_add2} <br />
      {site.site_city} {site.site_state} {site.site_zip}

      <p/>
        
        
            
    </div>
  )
}
export default SiteDetail