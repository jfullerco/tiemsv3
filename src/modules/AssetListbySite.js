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
        
          <table className="u-full-width offset-by-one column">
            <thead>
              <tr>Assets</tr>
            </thead>
            <tbody>
              {assetList ? (
                assetList.map(asset => (
                  <tr>
                    <Link to={`/assets/${asset._id}`} key="asset._id">
                      {asset.assetID} 
                    </Link>
                  </tr>
                ))
          
              ):(
            " "
              )
        }
          </tbody>
          </table>
    </div>

  
)
}
export default AssetListbySite