<Accordion > 
          <Card>
            
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <Card.Header>Tickets</Card.Header>
            </Accordion.Toggle>
            
            <Accordion.Collapse eventKey="0">    
              <Card.Body>
                {tickets.map(ticket => (
                    <div key="ticket._id"> {ticket.ticket_num} </div>
                  )
                )}
              </Card.Body>
            </Accordion.Collapse>

          </Card>
        </Accordion>
      <p />

        <Accordion > 
          <Card>
            
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <Card.Header>Assets</Card.Header>
            </Accordion.Toggle>
            
            <Accordion.Collapse eventKey="0">    
              <Card.Body>
                {assets.map(asset => (
                    <div key="asset._id"> {asset.assetID} </div>
                  )
                )}
              </Card.Body>
            </Accordion.Collapse>

          </Card>
        </Accordion>



        //from client detail

        <Accordion > 
          <Card>
            
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <Card.Header>Sites</Card.Header>
            </Accordion.Toggle>
            
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                  {sites ? (
                    sites.map(site => (
                    <ul><Link to={`/sites/${site._id}`} key="site._id">
                      {site.site_name} 
                    </Link></ul>
                    ))
                  ):(
                    "No Sites"
                    )
                  }
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>