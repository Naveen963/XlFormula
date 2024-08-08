import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { shortcuts } from '../../data/data';



const Table = ({ selectedChip }) => {
    const [rows, setRows] = useState(shortcuts.keyboardshortcuts)
    useEffect(() => {
        let data = []
        if (selectedChip)
            setRows(shortcuts.keyboardshortcuts.filter((c) => {
                return c.type.includes(selectedChip.split(' ')[0].toLowerCase())
            }).map((c) => {
                return ({ ...c, type: c.type[0].toUpperCase() + c.type.slice(1) })
            }))
        else setRows(shortcuts.keyboardshortcuts.map((c) => {
            return ({ ...c, type: c.type[0].toUpperCase() + c.type.slice(1) })
        }))
    }, [selectedChip])
    return (
        <DataTable stripedRows className='mx-10 ' value={rows} tableStyle={{ minWidth: '50rem' }} >
            <Column field="type" header="Type" sortable style={{ width: '25%' }}>sdasd</Column>
            <Column field="windshortcut" header="Window ShortCut" sortable style={{ width: '25%' }} ></Column>
            <Column field="macshortcut" header="Mac ShortCut" sortable style={{ width: '25%' }}></Column>
            <Column field="description" header="Description" sortable style={{ width: '45%' }}></Column>
        </DataTable>
    )
}

export default Table