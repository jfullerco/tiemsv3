import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import RestDBService from '../services/RestDBService'
import '../style.css'

function AssetList(props) {
  const {id} = useParams()
  const [assets, setAssets] = useState([])
  console.log(assets)

  useEffect(() => {
    retrieveClient(id)
  }, [])

const retrieveClient = (id) => {
    RestDBService.getClient(id)
    .then(res => {
      
      setAssets(res.data.assets)
      
      console.log()
    })
    .catch(e => {
      console.log()
    })
  }

return (
  
    <div className="widget">
    <table>
      <th>Assets</th>
      <tr>
        {assets ? (
                assets.map(asset => (
                  <tr>
                    <Link to={`/assets/${asset._id}`} key="asset._id">
                      {asset.assetID} 
                    </Link>
                  </tr>
                ))
              ):(
            "No Assets"
              )
        }
    </tr>
    </table>
    
    </div>

  
)
}
export default AssetList