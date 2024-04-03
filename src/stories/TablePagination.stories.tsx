
import {Meta, StoryObj} from "@storybook/react";
import {TablePagination} from "../views/TablePagination/TablePagination";


const meta: Meta<typeof TablePagination> = {
    title: 'Tabela - Widok',
    component: TablePagination,
}

export default meta

type Story = StoryObj<typeof TablePagination>

export const Empty: Story = {}

export const TwoItems: { args: { data: ({ name: string; count: number } | { name: string; count: number })[] } } = {
    args: {
        data: [
            {
                name: 'C++',
                count: 200,
            },
            {
                name: 'Java',
                count: 100,
            }
        ]
    }
}