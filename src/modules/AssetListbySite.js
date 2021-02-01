import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {assets} from '../hooks/useSite'
import RestDBService from '../services/RestDBService'
import '../style.css'

function AssetListbySite(props) {
  
  const {site} = props
  
  
  
console.log(assets)
return (
  
    <div className="container">
        {assets ? (
                assets.map(asset => (
                  <div className="site-list">
                    <Link to={`/assets/${asset._id}`} key="asset._id">
                      {asset.assetID} 
                    </Link>
                  </div>
                ))
              ):(
            "No Assets"
              )
        }
    
    </div>

  
)
}
export default AssetListbySite