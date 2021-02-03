import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {assets} from '../hooks/useSite'
import RestDBService from '../services/RestDBService'

function AssetListbySite(props) {
  
  const {assetList} = props
  console.log()
  
  
  
console.log(assetList)
return (
  
    <div className="row">
        {assetList ? (
                assetList.map(asset => (
                  <div >
                    <Link to={`/assets/${asset._id}`} key="asset._id">
                      {asset.assetID} 
                    </Link>
                  </div>
                ))
              ):(
            " "
              )
        }
    
    </div>

  
)
}
export default AssetListbySite