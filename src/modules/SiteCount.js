import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import RestDBService from '../services/RestDBService'
import SiteList from './SiteList'
import '../style.css'

function SiteCount(props) {
  const {id} = useParams()
  const {sites} = props
  console.log(sites)

return (
  
    <div className="widget">
     <table>
      <th>Sites</th>
        <tbody>
          <tr>
            <Link to={`/client/${id}/siteList`}>{sites.length}</Link>
          </tr>
        </tbody>
    </table>
    </div>
  )
}
export default SiteCount