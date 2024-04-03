import {Meta, StoryObj} from "@storybook/react";
import {TablePaginationBody} from "../views/TablePagination/components/TablePaginationBody";

const meta: Meta<typeof TablePaginationBody> = {
    title: 'Tabela - Body',
    component: TablePaginationBody,

}

export default meta
type Story = StoryObj<typeof TablePaginationBody>

export const EmptyItems: Story = {
    args: {
        visibleRows: []
    }
}

export const OneItems: Story = {
    args: {
    visibleRows: [
        {
            name: 'C++',
            count: 200,
        }]
}}

export const ManyItems: Story = {
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


