import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import RestDBService from '../services/RestDBService'
import SiteList from './SiteList'
import '../style.css'

function SiteCount(props) {
  const {count} = props
  console.log(count)

return (
  
    <div className="widget">
     <table>
      <th>Sites</th>
      <tr>
        {count}
    </tr>
    </table>
    </div>
  )
}
export default SiteCount