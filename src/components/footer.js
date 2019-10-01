import React from "react"

const Footer = () => (
  <footer className="border-t-2 border-black mx-2">
    <div className="flex justify-between max-w-4xl p-4 md:p-8 text-sm font-display">
      <div>
        <p> O.P.E. Technology 2019</p>
        <p>
          Built with{" "}
          <a
            className="underline hover:line-through focus:line-through active:line-through"
            href="https://www.gatsbyjs.org/"
          >
            Gatsby.
          </a>{" "}
          Hosted on
          <a
            className="underline hover:line-through focus:line-through active:line-through"
            href="https://www.netlify.com/"
          >
            {" "}
            Neltify.
          </a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
