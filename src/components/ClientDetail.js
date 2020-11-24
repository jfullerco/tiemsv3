import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import RestDBService from '../services/RestDBService'
import {Link} from 'react-router-dom'
import SiteList from '../comp/SiteList'

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap/Button'


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
      console.log()
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
        <Link to={`/addAsset/${id}`}>Add Site</Link>
        <Link to={`/addAsset/${id}`}>Add Asset</Link>
        
      </div>

      <h5>{client.client_name}</h5>

      <div className="container">
        <SiteList style="order: 1" />
        <SiteList style="order: 2" />
      </div>

      <p />
        <Accordion > 
          <Card>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <Card.Header>Assets</Card.Header>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {assets ? (
                  assets.map(asset => (
                    <ul>
                      <Link 
                        to={`/assets/${asset._id}`} 
                        key={asset._id}>
                      {asset.assetID} - 
                      {asset.siteName}
                      </Link>
                    
                    </ul>
                  ))
                ):(
                  "No Assets"
                  )}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
            
    </div>
  )
}
export default ClientDetail