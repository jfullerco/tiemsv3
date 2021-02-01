import React, { useState, useEffect } from 'react'
import {Link, Route, useParams} from 'react-router-dom'
import RestDBService from '../services/RestDBService'

export function useClient() {
  const {id} = useParams()
  const [ client, setClient ] = useState([])
  const [ sites, setSites ] = useState()
  const [ assets, setAssets ] = useState([])
  
  useEffect(() => {
    retrieveClient(id)
    }, []
  )
console.log(sites)
  const retrieveClient = (id) => {
        RestDBService.getAllSites(id)
        .then(res => {
          setClient(res.data)
          setSites(res.data)
          console.log(res.data)
        })
        .catch(e => {
          
        })
      }

    return (
      {client, sites}
    )
}

