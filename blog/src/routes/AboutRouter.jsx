import React from 'react'
import Header from '../Header'
import Nav from '../Nav'
import Footer from '../Footer'

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
