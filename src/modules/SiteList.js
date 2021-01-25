import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link, Switch, Route} from 'react-router-dom'
import {useClient} from '../hooks/useClient'
import SiteDetail from './SiteDetail'
import '../style.css'

function SiteList(props) {
  const {id} = useParams()
  const {sites} = useClient()
  const [site, setSite] = useState()


  const handleChange = (site) => {
    setSite(site)
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
                      <div className="site-list" key={site._id} onClick={() => handleChange(site)}>
                      
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
        <td><SiteDetail site={site} className="details" /></td>  
      </tr>
    </table>
    </div>
  )
}
export default SiteList