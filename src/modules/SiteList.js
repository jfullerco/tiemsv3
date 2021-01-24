import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link, Switch, Route} from 'react-router-dom'
import RestDBService from '../services/RestDBService'
import useSiteDetail from '../hooks/useSiteDetail'
import '../style.css'

function SiteList(props) {
  const {id} = useParams()
  const [sites, setSites] = useState([])
  const [siteDetail, useSiteDetail] = useSiteDetail()
  

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

const handleClick = (event) => {
  const siteDetailID = event.target.value
  console.log(did)
  setSiteDetail(siteDetailID)
}



console.log(siteDetail)
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
                        - <button onClick={handleClick} value={site._id}>manage</button>
                      
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