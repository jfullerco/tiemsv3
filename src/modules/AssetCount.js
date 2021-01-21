import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import RestDBService from '../services/RestDBService'
import AssetList from './AssetList'
import '../style.css'

function AssetCount(props) {
  const {id} = useParams()
  const [sites, setSites] = useState([])

  useEffect(() => {
    retrieveClient(id)
  }, [])

const retrieveClient = (id) => {
    RestDBService.getAllAssets(id)
    .then(res => {
      setAssets(res.data)
    })
    .catch(e => {
      
    })
  }


return (
  
    <div className="widget">
     <table>
      <th>Sites</th>
      <tr>
        {
         <Link to={`/client/${id}/assetList`}>{assets.length}</Link> 
        }
    </tr>
    </table>
    </div>
  )
}
export default AssetCount