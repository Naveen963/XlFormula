import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/common/Navbar'

export const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
