import React, { useState, useEffect } from 'react'
import {Link, Route, useParams} from 'react-router-dom'
import RestDBService from '../services/RestDBService'

export function useClient() {
  const {id} = useParams()
  const [ client, setClient ] = useState([])
  const [ sites, setSites ] = useState([])
  const [ assets, setAssets ] = useState([])
  
  useEffect(() => {
    retrieveClient(id)
    }, []
  )

  const retrieveClient = (id) => {
        RestDBService.getClient(id)
        .then(res => {
          setClient(res.data)
          setSites(res.data.sites)
          setAssets(res.data.assets)
        })
        .catch(e => {
          console.log()
        })
      }

    return (
      {client, sites, assets}
    )
}

