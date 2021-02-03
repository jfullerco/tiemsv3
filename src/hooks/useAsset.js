import React, {useState, useEffect} from 'react'
import RestDBService from '../services/RestDBService'

const useAsset = (props) => {

  const [aid, setAID] = useState(null)
  const [sid, setSID]
  const [asset, setAsset] = useState([])
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    retrieveAsset(assetID)
    console.log(assetID)
  },[siteID])

  const retrieveAsset = (siteID) => {
    RestDBService.getAssetbySite(siteID)
    .then(res => {
      setAssets(res.data)
      console.log(res.data)
    })
    .catch(e => {
      console.log(e)
    })
  }

  return [{siteID, assets, tickets

  }, setAID, setID]
}
export default useSite