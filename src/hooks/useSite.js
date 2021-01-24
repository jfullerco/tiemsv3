import React, {useState} from 'react'

export function useSite(props) {

  const [siteDetail, setSiteDetail] = useState([])
  console.log(props)
  return [siteDetail, setSiteDetail, handleChange]
}
