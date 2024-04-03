import {Meta, StoryObj} from "@storybook/react";
import {TablePaginationFooter} from "../views/TablePagination/components/TablePaginationFooter";


const meta: Meta<typeof TablePaginationFooter> = {
    title: 'Tabela - Paginacja',
    component: TablePaginationFooter,

}

export default meta
type Story = StoryObj<typeof TablePaginationFooter>


export const EmptyItem: Story = {
    args: {
        data: [],
        page: 0,
        rowsPerPage: 2,

}
}
export const OneItem: { args: { data: number[]; page: number; rowsPerPage: number } } = {
    args: {
        data: [1],
        page: 0,
        rowsPerPage: 2,

    }
}
export const ManyItems: { args: { data: number[]; page: number; rowsPerPage: number } } = {
    args: {
        data: [1,2,4,5,6,7,8,9,10],
        page: 0,
        rowsPerPage: 4,

    }
}
