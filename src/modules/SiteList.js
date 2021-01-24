import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link, Switch, Route} from 'react-router-dom'
import RestDBService from '../services/RestDBService'
import {useSite, handleChange} from '../hooks/useSite'
import SiteDetail from './SiteDetail'
import '../style.css'

function SiteList(props) {
  const {id} = useParams()
  const [sites, setSites] = useState([])
  const [siteDetail, setSiteDetail] = useSite()

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

const handleChange = event => {
  const clicked = event.target.value
  setSiteDetail(clicked)
  return <SiteDetail siteID={siteDetail} />
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
                      <button onClick={handleChange} value={site._id}>Manage</button>
                       <Link to={`/client/${id}/site${site._id}`} site={() => {site}}>
                       
                       
                       
                        {site.site_name}</Link>
                      </div>
                    ))
                  ):(
                "No Sites"
                  )
            }
        </td>
        <td>
         
        </td>    
      </tr>
    
    </table>
    </div>
  )
}
export default SiteList