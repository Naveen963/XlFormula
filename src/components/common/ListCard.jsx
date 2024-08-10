import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const ListCard = ({ items, type, className, page }) => {
    const navigate = useNavigate()
    const [list, setList] = useState([])
    useEffect(() => {
        setList(items.filter((c, idx) => items.findIndex(f => f.type == c.type) == idx).slice(0, 7))
    }, [items])
    return (
        <div className="w-full max-w-md p-4 bg-gradient-to-b from-emerald-50 to-emerald-200  border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{type}</h5>
                <NavLink to={page} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 cursor-pointer">
                    View all
                </NavLink>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-black dark:divide-gray-700">
                    {list.map((c, idx) =>
                        <li className="py-3 sm:py-4 hover:bg-white cursor-pointer hover:scale-110" onClick={() => navigate(page, { state: { chip: c.type } })} key={idx}>
                            <div className="flex items-center ">
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-md font-medium text-gray-900 truncate dark:text-white">
                                        {c.type}
                                    </p>
                                </div>
                                {/* <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $320
                            </div> */}
                            </div>
                        </li>)}
                </ul>
            </div>
        </div>

    )
}

