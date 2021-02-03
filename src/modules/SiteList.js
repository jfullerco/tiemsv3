import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link, Switch, Route} from 'react-router-dom'
import {useClient} from '../hooks/useClient'
import useSite from '../hooks/useSite'

import SiteDetail from './SiteDetail'
import AssetListbySite from './AssetListbySite'


function SiteList(props) {

  const {id} = useParams()
  const {sites} = useClient()
  
  const [site, setSite] = useState()
  const [assetList, setAssetList] = useState()
  const [sortedSites, setSortedSites] = useState()
  
  
  const [siteID, setSiteID] = useSite()

  const handleChange = (site) => {
    
    setSite(site)
    setSiteID(site._id)
    setAssetList(site.site_assets)
  }
  const sortData = (sites) => {
    setSortedSites(sites.sort(a => a.site_name ? 1 : -1))
    console.log(sortedSites)
  }
return (
  
    <div className="row">
    <div className="one column"></div>
      <h5>Sites</h5>
      <div onClick={sortData}>Sort</div>
        <div className="four columns">

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

        <div className="five columns">

          <SiteDetail 
            site={site} 
            className="details" 
          />
        <div className="row">
          <AssetListbySite 
            assetList={assetList} 
          />
        </div>
        </div>  
    </div>
  )
}
export default SiteList