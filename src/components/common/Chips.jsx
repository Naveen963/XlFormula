import React, { useState } from 'react'
import { Chip } from 'primereact/chip';
const Chipss = ({ setSelectedChip }) => {
    const [chips, setChips] = useState(["Navigating Worksheets",
        "Selecting Cells",
        "Editing Cells",
        " Formatting Cells",
        "Editing Data & Formulas"
    ])

    const [clickedChip, setClickedChip] = useState(-1)
    const clickedChipHandler = (e, chip) => {
        const index = chips.indexOf(chip)
        setClickedChip(index)
        setSelectedChip(chip)
    }
    return (
        <div className='hidden md:flex justify-center items-center'>
            {chips.map((chip, index) => <Chip label={`# ${chip}`} className={`mr-2 mb-2 cursor-pointer hover:bg-emerald-500 hover:text-white ${index == clickedChip ? 'bg-emerald-500 text-white' : ''}`} onClick={(e) => clickedChipHandler(e, chip)} />)}
        </div>
    )
}

export default Chipss   