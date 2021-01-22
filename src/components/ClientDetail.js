import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import RestDBService from '../services/RestDBService'
import {Link} from 'react-router-dom'
import SiteCount from '../modules/SiteCount'
import AssetCount from '../modules/AssetCount'
import OrderList from '../modules/OrderList'

const ClientDetail = (props) => {

  const {id} = useParams()
  const [client, setClient] = useState([])
  const [sites, setSites] = useState([])
  const [assets, setAssets] = useState([])
  
  useEffect(() => {
     retrieveClient(id)
    }, []
  )
  const retrieveClient = (id) => {
        RestDBService.getClient(id)
        .then(res => {
          setClient(res.data)
          setSites(res.data.sites)
          setAssets(res.data.assets)
        })
        .catch(e => {
          console.log()
        })
      }
 const test = sites ? ("test yes") : ("no")
  
  console.log()

  return (
    <div>
      
      <div className="sub-nav"> 
        <Link to={`/addSite/${id}`}>Add Site</Link>
        <Link to={`/addAsset/${id}`}>Add Asset</Link>
        <Link to={`/admin/client/${id}`}>Update Client</Link>
      </div>

      <h5>{client.client_name}</h5>

      <div className="container">
        <SiteCount style="order: 1" count={sites.length} /> 
        <AssetCount style="order: 2" />
        <OrderList style="order: 3" />
      </div>

      <p />
       
            
    </div>
  )
}
export default ClientDetail