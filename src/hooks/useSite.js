import React, {useState} from 'react'

function useSite(props) {

  const [siteDetail, setSiteDetail] = useState([])
  const event = props
  const handleChange = (event) => {
    const {site} = event.site
    setSiteDetail({site})
  }
  return {siteDetail}
}
export default {useSite}