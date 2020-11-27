import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import RestDBService from '../services/RestDBService'
import '../style.css'

function SiteList(props) {
  const {id} = useParams()
  const [sites, setSites] = useState([])
  console.log(sites)

  useEffect(() => {
    retrieveClient(id)
  }, [])

const retrieveClient = (id) => {
    RestDBService.getClient(id)
    .then(res => {
      
      setSites(res.data.sites)
      
      console.log()
    })
    .catch(e => {
      console.log()
    })
  }

return (
  
    <div className="widget">
     <table>
      <th>Sites</th>
      <tr>
        {sites ? (
                sites.map(site => (
                  <ul>
                    <Link to={`/sites/${site._id}`} key="site._id">
                      {site.site_name} 
                    </Link>
                  </ul>
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