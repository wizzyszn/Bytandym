import React from 'react'
import Body from '../components/Body'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import UsePageTitle from '../hooks/UsePageTitle'

export default function Home() {
  UsePageTitle("Home")
  return (
    <div>
         <Navbar />
        <Header />
        <Body />
        <Footer />
    </div>
  )
}
