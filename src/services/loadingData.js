import React from 'react'

function LoadingData(Component) {
  return function LoadingDataComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />
    return (
      <img src='./45.gif' />
    )
  }
}
export default LoadingData