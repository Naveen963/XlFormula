
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { IconField } from 'primereact/iconfield';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DialogUi } from '../UiComponents/Dialog';

const Table = ({ rows, columns, setFilters, filters }) => {
    const navigate = useNavigate();
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [showDialog, setShowDialog] = useState(false)
    const [dialogData, setDialogData] = useState()
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
    const exampleDialogHandler = (e, row, openDialog) => {
        e.stopPropagation();
        setDialogData({ header: `Function: ${row.function} | Type : ${row.type}`, type: row.type, name: row.function })
        setShowDialog(openDialog ? true : false);
    }

    const exampleTemplate = (e, col) => {
        return <i className={`pi pi-file ${e.example ? 'text-emerald-400' : 'text-gray-400 cursor-not-allowed'}`} onClick={(event) => exampleDialogHandler(event, e, e.example)} style={{ fontSize: '1.5rem' }}></i>
    }

    const header = renderHeader();
    return (
        <>
            <DialogUi visible={showDialog} setVisible={setShowDialog} dialogData={dialogData} />
            <DataTable stripedRows className='mx-10' filters={filters} value={rows} paginator rows={10} removableSort globalFilterFields={['type', 'windshortcut', 'macshortcut', 'description']} header={header} paginatorClassName='bg-gray-200' rowClassName="hover:bg-blue-50 cursor-pointer"
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" currentPageReportTemplate="{first} to {last} of {totalRecords}" rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }} >
                {columns.map(((col, index) =>
                    col?.customCol ? <Column key={index} className='cursor-pointer' header="Example" body={(e, col) => exampleTemplate(e, col)} sortable style={{ width: '25%' }} /> :
                        <Column key={index} field={col.code} header={col.label} sortable style={{ width: '25%' }} />))
                }
            </DataTable>
        </>
    )
}

export default Table