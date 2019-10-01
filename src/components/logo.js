import React from "react"

const Logo = ({ className }) => {
  return (
    <svg
      width={120}
      height={120}
      viewBox="0 0 244 244"
      role="img"
      className={className}
    >
      <title>logo</title>
      <g fill="none" fillRule="evenodd" transform="rotate(45 107.122 113.533)">
        <path
          stroke="#000"
          strokeWidth={20}
          d="M123.5 0.853L0.704 79 123.5 157.147 246.296 79z"
        />
        <path
          stroke="#000"
          strokeWidth={20}
          d="M123.5 30.853L0.704 109 123.5 187.147 246.296 109z"
        />
        <path
          stroke="#000"
          strokeWidth={20}
          d="M123.5 60.853L0.704 139 123.5 217.147 246.296 139z"
        />
        <path
          fill="#000"
          d="M76.036 107.992L123.5 78.89 170.281 107.992 123.5 138.809z"
        />
      </g>
    </svg>
  )
}

export default Logo
