import React, { useState, useEffect } from 'react'
import {Link, Route, useParams} from 'react-router-dom'

const useSites = () => {

  const [ sites, setSites ] = useState([])

  return sites

}
export default useSites
