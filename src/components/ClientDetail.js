import React, {useState, useEffect} from 'react'
import {Link, Route, useParams} from 'react-router-dom'
import {useClient} from '../hooks/useClient'

function ClientDetail() {

const {id} = useParams()
const {client} = useClient()
useEffect(() => {
  
}), []

console.log(client)
return (
  <div>test</div>
)
}
export default ClientDetail