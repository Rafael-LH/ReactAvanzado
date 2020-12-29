import React from 'react'
import { Logo } from '@components/Logo'
import { NavBar } from '@components/NavBar'

export const Layout = ({ children }) => (
  <>
    <Logo />
    {children}
    <NavBar />
  </>
) 