import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { shortcuts } from '../../data/data';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

const Table = ({ selectedChip }) => {
    const [rows, setRows] = useState(shortcuts.keyboardshortcuts)
    const [loading, setLoading] = useState(true)
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    useEffect(() => {
        let data = []
        if (selectedChip)
            setRows(shortcuts.keyboardshortcuts.filter((c) => {
                return c.type == selectedChip.code
            }).map((c) => {
                return ({ ...c, type: c.type[0].toUpperCase() + c.type.slice(1) })
            }))
        else setRows(shortcuts.keyboardshortcuts.map((c) => {
            return ({ ...c, type: c.type[0].toUpperCase() + c.type.slice(1) })
        }))
        setLoading(false)
    }, [selectedChip])

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        type: { value: null, matchMode: FilterMatchMode.CONTAINS },
        windshortcut: { value: null, matchMode: FilterMatchMode.CONTAINS },
        macshortcut: { value: null, matchMode: FilterMatchMode.CONTAINS },
        description: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;
        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-end">
                <IconField iconPosition="left" className='w-3/12'>
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Search..." className='border-2 font-medium w-full p-1' />
                </IconField>
            </div>
        );
    };

    const header = renderHeader();
    return (
        <DataTable stripedRows className='mx-10' filters={filters} loading={loading} value={rows} paginator rows={10} removableSort globalFilterFields={['type', 'windshortcut', 'macshortcut', 'description']} header={header} paginatorClassName='bg-gray-200'
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" currentPageReportTemplate="{first} to {last} of {totalRecords}" rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }} >
            <Column field="type" header="Type" sortable style={{ width: '25%' }}>sdasd</Column>
            <Column field="windshortcut" header="Window ShortCut" sortable style={{ width: '25%' }} ></Column>
            <Column field="macshortcut" header="Mac ShortCut" sortable style={{ width: '25%' }}></Column>
            <Column field="description" header="Description" sortable style={{ width: '45%' }}></Column>
        </DataTable>
    )
}

export default Table