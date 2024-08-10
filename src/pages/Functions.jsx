import React, { useState, useEffect } from "react";
import Chipss from "../components/common/Chips";
import Table from "../components/common/Table";
import { FilterMatchMode } from 'primereact/api';
import { shortcuts } from "../data/data";
import Loading from "../components/UiComponents/Loading";
import { useLocation } from "react-router-dom";

const chips = shortcuts.functions.filter((c, idx, arr) => arr.findIndex(f => f.type == c.type) == idx).map((c) => ({ label: c.type, ...c }))

export const Functions = () => {
    const [selectedChip, setSelectedChip] = useState("");
    const [loading, setLoading] = useState(true)
    const location = useLocation();
    const columns = [
        { label: "Type", code: "type" },
        { label: "Function Name", code: "function" },
        { label: "Syntax", code: "syntax" },
        { label: "Description", code: "description" },
    ];
    const [rows, setRows] = useState([]);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        type: { value: null, matchMode: FilterMatchMode.CONTAINS },
        funcname: { value: null, matchMode: FilterMatchMode.CONTAINS },
        syntax: { value: null, matchMode: FilterMatchMode.CONTAINS },
        description: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    useEffect(() => {
        if (selectedChip && selectedChip != 'none')
            setRows(
                shortcuts.functions
                    .filter((c) => {
                        return c.type == selectedChip.label;
                    })
            );
        else if (location?.state?.chip && !selectedChip) {
            setRows(
                shortcuts.functions
                    .filter((c) => {
                        return c.type == location?.state?.chip;
                    })
            );
        }
        else
            setRows(shortcuts.functions);
        setLoading(false);
        const t = setTimeout(() => setLoading(false), 1000);
        () => {
            clearTimeout(t)
        }
    }, [selectedChip, setSelectedChip]);

    return (
        <>
            {loading ? <Loading /> : <div className="m-10 flex-col space-y-2">
                <Chipss chips={chips} setSelectedChip={setSelectedChip} chip={location?.state?.chip} />
                <Table rows={rows} columns={columns} setFilters={setFilters} filters={filters} />
            </div>}
        </>
    );
};
