import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link, Switch, Route} from 'react-router-dom'
import {useClient} from '../hooks/useClient'
import useSite from '../hooks/useSite'
import SiteDetail from './SiteDetail'
import AssetListbySite from './AssetListbySite'
import '../style.css'

function SiteList(props) {

  const {id} = useParams()
  const {sites} = useClient()
  
  const [site, setSite] = useState()
  const [asset, setAsset] = useState()
  const [siteChosen, setSiteChosen] = useState(null)
  
  const [siteID, setSiteID] = useSite()

  const handleChange = (site) => {
    
    setSite(site)
    setSiteChosen(site._id)
  }

return (
  
    <div className="main-container">
      <h2>Sites</h2>
        <p/>
          <div className="container">

            {sites ? ( sites.map(site => (

                      <div 
                        className="site-list" 
                        key={site._id} 
                        onClick={() => handleChange(site)}
                      >
                          {site.site_name}
              
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

          <SiteDetail 
            site={site} 
            className="details" 
          />

          <AssetListbySite 
            site={asset} 
          />

        </div>  
    </div>
  )
}
export default SiteList