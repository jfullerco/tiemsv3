import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link, Switch, Route} from 'react-router-dom'
import RestDBService from '../services/RestDBService'
import useSiteDetail from '../hooks/useSiteDetail'
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
      console.log(e)
    })
  }





console.log()
return (
  
    <div>
     <table>
      <tr>
        <th>Sites</th>
        <th></th>
      </tr>
      <tr>
        <td>
            {sites ? (
                    sites.map(site => (
                      <div className="site-list" key={site._id}>
                      
                       <Link to={`/client/${id}/siteList/${site._id}`}>
                        {site.site_name}
                       </Link>
                        
                      
                      </div>
                    ))
                  ):(
                "No Sites"
                  )
            }
        </td>  
      </tr>
    
    </table>
    </div>
  )
}
export default SiteList