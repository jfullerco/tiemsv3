import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import SiteDetail from './modules/SiteDetail'

const Details = () => {
  return (
    <div className="details">
    
    <Route path='/client/:id/site:sid' component={SiteDetail} />
    
    </div>
  )
}
export default Details