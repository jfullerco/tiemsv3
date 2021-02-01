import React, {useState, useEffect} from 'react'
import RestDBService from '../services/RestDBService'

export function useSiteDetail(props) {
  const siteDetailID = props
  const [siteDetail, setSiteDetail] = useState([])
  
  useEffect(() => {
    retrieveSiteDetails(siteDetailID)
  })
  
  const retrieveSiteDetails = (id, siteDetailID) => {
    RestDBService.getSite(id, siteDetailID)
    .then(res => {
      setSiteDetail(res.data[0])
      console.log(res.data)
    })
      .catch(e => {
      
      })
    }
  }

  return (
    <div>
      {siteDetail ? (
                <div>
                {siteDetail.site_name}<p/>
                {siteDetail.site_add1}<br/>
                {siteDetail.site_add2}
                {siteDetail.site_city}, {siteDetail.site_state} {siteDetail.site_zip}
                </div>    
                  ):(
                "No Site Choosen"
                  )
            }      
    </div>
  )
}
