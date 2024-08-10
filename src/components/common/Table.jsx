
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { IconField } from 'primereact/iconfield';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Table = ({ rows, columns, setFilters, filters }) => {
    const navigate = useNavigate();
    const [globalFilterValue, setGlobalFilterValue] = useState('');
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
        <DataTable stripedRows className='mx-10' filters={filters} value={rows} paginator rows={10} removableSort globalFilterFields={['type', 'windshortcut', 'macshortcut', 'description']} header={header} paginatorClassName='bg-gray-200' rowClassName="hover:bg-blue-50" onRowClick={(e) => navigate(`/functions/${e.data.function}`)}
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" currentPageReportTemplate="{first} to {last} of {totalRecords}" rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }} >
            {columns.map(((col, index) =>
                <Column className='cursor-pointer' key={index} field={col.code} header={col.label} sortable style={{ width: '25%' }} />))
            }
        </DataTable>
    )
}

export default Table