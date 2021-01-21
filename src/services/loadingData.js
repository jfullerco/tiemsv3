import React from 'react'

function LoadingData(Component) {
  return function LoadingDataComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />
    return (
      
    )
  }
}