import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

const ContactPage = props => {
  const { location } = props
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Get in touch"
        pathname={location.pathname}
      />
      <section className="max-w-3xl sm:p-4">
        <div>
          <h1>Contact Us</h1>
          <p className="leading-loose mb-8">We&#39;d love to hear from you.</p>
          <form
            name="contact"
            method="POST"
            action="/success/"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className=" md:w-1/2"
          >
            <input type="hidden" name="form-name" value="contact" />
            <span
              style={{
                visibility: `hidden`,
              }}
            >
              <label htmlFor="bot-field">
                Don’t fill this out if youre human: <input name="bot-field" />
              </label>
            </span>
            <label className="block mb-2" htmlFor="name">
              Your Name:{" "}
              <input
                type="text"
                name="name"
                placeholder="name"
                required
                maxLength="30"
                className="appearance-none block bg-gray-200 mb-6 px-3 py-2 border-2 border-gray-200 rounded text-gray-700 w-full focus:outline-none focus:bg-white"
              />
            </label>

            <label className="block mb-2" htmlFor="email">
              Your Email:
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                required
                className="appearance-none block bg-gray-200 mb-6 px-3 py-2 border-2 border-gray-200 rounded text-gray-700 w-full focus:outline-none focus:bg-white"
              />
            </label>
            <label className="block mb-2" htmlFor="message">
              Message:
              <textarea
                name="message"
                rows="8"
                required
                maxLength="200"
                placeholder="your message...."
                className="appearance-none bg-gray-200 mb-6 px-3 py-2 border-2 border-gray-200 rounded text-gray-700 w-full focus:outline-none focus:bg-white"
              />
            </label>
            <button
              className="bg-gray-200   hover:bg-green-400 focus:bg-green-400 active:bg-green-400 px-4 py-2 rounded"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
