import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import RestDBService from '../services/RestDBService'

const AddClient = (props) => {
  const initialSiteState = {
    id: null,
    site_name: "",
    site_add1: "",
    site_add2: "",
    site_city: "",
    site_state: "",
    site_zip: "",
    site_phone: "",
  }

  const {id} = useParams()
  
  const [site, setSite] = useState(initialSiteState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = event => {
    const { name, value } = event.target
    set({...client, [name]: value})
  }

  const saveSite = () => {
    var data = {
      site_name: site.site_name,
      site_add1: site.site_add1,
      site_add2: site.site_add2,
      site_city: site.site_city,
      site_state: site.site_state,
      site_zip: site.site_zip,
      site_phone: site.site_phone
    }
  

  RestDBService.createClient(data)
    .then(response => {
      setSite({
        site_name: response.data.site_name,
        site_add1: response.data.site_add1,
        site_add2: response.data.site_add2,
        site_city: response.data.site_city,
        site_state: response.data.site_state,
        site_zip: response.data.site_zip,
        site_phone: response.data.site_phone
      })
      setSubmitted(true)
      console.log(response.data)
    })
    .catch(e => {
      console.log(e)
    })   
  }
const newSite = () => {
  setSite(initialSiteState)
  setSubmitted(false)
}

  return (
    <div className="row">
      {submitted ? (
        <div>
          <h3>Site Added</h3>
          <button onClick={newSite}>Add Another</button>
        </div>
      ) : (
        <div className="four columns">
          <label htmlFor="site_name">Site Name</label>
          <input
            type="text"
            className="form-control"
            id="site_name"
            value={site.site_name}
            onChange={handleInputChange}
            name="site_name"
          />
        <label htmlFor="site_add1">Address 1</label>
          <input
            type="text"
            className="form-control"
            id="site_add1"
            value={site.site_add1}
            onChange={handleInputChange}
            name="site_add1"
          />
        <label htmlFor="site_add2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="site_add2"
            value={site.site_add2}
            onChange={handleInputChange}
            name="site_add2"
          />
        <label htmlFor="site_city">City</label>
          <input
            type="text"
            className="form-control"
            id="site_city"
            value={site.site_city}
            onChange={handleInputChange}
            name="site_city"
          />
        <label htmlFor="site_state">State</label>
          <input
            type="text"
            className="form-control"
            id="site_state"
            value={site.site_state}
            onChange={handleInputChange}
            name="site_state"
          />
          <label htmlFor="site_zip">Zip</label>
          <input
            type="text"
            className="form-control"
            id="site_zip"
            value={site.site_zip}
            onChange={handleInputChange}
            name="site_zip"
          />
          <label htmlFor="site_phone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="site_phone"
            value={site.site_phone}
            onChange={handleInputChange}
            name="site_phone"
          />
        <button onClick={saveSite}>Add</button>
        
        </div>
      )}
  </div>
  )
}

export default AddClient