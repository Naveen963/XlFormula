import React, { useEffect, useState } from 'react'
import { Chip } from 'primereact/chip';
const Chipss = ({ setSelectedChip, chips, chip: selectedChip }) => {
    const [clickedChip, setClickedChip] = useState(-1)
    useEffect(() => {
        if (selectedChip) {
            const index = chips.findIndex(c => c.label == selectedChip)
            setClickedChip(prev => clickedChip == index ? -1 : index)
            setSelectedChip('')
        }
    }, [selectedChip])

    const clickedChipHandler = (e, chip) => {
        const cIndex = chips.findIndex(c => c.label == chip.label)
        setClickedChip(prev => clickedChip == cIndex ? -1 : cIndex)
        setSelectedChip((prev) => cIndex == clickedChip ? 'none' : chip)
    }
    return (
        <div className='hidden md:flex justify-center items-center'>
            {chips.map((chip, index) => <Chip key={index} label={`${index == clickedChip ? '✓' : '#'} ${chip.label}`} className={`mr-2 mb-2 cursor-pointer hover:bg-emerald-500 hover:text-white ${index == clickedChip ? 'bg-emerald-500 text-white' : ''}`} onClick={(e) => clickedChipHandler(e, chip)} />)}
        </div>
    )
}

export default Chipss   