import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import RestDBService from '../services/RestDBService'
import '../style.css'

const SiteDetail = (props) => {
  
  const {id} = useParams()
  const {sid} = useParams()
  
  const [site, setSite] = useState([])
  
  console.log(id, sid)
  useEffect(() => {
      retrieveSite(id, sid)
    }, []
  )


  const retrieveSite = (id, sid) => {
    RestDBService.getSite(id, sid)
    .then(res => {
      setSite(res.data[0])
      console.log(res.data)
    })
    .catch(e => {
      
    })
  }

  return (
    <div>
      {site ? (
                <div>
                {site.site_name}<p/>
                {site.site_add1}<br/>
                {site.site_add2}
                {site.site_city}, {site.site_state} {site.site_zip}
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