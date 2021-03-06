import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact form to get in touch with developer" description="Contact Form" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/xleoazvo" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control" />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control" />
              <textarea
                name="message"
                placeholder="message"
                rows="5"
                className="form-control">
              </textarea>
            </div>
            <button type="submit" className="submit-btn btn">submit here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
