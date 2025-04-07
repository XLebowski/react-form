// import React from 'react'
import Header from './Header'
import Menu from './Menu'
import { Outlet } from 'react-router-dom'
// import '../App.css'

export default function Layout() {
  return (
    <section className='layout-wrapper'>
        <Header />
        <main className='main'>
            <Menu />
            <Outlet />
        </main>
    </section>
  )
}
