import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import SiteDetail from './modules/SiteDetail'

const Details = () => {
  return (
    
    <Switch>
    <Route path='/siteList/:sid' component={SiteDetail} />
    </Switch>
    
  )
}
export default Details