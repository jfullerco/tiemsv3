import React, {useState, useEffect} from 'react'
import RestDBService from '../services/RestDBService'

const useSite = (props) => {

  const [siteID, setSiteID] = useState(null)
  const [assets, setAssets] = useState([])
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    retrieveSites(siteID)
    console.log(siteID)
  },[siteID])

  const retrieveSites = (siteID) => {
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

  }, setSiteID]
}
export default useSite