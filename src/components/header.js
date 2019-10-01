import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Logo from "./logo"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <header className="font-display">
      <nav>
        <div className="flex flex-wrap items-center justify-between p-4 md:p-8">
          <Link to="/" className="flex flex-1  items-center no-underline pr-4">
            <span className="text-5xl font-bold md:text-6xl lg:text-7xl">
              <Logo className="inline h-10 w-10 pr-2 md:h-20 md:w-20 lg:h-32 lg:w-32" />
              {siteTitle}
            </span>
          </Link>

          <button
            type="button"
            className="block md:hidden flex items-center"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="h-8 w-8"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } md:block md:flex md:items-center w-full md:w-auto`}
          >
            <div className="">
              <Link
                className="block md:inline-block mt-4 md:mt-0 mr-6 hover:line-through focus:line-through active:line-through"
                activeStyle={{ textDecoration: "underline" }}
                to="/about/"
              >
                About
              </Link>

              <Link
                className="block md:inline-block mt-4 md:mt-0 mr-6 hover:line-through focus:line-through active:line-through"
                activeStyle={{ textDecoration: "underline" }}
                to="/blog/"
              >
                Blog
              </Link>

              <Link
                className="block md:inline-block mt-4 md:mt-0 mr-6 hover:line-through focus:line-through active:line-through"
                activeStyle={{ textDecoration: "underline" }}
                to="/contact/"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
