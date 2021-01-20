import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import RestDBService from '../services/RestDBService'
import SiteList from './SiteList'
import '../style.css'

function SiteCount(props) {
  const {id} = useParams()
  const [sites, setSites] = useState([])

  useEffect(() => {
    retrieveClient(id)
  }, [])

const retrieveClient = (id) => {
    RestDBService.getClient(id)
    .then(res => {
      setSites(res.data.sites)
    })
    .catch(e => {
      
    })
  }
function siteList() {
  <SiteList />
}

return (
  
    <div className="widget">
     <table>
      <th>Sites</th>
      <tr>
        {
         <Link to={`/sites/${id}`}>{sites.length}</Link> 
        }
    </tr>
    </table>
    </div>
  )
}
export default SiteCount