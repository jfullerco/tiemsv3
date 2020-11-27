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
    <table>
      <th>Add Asset</th>
        <tr>
          <input className="assetID" type="text"
            placeholder="Asset ID" 
            value={asset.assetID}
            onChange={handleInputChange}
            name="assetID"
            /> 
        </tr>
        <tr>
          <input className="assetType" type="text"
              placeholder="Asset Type" 
              value={asset.assetType}
              onChange={handleInputChange}
              name="assetType"
              />
        </tr>
        <tr>
          <input className="assetHostName" type="text"
            placeholder="Host Name"
            value={asset.assetType}
            onChange={handleInputChange}
            name="assetHostName" 
            />
        </tr>
        <tr>
          <input className="assetBandwidth" type="text"
            placeholder="Bandwidth" 
            value={asset.assetBandwidth}
            onChange={handleInputChange}
            name="assetBandwidth"
            />
        </tr>  
        <tr>
          <input className="assetAccessHandoff" type="text"
            placeholder="Access Handoff" 
            value={asset.assetAccessHandoff}
            onChange={handleInputChange}
            name="assetAccessHandoff"
            />
        </tr>  
        <tr>
          <input className="assetVoiceHandoff" type="text"
            placeholder="Voice Handoff" 
            value={asset.assetVoiceHandoff}
            onChange={handleInputChange}
            name="assetVoiceHandoff"
            />
        </tr>  
        <tr>
          <input className="assetDetails" type="textarea"
            placeholder="Details" 
            value={asset.assetDetails}
            onChange={handleInputChange}
            name="assetDetails"
            /> 
        </tr>  
        <tr>
          <input className="assetStatus" type="text"
            placeholder="Status" 
            value={asset.assetStatus}
            onChange={handleInputChange}
            name="assetStatus"
            />
        </tr>  
          <p/>
          <Button onClick={saveAsset} type="submit">submit</Button>
           
        </table>
  )
}
export default AddAsset