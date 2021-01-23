import React from "react";
import {Link, Switch, Route} from 'react-router-dom'

import ClientDashboard from './components/ClientDashboard'
import ClientDetail from './components/ClientDetail'
import OrderDetail from './components/OrderDetail'
import TicketDetail from './components/TicketDetail'
import AddClient from './components/AddClient'
import SiteDashboard from './components/SiteDashboard'
import SiteCount from './modules/SiteCount'
import SiteList from './modules/SiteList'
import SiteDetail from './modules/SiteDetail'
import AssetDetail from './components/AssetDetail'
import AddAsset from './components/AddAsset'
import ClientAdmin from './admin/components/ClientAdmin'
import UpdateAsClient from './admin/modules/UpdateAsClient'

import './style.css'

function App() {

  return (
    <div>
      
      <div className="navbar">
   
          <Link to="/" className="navbar-link">
            Dashboard
          </Link>
          <Link to="/clients" className="navbar-link">
            Clients
          </Link>
          <Link to="/orders" className="navbar-link">
            Orders
          </Link>
          <Link to="/tickets" className="navbar-link">
            Tickets
          </Link>
          <Link to="/admin" className="navbar-link">
            Admin
          </Link>
       
      
      </div>
      
      <div className="main-contain">
      <Switch>
          <Route exact path="/">TIEMS Home</Route>

          <Route exact path="/clients" component={ClientDashboard} />
          <Route path="/clients/:id" component={ClientDetail} />
          <Route path="/addClient" component={AddClient} />

          <Route path="/client/:id/siteCount" component={SiteCount} />
          <Route path="/client/:id/siteList" component={SiteList} />
          

          
          <Route path="/assets/:id" component={AssetDetail} />
          <Route path='/addAsset/:id' component={AddAsset} />

          <Route exact path='/admin' component={ClientAdmin} />

          <Route path='/admin/client/:id' component={UpdateAsClient} />
      </Switch>
      </div>
        <div className="footbar">
          
        </div>  
     </div>
  );
}
export default App