import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/common/Navbar'
import { Search } from '../components/common/Search'
import Table from '../components/common/Table'

export const Home = () => {
    const [selectedChip, setSelectedChip] = useState('');
    return (
        <>
            <Navbar />
            <Search setSelectedChip={setSelectedChip} />
            <Table selectedChip={selectedChip} />
            <Outlet />
        </>
    )
}
