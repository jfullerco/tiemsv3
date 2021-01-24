import React, {useState} from 'react'

function useSite(props) {

  const [siteDetail, setSiteDetail] = useState()
  
  const handleChange = (event) => {
    const {site} = event.site

    return setSiteDetail({site})

  }
  
}
export default {useSite, siteDetail}