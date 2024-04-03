import {Meta, StoryObj} from "@storybook/react";
import {TablePaginationHead} from "../views/TablePagination/components/TablePaginationHead";

const meta: Meta<typeof TablePaginationHead> = {
    title: 'Tabela - Head',
    component: TablePaginationHead,

}

export default meta

type Story = StoryObj<typeof TablePaginationHead>

export const EmptyItems: Story = {
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

export const TwoItems: Story ={args: {
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
