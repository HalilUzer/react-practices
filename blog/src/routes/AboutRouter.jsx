import React from 'react'
import Header from '../Header.jsx'
import Nav from '../Nav.jsx'
import Footer from '../Footer.jsx'

export default function AboutRouter() {
  return (
    <div className='AboutPage'>
      <Header />
      <Nav />
      <main>
        <h2>About</h2>
        <p style={{ marginTop: "1rem" }}>This is a blog.</p>
      </main>
      <Footer />
    </div>
  )
}
