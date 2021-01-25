import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import RestDBService from '../services/RestDBService'
import '../style.css'

const SiteDetail = (props) => {
  
  const {id} = useParams()
  const {site} = props

  return (
    <div>
      {site ? (
                <div>
                {site.site_name}<p/>
                {site.site_add1}<br/>
                {site.site_add2}
                {site.site_city}, {site.site_state} {site.site_zip}
                </div>    
                  ):(
                "No Site Choosen"
                  )
            }
      
      
      <p/>
        
        
            
    </div>
  )
}
export default SiteDetail