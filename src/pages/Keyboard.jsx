import React, { useState } from 'react'
import Chipss from '../components/common/Chips';
import Table from '../components/common/Table';

export const KeyBoard = () => {
    const [selectedChip, setSelectedChip] = useState('');
    return (
        <div className='m-10 flex-col space-y-2'>
            <Chipss setSelectedChip={setSelectedChip} />
            <Table selectedChip={selectedChip} />
        </div>
    )
}
