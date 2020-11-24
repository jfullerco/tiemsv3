import React, {useState, useEffect} from 'react'
import RestDBService from '../services/RestDBService'
import {useParams} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const AddAsset = (props) => {
    const {id} = useParams()
    const initialAssetState = {
      assetID: "",
      assetType: "",
      assetHostName: "",
      assetBandwidth: "",
      assetVoiceHandoff: "",
      assetAccessHandoff: "",
      assetDetails: "",
      assetStatus: "",
      _parent_id: "",
      submitted: false
    }
    
    console.log(id)
    const [asset, setAsset] = useState(initialAssetState)
    const [submitted, setSubmitted] = useState(false)

    const handleInputChange = event => {
    const { name, value } = event.target
    setAsset({...asset, [name]: value})
    }
    

    const saveAsset = () => {
      var data = {
      assetID: asset.assetID, 
      assetType: asset.assetType,
      assetHostName: asset.assetHostName,
      assetBandwidth: asset.assetBandwidth,
      assetAccessHandoff: asset.assetAccessHandoff,
      assetVoiceHandoff: asset.assetVoiceHandoff,
      assetDetails: asset.assetDetails,
      assetStatus: asset.assetStatus
    }
    
    RestDBService.createAsset(id, data) 
      .then(response => {
        setAsset({
          assetID: response.data.assetID, 
          assetType: response.data.assetType,
          _parent_id: id
        })

        console.log(response)
      })
    }
  
  return (
    <div>
      <h5>Add Asset</h5>
        <div className="container">

          <input className="assetID" type="text"
            placeholder="Asset ID" 
            value={asset.assetID}
            onChange={handleInputChange}
            name="assetID"
            /> <p />
          <input className="assetType" type="text"
            placeholder="Asset Type" 
            value={asset.assetType}
            onChange={handleInputChange}
            name="assetType"
            /> <p />
          <input className="assetHostName" type="text"
            placeholder="Host Name"
            value={asset.assetType}
            onChange={handleInputChange}
            name="assetHostName" 
            /> <p />
          <input className="assetBandwidth" type="text"
            placeholder="Bandwidth" 
            value={asset.assetBandwidth}
            onChange={handleInputChange}
            name="assetBandwidth"
            /> <p />
          <input className="assetAccessHandoff" type="text"
            placeholder="Access Handoff" 
            value={asset.assetAccessHandoff}
            onChange={handleInputChange}
            name="assetAccessHandoff"
            /> <p />
          <input className="assetVoiceHandoff" type="text"
            placeholder="Voice Handoff" 
            value={asset.assetVoiceHandoff}
            onChange={handleInputChange}
            name="assetVoiceHandoff"
            /> <p />
          <input className="assetDetails" type="text-area"
            placeholder="Details" 
            value={asset.assetDetails}
            onChange={handleInputChange}
            name="assetDetails"
            /> <p />
          <input className="assetStatus" type="text"
            placeholder="Status" 
            value={asset.assetStatus}
            onChange={handleInputChange}
            name="assetStatus"
            /> <p />
          
          <Button onClick={saveAsset} type="submit">submit</Button>
           
        </div>
    </div>
  )
}
export default AddAsset