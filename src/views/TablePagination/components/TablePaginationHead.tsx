import {Input, TableCell, TableHead, TableRow, TableSortLabel} from "@mui/material";
import * as React from "react";
import {Data, HeadCell} from "../TablePagination";

interface Props {
    orderBy: string;
    order: 'asc' | 'desc';
    setOrder: (value: 'asc' | 'desc') => void;
    setOrderBy: (value: string) => void;
    data: Data[];
    columns: HeadCell[];
    setPage: (value: number) => void;
    setRowsPerPage: (value: number) => void;
    rowsPerPage: number;
}

export const TablePaginationHead = (props:Props) => {
    const {orderBy, order, setOrder, setOrderBy, data, columns, setPage, setRowsPerPage, rowsPerPage} = props

    const handleChangePageValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(Number(e.target.value) > data.length || Number(e.target.value) < 0) {
            setRowsPerPage(8)
            setPage(0)
        }
        else {
            setRowsPerPage(Number(e.target.value))
            setPage(0)
        }
    }

    return (
        <TableHead>
            <TableRow>
                {columns.map((column) => (
                    <TableCell align="left" key={column.field} sortDirection={orderBy === column.field ? order : false} >
                        <TableSortLabel
                            active={orderBy == column.field}
                            onClick={() => {
                                setOrder(orderBy === column.field && order === 'desc' ? 'asc' : 'desc')
                                setOrderBy(column.field)
                            }}
                            direction={orderBy === column.field ? order : 'asc'}
                        >
                            {column.headerName}
                        </TableSortLabel>
                    </TableCell>))}
                <TableCell align='right'>
                    <Input type="number" inputProps={{
                        min: 0, max: data.length}
                    }  value={rowsPerPage} onChange={handleChangePageValue}/>
                </TableCell>
            </TableRow>
        </TableHead>
    )

}
