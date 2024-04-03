import {TableBody, TableCell, TableRow} from "@mui/material";
import * as React from "react";



export const TablePaginationBody = ({  visibleRows}) =>  {


    return (
        <TableBody>
            {visibleRows.map((rows, i) => (
                <TableRow key={i}>
                    <TableCell align='left' component="th" scope="row">
                        {rows.name}
                    </TableCell>
                    <TableCell align="left">{rows.count}</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            ))}
        </TableBody>
    )

}

