import {TableFooter, TablePagination, TableRow} from "@mui/material";
import * as React from "react";


export const TablePaginationFooter = ({rowsPerPage, setPage, data, page}) => {

    const handleChangePage = (e: unknown, newPage: number) => {
        setPage(newPage)
    }

    return (
        <TableFooter>
            <TableRow>
                <TablePagination count={data.length} page={page} rowsPerPage={rowsPerPage} rowsPerPageOptions={[]} onPageChange={handleChangePage}  />
            </TableRow>
        </TableFooter>
    )
}