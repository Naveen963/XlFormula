import React, { useState } from 'react'
import { Search } from '../components/common/Search'
import { shortcuts } from '../data/data'
import { ListCard } from '../components/common/ListCard'

export const Home = () => {
    const [selectedChip, setSelectedChip] = useState('');
    return (
        <>
            <Search setSelectedChip={setSelectedChip} />
            <div className='flex-grow flex-shrink-0  md:flex  items-center justify-center  md:gap-4 m-4 md:m-0 md:my-4'>
                <ListCard items={shortcuts.keyboardshortcuts} type='Keyboard ShortCuts' page="/keyboardshortcuts" />
                <ListCard items={shortcuts.functions} type='Functions' page="/functions" />
                {/* <ListCard items={shortcuts.keyboardshortcuts} type='Keyboard ShortCuts' page="/keyboardshortcuts" /> */}
            </div>


        </>
    )
}
