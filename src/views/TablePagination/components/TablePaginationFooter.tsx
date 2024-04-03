import {TableFooter, TablePagination, TableRow} from "@mui/material";
import {Data} from "../TablePagination";
import * as React from "react";

interface Props {
    rowsPerPage: number;
    setPage: (page: number) => void;
    data: Data[];
    page: number;

}
export const TablePaginationFooter = (props: Props) => {
    const {rowsPerPage, setPage, data, page} = props
    const handleChangePage = (e:React.MouseEvent<HTMLButtonElement> | null ,newPage: number) => {
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