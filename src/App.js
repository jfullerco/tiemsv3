import React from "react";
import {Link, Switch, Route} from 'react-router-dom'

import ClientDashboard from './components/ClientDashboard'
import ClientDetail from './components/ClientDetail'
import AddClient from './components/AddClient'
import SiteCount from './modules/SiteCount'
import SiteList from './modules/SiteList'
import SiteDetail from './modules/SiteDetail'
import AddAsset from './components/AddAsset'
import UpdateAsClient from './admin/modules/UpdateAsClient'

import './style.css'

function App() {

  return (    
      <Switch>
        <div>
          <Route exact path="/">TIEMS Home</Route>
          <Route exact path="/clients" component={ClientDashboard} />
          <Route path="/clients/:id" component={ClientDetail} />
          <Route path="/addClient" component={AddClient} />
          
          <Route path="/client/:id/siteList" component={SiteList} />
          <Route path='/addAsset/:id' component={AddAsset} />

          <Route path='/admin/client/:id' component={UpdateAsClient} />

        </div>    
      </Switch>
  );
}
export default App