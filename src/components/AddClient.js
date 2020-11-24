import React, {useState} from 'react'
import RestDBService from '../services/RestDBService'

const AddClient = () => {
  const initialClientState = {
    id: null,
    client_name: "",
    submitted: false
  }

  const [client, setClient] = useState(initialClientState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = event => {
    const { name, value } = event.target
    setClient({...client, [name]: value})
  }

  const saveClient = () => {
    var data = {
      client_name: client.client_name
    }
  

  RestDBService.createClient(data)
    .then(response => {
      setClient({
        client_name: response.data.client_name
      })
      setSubmitted(true)
      console.log(response.data)
    })
    .catch(e => {
      console.log(e)
    })   
  }
const newClient = () => {
  setClient(initialClientState)
  setSubmitted(false)
}

  return (
    <div className="add-client-form">
      {submitted ? (
        <div>
          <h3>Client Added</h3>
          <button onClick={newClient}>Add Another</button>
        </div>
      ) : (
        <div className="form-group">
          <label htmlFor="client_name">Client Name</label>
          <input
            type="text"
            className="form-control"
            id="client_name"
            value={client.client_name}
            onChange={handleInputChange}
            name="client_name"
          />
        <button onClick={saveClient}>Add</button>
        </div>
      )}
  </div>
  )
}

export default AddClient