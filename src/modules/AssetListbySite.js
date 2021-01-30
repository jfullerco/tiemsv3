import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import RestDBService from '../services/RestDBService'
import '../style.css'

function AssetListbySite(props) {
  
  const {site} = props
  const [assets, setAssets] = useState([])
  
  
  useEffect(() => {
    retrieveAsset(site)
  })

const retrieveAsset = (site) => {
    RestDBService.getAssetBySite(site)
    .then(res => {
      setAssets(res.data)
    })
    .catch(e => {
      
    })
  }
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