import React, {useState} from 'react'

const useSite = (props) => {

  const [siteDetail, setSiteDetail] = useState()
  const handleChange = (event) => {
    setSiteDetail(event.site)
  }

}