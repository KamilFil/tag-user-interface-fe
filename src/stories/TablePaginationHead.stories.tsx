import {Meta} from "@storybook/react";
import {TablePaginationHead} from "../views/TablePagination/components/TablePaginationHead";

const meta: Meta<typeof TablePaginationHead> = {
    title: 'Tabela - Head',
    component: TablePaginationHead,

}

export default meta


export const EmptyItems: { args: { data: number; columns: any[]; orderBy: string; active: { handleChangePage: () => void }; order: string } } = {
    args: {
        columns: [],
        data: 0,
        order: 'asc',
        orderBy: 'name',
        active: {
            handleChangePage: () => {},
        },
    }
}

export const TwoItems: { args: { data: number; columns: ({ headerName: string; field: string; width: number })[]; orderBy: string; active: { handleChangePage: () => void }; order: string } } ={args: {
    columns: [
        {
            field: 'name',
            headerName: 'Nazwa Tagu',
            width: 200,

        },
        {
            field: 'count',
            headerName: 'Ilość',
            width: 200,
        }
    ],
    data: 2,
    order: 'asc',
    orderBy: 'name',
        active: {
        handleChangePage: () => {},
        },
    }

}
