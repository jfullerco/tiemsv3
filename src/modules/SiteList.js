import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link, Switch, Route} from 'react-router-dom'
import {useClient} from '../hooks/useClient'
import SiteDetail from './SiteDetail'
import AssetListBySite from './AssetListbySite'
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
  
    <div className="main-container">
      <h2>Sites</h2><p/>
        <div className="container">
            {sites ? (
                    sites.map(site => (
                      <div className="site-list" key={site._id} onClick={() => handleChange(site)}>
                      
                       <Link to={`/client/${id}/siteList/${site._id}`}>
                          {site.site_name}
                       </Link>

                       <div className="detail-label">
                            ID: {site._id}
                        </div>
  
                      </div>
                    ))
                  ):(
                "No Sites"
                  )
            }
          </div>
        <div className="container">
          <SiteDetail site={site} className="details" />
        </div>  
    </div>
  )
}
export default SiteList