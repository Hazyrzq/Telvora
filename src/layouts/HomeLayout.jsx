import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/index.css'

const HomeLayout = () => {
  return (
    <div className="home-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default HomeLayout
