import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'

const ProductList = props => {
  // console.log(props)

  function handleClick(e) {
    e.preventDefault()
    console.log('The link was clicked.', e.target.id)
    props.updateProductID(e.target.id)
  }

  useEffect(() => {}, [])
  return (
    <>
      <p>
        <strong>
          <a id={props.pID} href="#" onClick={handleClick}>
            {props.pName}
          </a>{' '}
        </strong>
      </p>
    </>
  )
}

export default ProductList
