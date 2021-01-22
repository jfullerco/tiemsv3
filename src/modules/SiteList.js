import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import RestDBService from '../services/RestDBService'
import SiteDetail from './SiteDetail'
import '../style.css'

function SiteList(props) {
  const {id} = useParams()
  const [sites, setSites] = useState([])
  const [siteDetail, setSiteDetail] = useState()

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
const showDetail = e => {
  const [name, value] = e.target
  console.log(e)
  setSiteDetail({[name]: value})
 
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
                      <div className="site-list" key={site._id}><button value={site} onClick={showDetail}>
                        {site.site_name}</button>
                      </div>
                    ))
                  ):(
                "No Sites"
                  )
            }
        </td>
        <td>
          <SiteDetail site={siteDetail}/>
        </td>    
      </tr>
    
    </table>
    </div>
  )
}
export default SiteList