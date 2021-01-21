import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import RestDBService from '../services/RestDBService'
import SiteList from './SiteList'
import '../style.css'

function SiteCount(props) {
  const {id} = useParams()
  const [sites, setSites] = useState([])
  const [appState, setAppState] = useState({
    loading: false
  })

  useEffect(() => {
    retrieveClient(id)
  }, [])

const retrieveClient = (id) => {
    RestDBService.getAllSites(id)
    .then(res => {
      setSites(res.data)
    })
    .catch(e => {
      
    })
  }


return (
  
    <div className="widget">
     <table>
      <th>Sites</th>
      <tr>
        {
         <Link to={`/client/${id}/siteList`}>{sites.length}</Link> 
        }
    </tr>
    </table>
    </div>
  )
}
export default SiteCount