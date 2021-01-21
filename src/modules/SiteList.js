import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import RestDBService from '../services/RestDBService'
import SiteDetail from './SiteDetail'
import '../style.css'

function SiteList(props) {
  const {id} = useParams()
  const [sites, setSites] = useState([])

  useEffect(() => {
    retrieveClient (id)
  }, [])

const retrieveClient = (id) => {
    RestDBService.getAllSites(id)
    .then(res => {
      setSites(res.data)
    })
    .catch(e => {
      
    })
  }
console.log(sites)
return (
  
    <div>
     <table>
      <th>Sites</th>
      <tr>
        {sites ? (
                sites.map(site => (
                  <div className="site-list" key={site._id}>
                    <Link to={`/client/${id}/site/${site._id}`}>
                      {site.site_name} 
                    </Link>
                  </div>
                ))
              ):(
            "No Sites"
              )
        }
    </tr>
    </table>
    </div>
  )
}
export default SiteList