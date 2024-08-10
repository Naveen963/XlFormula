import React, { useState } from 'react';
import { AutoComplete } from "primereact/autocomplete";
import { Button } from 'primereact/button';
import { dataCategories } from '../../types/dataCategories';
import { shortcuts } from '../../data/data';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
    const [selectedInput, setSelectedInput] = useState(null);
    const [filteredInputs, setFilteredInputs] = useState(null);
    const navigate = useNavigate();
    const searchSuggestions = dataCategories.map((category) => {
        return ({ label: category.label, code: category.code, items: shortcuts[category.code].map(item => ({ label: item.type, value: item.type, code: category.code, type: item.type })).filter((c, idx, arr) => arr.findIndex(f => f.label == c.label) == idx) })
    })
    searchSuggestions.push(...searchSuggestions.filter(c => c.code == 'functions').map(c => c.items)[0].map(type => ({
        label: type.label, code: 'functions', items: shortcuts.functions.filter(c => c.type == type.label).map(f => ({ label: f.function, code: type.code, value: f.function, type: type.label }))

    })))

    const groupedItemTemplate = (item) => {
        return (
            <div className="flex align-items-center">
                <div>{item.label}</div>
            </div>
        );
    };

    const search = (event) => {
        let query = event.query;
        let _filteredInputs = [];

        for (let country of searchSuggestions) {
            let filteredItems = country.items.filter((item) => item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1);

            if (filteredItems && filteredItems.length) {
                _filteredInputs.push({ ...country, ...{ items: filteredItems } });
            }
        }

        setFilteredInputs(_filteredInputs);
    }
    const selectHandler = (e) => {
        navigate(`/${e.value.code}`, { state: { chip: e.value.type } })
    }

    return (
        <div className="flex justify-center items-center my-8">
            <AutoComplete autoComplete='on' autoFocus value={selectedInput} onChange={(e) => setSelectedInput(e.value)} onSelect={selectHandler} suggestions={filteredInputs} completeMethod={search} panelClassName="w-1/6" className='w-4/12 border-2 border-l-2 border-b-slate-300 border-r-0  ' inputClassName="w-full outline-none p-1.5 border-0 ring-0"
                field="label" optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} placeholder="Search...." />
            <Button icon="pi pi-search" className="py-[7px] p-2  outline-none   ring-0 rounded-l-none -ml-5 border-l-0 bg-emerald-500" aria-label="Search" />
        </div>
    )
}
