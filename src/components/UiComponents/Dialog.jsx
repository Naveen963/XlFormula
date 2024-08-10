import React from 'react'
import { Dialog } from 'primereact/dialog';
import { functions } from '../../data/data';
import { Link } from 'react-router-dom';
import { Tooltip } from 'primereact/tooltip';

export const DialogUi = ({ visible, setVisible, dialogData }) => {

    const data = functions.find(c => c.function === dialogData?.name)

    return (
        <>
            <Tooltip target=".custom-target-icon" style={{ opacity: 0.4 }} />
            <Dialog header={dialogData?.header || ''} visible={visible} style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                <div className='flex justify-between'>
                    <p className='text-lg font-medium'>Example : <span className='text-xl font-semibold'>{data?.example}</span></p>
                    {/* <Link to={data?.externalLink} target="_blank" className='text-blue-600 hover:underline dark:text-blue-500 cursor-pointer  custom-target-icon' data-pr-tooltip="Click here to view in detail on external site" data-pr-position="right"
                        data-pr-at="right-25 top"
                        data-pr-my="right center-2">
                        <i className="pi pi-external-link" style={{ fontSize: '1.2rem' }} ></i>
                    </Link> */}
                </div>
                <img src={data?.imageUrl} className='m-auto' />

            </Dialog>
        </>
    )
}
