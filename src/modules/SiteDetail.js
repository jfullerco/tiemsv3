import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import RestDBService from '../services/RestDBService'
import '../style.css'

const SiteDetail = (props) => {
  
  const {id} = useParams()
  const {sid} = useParams()
  const {site} = props
  
  const [sites, setSites] = useState([])

  

  const retrieveSite = (id, sid) => {
    RestDBService.getSite(id, sid)
    .then(res => {
      setSite(res.data[0])
      console.log(res.data[0])
    })
    .catch(e => {
      
    })
  }
  
  console.log(props.detail)
  console.log(id)

  return (
    <div>
      {site ? (
                <div>
                {site.site_name}<p/>
                {sites.site_add1}<br/>
                {sites.site_add2}
                {sites.site_city}, {sites.site_state} {sites.site_zip}
                </div>    
                  ):(
                "No Sites"
                  )
            }
      
      
      <p/>
        
        
            
    </div>
  )
}
export default SiteDetail