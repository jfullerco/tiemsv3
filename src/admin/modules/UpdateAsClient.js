import React, {useState, useEffect} from 'react'
import RestDBService from '../../services/RestDBService'
import {useParams} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const UpdateAsClient = (props) => {
    const {id} = useParams()
    

    console.log(id)
    const [inputData, setInputData] = useState()
    const [url, setURL] = useState()
    const [submitted, setSubmitted] = useState(false)

    const handleInputChange = event => {
    var clientUpdate = event.target
    setInputData({...inputData, clientUpdate})
    }
    
    const handleURLChange = event => {
    const { url } = event.target
    setURL({...url})
    console.log(url)
    }

    const saveAsset = () => {
      var data = {
      inputData: inputData
    }
    
    RestDBService.createAsset(url, data) 
      .then(response => {
        setInputData({
          inputData: response.data, 
         
          _parent_id: id
        })

        console.log(response)
      })
    }
  
  return (
    <table>
      <th>Add Asset</th>
        <tr>
          <input className="url" type="text"
            placeholder="url" 
            value={url.data}
            onChange={handleURLChange}
            name="url"
            /> 
        </tr>
        <tr>
          <input className="inputData" type="text"
              placeholder="Data" 
              value={clientUpdate}
              onChange={handleInputChange}
              name="clientUpdate"
              />
        </tr>
         
          <p/>
          <Button onClick={saveAsset} type="submit">submit</Button>
           
        </table>
  )
}
export default UpdateAsClient