import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import RestDBService from '../services/RestDBService'

const AssetDetail = (props) => {
  
  const {id} = useParams()
  const [asset, setAsset] = useState([])

    useEffect(() => {
      retrieveAsset(id)
    }, [])

  const retrieveAsset = (id) => {
    RestDBService.getAsset(id)
    .then(res=> {
      setAsset(res.data)
      console.log(res.data)
    })
  }

  return (
    <div>
      Asset ID: {asset.assetID} <p/>
      Site: {asset.siteName} <p/>
      Bandwidth: {asset.assetBandwidth} <p/>
      Details: <div>{asset.assetDetails}</div>
    </div>
  )
}
export default AssetDetail