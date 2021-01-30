import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useClient} from '../hooks/useClient'
import AssetListbySite from './AssetListbySite'
import RestDBService from '../services/RestDBService'
import '../style.css'

const SiteDetail = (props) => {
  
  const {id} = useParams()
  const {site} = props
  const {assets} = useClient()
  const [assetClick, setAssetClick] = useState()
  

  const handleChange = () => {
    setAssetClick(site)
  }


  return (
    <div>
      {site ? (
          <div>
              <div className="detail">
                <div className="detail-label">
                  Site Name:
                </div> 
                  <text className="name">
                    {site.site_name}
                  </text>
                <p />
                <div className="detail-label">
                  Address:
                </div> 
                {site.site_add1}<br />
                {site.site_add2}
                {site.site_city}, {site.site_state} {site.site_zip}
                <div className="detail-label">
                  ID:
                </div> {site._id}
                <div onClick={handleChange}>Assets</div>
              </div>
              
          </div>
            
              ):(
                <div className="detail">
                <div className="detail-label">
                  Click Site for details
                </div>
                </div>
              )      
      }          
    </div>
  )
}
export default SiteDetail