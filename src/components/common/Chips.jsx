import React, { useState } from 'react'
import { Chip } from 'primereact/chip';
const Chipss = ({ setSelectedChip }) => {
    const [chips, setChips] = useState([
        { label: "Navigating Worksheets", code: 'navigatingworksheets' },
        { label: "Selecting Cells", code: 'selectingcells' },
        { label: "Editing Cells", code: 'editingcells' },
        { label: " Formatting Cells", code: 'formattingcells' },
        { label: "Editing Data", code: 'editingdata' },
        { label: "Working With Worksheets & Workbooks", code: 'worksheets' },
        { label: "Miscellaneous", code: 'miscellaneous' }
    ])

    const [clickedChip, setClickedChip] = useState(-1)
    const clickedChipHandler = (e, chip) => {
        const index = chips.findIndex(c => c.label == chip.label)
        setClickedChip(prev => clickedChip == index ? -1 : index)
        setSelectedChip(clickedChip == index ? '' : chip)
    }
    return (
        <div className='hidden md:flex justify-center items-center'>
            {chips.map((chip, index) => <Chip key={index} label={`${index == clickedChip ? '✓' : '#'} ${chip.label}`} className={`mr-2 mb-2 cursor-pointer hover:bg-emerald-500 hover:text-white ${index == clickedChip ? 'bg-emerald-500 text-white' : ''}`} onClick={(e) => clickedChipHandler(e, chip)} />)}
        </div>
    )
}

export default Chipss   