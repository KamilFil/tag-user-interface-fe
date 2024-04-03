import {Meta} from "@storybook/react";
import {TablePaginationBody} from "../views/TablePagination/components/TablePaginationBody";

const meta: Meta<typeof TablePaginationBody> = {
    title: 'Tabela - Body',
    component: TablePaginationBody,

}

export default meta


export const EmptyItems: { args: { visibleRows: any[] } } = {
    args: {
        visibleRows: []
    }
}

export const OneItems: { args: { visibleRows: { name: string; count: number }[] } } = {
    args: {
    visibleRows: [
        {
            name: 'C++',
            count: 200,
        }]
}}

export const ManyItems: { args: { visibleRows: ({ name: string; count: number })[] } } = {
    args: {
        visibleRows: [
            {
                name: 'C++',
                count: 200,
            },
            {
                name: 'Java',
                count: 100,
            },
            {
                name: 'Python',
                count: 300,
            },
            {
                name: 'C#',
                count: 150,
            },
            {
                name: 'JavaScript',
                count: 250,
            },
            {
                name: 'Ruby',
                count: 50,
            },
        ]
    }
}


