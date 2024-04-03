import {TableBody, TableCell, TableRow} from "@mui/material";
import {Tag} from "../TablePagination";


interface Props {
    visibleRows: Tag[];
}


export const TablePaginationBody = (props: Props) =>  {
    const {visibleRows} = props

    return (
        <TableBody>
            {visibleRows.map((row, i) => (
                <TableRow key={i}>
                    <TableCell align='left' component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="left">{row.count}</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            ))}
        </TableBody>
    )

}

