import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button'
import Chips from './Chips';
export const Search = ({ setSelectedChip }) => {
    const [value, setValue] = useState('')

    return (
        <>
            <div className="flex justify-center items-center my-8">
                <input type="text" className='border-2 w-4/12 p-1.5 outline-none border-l-2  border-r-0 border-b-slate-300' id="in" value={value} onChange={(e) => setValue(e.target.value)} />
                <Button icon="pi pi-search" className="py-[7px] p-2  rounded-l-none -ml-5 border-l-0 bg-emerald-500" aria-label="Search" />
            </div>
            <Chips setSelectedChip={setSelectedChip} />
        </>
    )
}

