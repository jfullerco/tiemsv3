import React, {useState} from 'react'

export function useSite(props) {

  const [siteDetail, setSiteDetail] = useState([])
  
  return [siteDetail, setSiteDetail]
}
