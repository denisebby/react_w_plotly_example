import React from 'react'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <div className="header-header">
      <h2 className="header-heading">{props.Heading}</h2>
    </div>
  )
}

Header.defaultProps = {
  Heading: "Denis Ebby's Stuff",
}

Header.propTypes = {
  Heading: PropTypes.string,
}

export default Header
