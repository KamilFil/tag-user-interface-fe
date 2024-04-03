
import {
    Box,
    Table,
    TableContainer,

} from "@mui/material";
import {useCallback, useEffect, useMemo, useState} from "react";
import * as React from "react";
import {apiTag} from "../../../api/api";
import {TablePaginationHead} from "./components/TablePaginationHead";
import {TablePaginationFooter} from "./components/TablePaginationFooter";
import {TablePaginationBody} from "./components/TablePaginationBody";




export interface Tag {
    has_synonyms?: boolean;
    is_moderator_only?: boolean;
    is_required?: boolean;
    count: number;
    name: string;
}

interface HeadCell {
    field: string;
    headerName: string;
    width: number;
}

type Order = 'asc' | 'desc';

export const TablePagination = () => {
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState<boolean>(null)
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState<Tag[]>([])
    const [orderBy, setOrderBy] = useState('count');
    const [rowsPerPage, setRowsPerPage] = useState<number>(8);
    const [order, setOrder] = useState<Order>('desc');

    function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    const getComparator = useCallback(<Key extends keyof any>(order: Order, orderBy: Key) => {
        return order === 'desc'
            ? (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => descendingComparator(a, b, orderBy)
            : (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => -descendingComparator(a, b, orderBy);
    }, []);
    function stableSort<T> (array: readonly T[], comparator: (a: T, b: T) => number) {
        const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) {
                return order;
            }
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    const visibleRows = useMemo(
        () =>
            stableSort(data, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage, data, getComparator]
    );

    const columns: HeadCell[] = [
        {field: 'name', headerName: 'Name', width: 130},
        {field: 'count', headerName: 'Count', width: 90},
    ]

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const response = await apiTag()
                setData(response.data.items)
                setError(null)
            } catch (e) {
                setError('Nie udało się pobrać danych, skontaktuj się z administratorem')
                setData([])
            } finally {
                setLoading(false)
            }
        })()
    }, [])

    return (
        <>
            <Box sx={{overflow: 'auto'}}>
            <Box margin={"0 auto"} padding={"30px 0px"} sx={{width: '1200px', minHeight:'70vh' }}>
                {loading ? <div>Ładowanie danych...</div>
                :(<TableContainer>
                        <Table width={300}>
                            {error && <div>{error}</div>}
                            <TablePaginationHead
                                orderBy={orderBy}
                                rowsPerPage={rowsPerPage}
                                order={order}
                                data={data}
                                setOrder={setOrder}
                                setRowsPerPage={setRowsPerPage}
                                setPage={setPage}
                                setOrderBy={setOrderBy}
                                columns={columns}
                            />
                            <TablePaginationBody
                                loading={loading}
                                error={error}
                                visibleRows={visibleRows}
                            />
                            <TablePaginationFooter
                                data={data}
                                page={page}
                                rowsPerPage={rowsPerPage}
                                setPage={setPage}/>
                        </Table>
                    </TableContainer>)

                }
            </Box>
            </Box>
        </>
    );
}