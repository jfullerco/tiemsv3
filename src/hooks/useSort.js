import React, {useState, useEffect} from 'react'

const useSort = (props) => {

  const {fieldToSort} = props
  const {dataToSort} = props
  const [sortedData, setSortedData] = useState([])

  const sortingData = (fieldToSort, dataToSort) => {
    let field = fieldToSort
    setSortedData(dataToSort.sort((a, field) => (a.field) ? 1 : -1))
  }

  console.log(sortedData)

  return 
    {sortedData}
} 
