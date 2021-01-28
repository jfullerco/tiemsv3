import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import '../style.css'

function SiteCount(props) {
  const {id} = useParams()
  const {sites} = props
  console.log(sites)

return (
  
    <div className="widget"> 
      <h2>Sites</h2>
        <Link to={`/client/${id}/siteList`}>
              {sites.length}
        </Link>
    </div>
  )
}
export default SiteCount